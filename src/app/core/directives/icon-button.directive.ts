import { Directive, Input, HostBinding } from '@angular/core';

type ButtonVariant = 'primary' | 'outlined';

@Directive({
  selector: 'app-icon-button[iconButton]',
  standalone: true,
})
export class IconButtonDirective {

  @Input() variant: ButtonVariant = 'primary';
  @Input() iconColor: string = 'var(--color-text)';

  @Input('class') userClass = '';

  @HostBinding('class')
  get classes(): string {
    return [
      'icon-btn-wrapper',
      `icon-btn-wrapper-${this.variant}`,
      this.userClass
    ].join(' ');
  }
}