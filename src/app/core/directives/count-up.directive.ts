import { Directive, ElementRef, Input, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { CountUp } from 'countup.js';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  @Input('appCountUp') value: string | number = 0;
  @Input() duration = 2;
  @Input() threshold = 0.4;
  @Input() once = true;

  private observer?: IntersectionObserver;
  private counter?: CountUp;
  private started = false;

  private el = inject(ElementRef<HTMLElement>);

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!this.started || !this.once) {
            this.startCounter();
          }
        } else if (!this.once) {
          this.started = false;
          this.counter?.reset();
        }
      },
      {
        threshold: this.threshold,
      },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private startCounter(): void {
    this.started = true;

    const parsed = this.parseValue(this.value);

    this.counter = new CountUp(this.el.nativeElement, parsed.number, {
      duration: this.duration,
      decimalPlaces: parsed.decimals,
      suffix: parsed.suffix,
      useGrouping: true,
    });

    this.counter.start();
  }

  private parseValue(value: string | number) {
    if (typeof value === 'number') {
      return {
        number: value,
        suffix: '',
        decimals: 0,
      };
    }

    const match = value.match(/^([\d,.]+)(.*)$/);

    const number = match ? parseFloat(match[1].replace(/,/g, '')) : 0;

    const suffix = match ? match[2] : '';

    const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0;

    return {
      number,
      suffix,
      decimals,
    };
  }
}
