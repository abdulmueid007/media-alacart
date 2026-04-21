import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export type ButtonVariant = 'primary' | 'dark-glass';
export type ButtonSize    = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class AppButton {

  @Input() customClass = '';
  /** Visual style of the button */
  @Input() variant: ButtonVariant = 'primary';

  /** Router path (optional — renders plain anchor when omitted) */
  @Input() link?: string;

  /** Size preset */
  @Input() size: ButtonSize = 'md';
}
