import { Component } from '@angular/core';
import { AppButton }      from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AppButton],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
