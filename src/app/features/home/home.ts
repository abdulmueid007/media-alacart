import { Component } from '@angular/core';
import { CrossBanner } from '../../shared/sections/comming-soon-banner/cross-banner';
import { Hero } from '../../shared/sections/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, CrossBanner],
  templateUrl: './home.html',
})
export class Home {}
