import { Directive, Input, HostBinding, inject, computed } from '@angular/core';
import { LangService } from '../../../core/services/lang.service';

type ButtonVariant = 'primary' | 'outlined';

@Directive({
  selector: 'app-icon-button[appIconButton]',
  standalone: true,
})
export class IconButtonDirective {
  private lang = inject(LangService);
  @Input() variant: ButtonVariant = 'primary';
  @Input() iconColor = 'var(--color-text)';

  @Input() userClass = '';

  readonly isRtl = computed(() => this.lang.isRtl());

  constructor() {
    console.log(this.isRtl(), 'Dasdsa');
  }

  @HostBinding('class')
  get classes(): string {
    return [
      'icon-btn-wrapper',
      `icon-btn-wrapper-${this.variant}`,
      this.userClass,
      this.isRtl() ? 'rtl' : '',
    ].join(' ');
  }
}
