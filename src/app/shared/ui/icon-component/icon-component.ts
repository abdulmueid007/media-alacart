import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './icon-component.html'
})
export class IconComponent {
  @Input() icon!: IconDefinition; 

  @Input() size: SizeProp = 'sm';
  @Input() color?: string;       
  @Input() customClass = '';
}