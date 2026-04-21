import { Component } from '@angular/core';
import { CrossBanner } from '../../shared/sections/comming-soon-banner/cross-banner';
import { Hero } from '../../shared/sections/hero/hero';
import { OurServices } from '../../shared/sections/our-services/our-services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, CrossBanner, OurServices],
  templateUrl: './home.html',
})
export class Home {}
