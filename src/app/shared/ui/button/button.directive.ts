import { Directive, Input, HostBinding } from '@angular/core';

type ButtonVariant = 'primary' | 'outlined';

@Directive({
  selector: 'button[appButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() variant: ButtonVariant = 'primary';
  @Input() textColor = '#ffffff';

  @Input() userClass = '';

  @HostBinding('style.color')
  get color(): string {
    return this.textColor;
  }

  @HostBinding('class')
  get classes(): string {
    return ['btn', `btn-${this.variant}`, this.userClass].join(' ');
  }
}
