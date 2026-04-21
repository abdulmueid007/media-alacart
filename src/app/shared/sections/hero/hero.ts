import { Component } from '@angular/core';
import { AppButton } from '../../ui/button/button';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import { IconComponent } from '../../ui/icon-component/icon-component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AppButton, IconComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  faPlayCircle = faPlayCircle;
}
