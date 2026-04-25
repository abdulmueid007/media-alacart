import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { OrbitalAvatar } from '../../../core/model/orbital-network.model';
import {
  CX_FRAC,
  CY_FRAC,
  EDGE_FADE,
  ORBITS,
  STATIC_DOTS,
} from '../../../core/constants/orbital-constants';

gsap.registerPlugin(MotionPathPlugin);

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

  private cdr = inject(ChangeDetectorRef);

  items: OrbitalAvatar[] = [];
  arcPaths: string[] = [];
  readonly dots = STATIC_DOTS;

  private cw = 0;
  private ch = 0;
  private tweens: gsap.core.Tween[] = [];
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
    this.cdr.detectChanges();
    this.startAnimations();

    this.resizeObserver = new ResizeObserver(() => {
      this.measure(container);
      this.cdr.detectChanges();
      this.restartAnimations();
    });
    this.resizeObserver.observe(container);
  }

  ngOnDestroy(): void {
    this.tweens.forEach((t) => t.kill());
    this.resizeObserver?.disconnect();
  }

  private measure(el: HTMLElement): void {
    const rect = el.getBoundingClientRect();
    this.cw = rect.width;
    this.ch = rect.height;
    this.arcPaths = ORBITS.map((_, i) => this.buildArcPath(i));
  }

  private buildArcPath(orbitIdx: number): string {
    const r = (this.cw / 2) * ORBITS[orbitIdx].rFrac;
    const cx = this.cw * CX_FRAC;
    const cy = this.ch * CY_FRAC;
    const r3 = r.toFixed(3);
    return [
      `M ${(cx - r).toFixed(3)},${cy.toFixed(3)}`,
      `A ${r3},${r3} 0 0 0`,
      `${(cx + r).toFixed(3)},${cy.toFixed(3)}`,
    ].join(' ');
  }

  private startAnimations(savedPhases?: number[]): void {
    const avatarEls = this.avatarElsRef.toArray();
    const dotEls = this.dotElsRef.toArray();
    let idx = 0;

    this.items.forEach((avatar, i) => {
      const el = avatarEls[i]?.nativeElement;
      if (!el) return;
      const tween = this.orbitTween(el, avatar.orbitIdx);
      tween.progress(savedPhases?.[idx] ?? avatar.phaseFrac);
      this.tweens.push(tween);
      idx++;
    });

    STATIC_DOTS.forEach((dot, i) => {
      const el = dotEls[i]?.nativeElement;
      if (!el) return;
      const tween = this.orbitTween(el, dot.orbitIdx);
      tween.progress(savedPhases?.[idx] ?? dot.angleFrac);
      this.tweens.push(tween);
      idx++;
    });
  }

  private restartAnimations(): void {
    const savedPhases = this.tweens.map((t) => {
      const dur = t.duration();
      return dur > 0 ? (t.time() % dur) / dur : 0;
    });
    this.tweens.forEach((t) => t.kill());
    this.tweens = [];
    this.startAnimations(savedPhases);
  }

  private orbitTween(el: HTMLElement, orbitIdx: number): gsap.core.Tween {
    const pathId = `orbit-path-${orbitIdx}`;
    const duration = 1 / ORBITS[orbitIdx].speed;

    const tween: gsap.core.Tween = gsap.to(el, {
      duration,
      ease: 'none',
      repeat: -1,
      motionPath: {
        path: `#${pathId}`,
        align: `#${pathId}`,
        alignOrigin: [0.5, 0.5],
      },
      onUpdate() {
        const phase = (tween.time() % duration) / duration;
        const opacity =
          phase < EDGE_FADE
            ? phase / EDGE_FADE
            : phase > 1 - EDGE_FADE
              ? (1 - phase) / EDGE_FADE
              : 1;
        el.style.opacity = opacity.toFixed(3);
      },
    });

    return tween;
  }
}
