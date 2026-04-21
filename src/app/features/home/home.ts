import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { CrossBanner } from './components/comming-soon-banner/cross-banner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, CrossBanner],
  templateUrl: './home.html',
})
export class Home {}
