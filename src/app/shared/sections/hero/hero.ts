import { Component, Input } from '@angular/core';
import { AppButton } from '../../ui/button/button';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import { IconComponent } from '../../ui/icon-component/icon-component';
import { HeroBanner } from '../../../core/model/home';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AppButton, IconComponent, CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  faPlayCircle = faPlayCircle;
  imageLoaded = false;
  @Input({ required: true }) heroBanner!: HeroBanner;

  onImageLoad() {
    this.imageLoaded = true;
  }
}
