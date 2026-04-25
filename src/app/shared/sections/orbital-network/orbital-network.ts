import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { OrbitalAvatar } from '../../../core/model/orbital-network.model';
import {
  CX_FRAC,
  CY_FRAC,
  DOT_SIZE,
  EDGE_FADE,
  ORBITS,
  STATIC_DOTS,
} from '../../../core/constants/orbital-constants';

@Component({
  selector: 'app-orbital-network',
  standalone: true,
  templateUrl: './orbital-network.html',
  styleUrl: './orbital-network.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrbitalNetwork implements AfterViewInit, OnChanges, OnDestroy {
  @Input({ required: true }) avatars!: OrbitalAvatar[];

  @ViewChild('containerEl') private containerRef!: ElementRef<HTMLElement>;
  @ViewChildren('avatarEl') private avatarElsRef!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('dotEl') private dotElsRef!: QueryList<ElementRef<HTMLElement>>;

  private zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  items: OrbitalAvatar[] = [];
  arcPaths: string[] = ['', '', ''];
  readonly dots = STATIC_DOTS;

  private cw = 0;
  private ch = 0;
  private animId = 0;
  private startTime: number | null = null;
  private resizeObserver?: ResizeObserver;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['avatars']) {
      this.items = this.avatars.filter((a) => a.orbitIdx >= 0 && a.orbitIdx < ORBITS.length);
      this.cdr.markForCheck();
    }
  }

  ngAfterViewInit(): void {
    this.items = this.avatars.filter((a) => a.orbitIdx >= 0 && a.orbitIdx < ORBITS.length);

    const container = this.containerRef.nativeElement;
    this.measure(container);

    this.resizeObserver = new ResizeObserver(() => {
      this.measure(container);
      this.cdr.markForCheck();
    });
    this.resizeObserver.observe(container);

    this.zone.runOutsideAngular(() => {
      const loop = (ts: number) => {
        if (!this.startTime) this.startTime = ts;
        this.tick((ts - this.startTime) / 1000);
        this.animId = requestAnimationFrame(loop);
      };
      this.animId = requestAnimationFrame(loop);
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animId);
    this.resizeObserver?.disconnect();
  }

  private measure(el: HTMLElement): void {
    this.cw = el.offsetWidth;
    this.ch = el.offsetHeight;

    this.arcPaths = ORBITS.map((_, i) => this.buildArcPath(i));
  }

  private buildArcPath(orbitIdx: number): string {
    const r = this.radius(orbitIdx);
    const cx = this.cw * CX_FRAC;
    const cy = this.ch * CY_FRAC;
    const r1 = r.toFixed(1);
    return [
      `M ${(cx - r).toFixed(1)},${cy.toFixed(1)}`,
      `A ${r1},${r1} 0 0 0`,
      `${(cx + r).toFixed(1)},${cy.toFixed(1)}`,
    ].join(' ');
  }

  private radius(orbitIdx: number): number {
    return (this.cw / 2) * ORBITS[orbitIdx].rFrac;
  }

  private getXY(orbitIdx: number, t: number): { x: number; y: number } {
    const r = this.radius(orbitIdx);
    return {
      x: this.cw * CX_FRAC + r * Math.cos(t),
      y: this.ch * CY_FRAC + r * Math.sin(t),
    };
  }

  private tick(elapsed: number): void {
    if (!this.cw || !this.ch) return;

    const els = this.avatarElsRef.toArray();

    for (let i = 0; i < this.items.length; i++) {
      const el = els[i]?.nativeElement;
      if (!el) continue;

      const avatar = this.items[i];
      const orbit = ORBITS[avatar.orbitIdx];

      const phase = (((avatar.phaseFrac + elapsed * orbit.speed) % 1) + 1) % 1;
      const angle = Math.PI * (1 - phase);

      const { x, y } = this.getXY(avatar.orbitIdx, angle);
      const half = el.offsetWidth / 2;

      const opacity =
        phase < EDGE_FADE ? phase / EDGE_FADE : phase > 1 - EDGE_FADE ? (1 - phase) / EDGE_FADE : 1;

      el.style.transform = `translate(${x - half}px, ${y - half}px)`;
      el.style.opacity = opacity.toFixed(3);
    }

    const dotEls = this.dotElsRef.toArray();
    for (let i = 0; i < STATIC_DOTS.length; i++) {
      const el = dotEls[i]?.nativeElement;
      if (!el) continue;

      const dot = STATIC_DOTS[i];
      const orbit = ORBITS[dot.orbitIdx];
      const phase = (((dot.angleFrac + elapsed * orbit.speed) % 1) + 1) % 1;
      const angle = Math.PI * (1 - phase);
      const { x, y } = this.getXY(dot.orbitIdx, angle);
      const half = DOT_SIZE / 2;

      const opacity =
        phase < EDGE_FADE ? phase / EDGE_FADE : phase > 1 - EDGE_FADE ? (1 - phase) / EDGE_FADE : 1;

      el.style.transform = `translate(${x - half}px, ${y - half}px)`;
      el.style.opacity = opacity.toFixed(3);
    }
  }
}
