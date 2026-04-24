import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollAnimationService {
  defaultDuration = 500;
  defaultDelay = 200;
  defaultThreshold = 0.2;

  getConfig() {
    return {
      duration: this.defaultDuration,
      delay: this.defaultDelay,
      threshold: this.defaultThreshold
    };
  }
}