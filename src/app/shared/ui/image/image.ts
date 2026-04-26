import { Component, Input } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-image',
  templateUrl: './image.html',
  styleUrls: ['./image.css'],
  imports: [NgxSkeletonLoaderModule],
})
export class Image {
  @Input() src = '';
  @Input() alt = '';
  @Input() imgClass = '';
  @Input() borderRadius = '12px';

  loaded = false;

  onLoad() {
    this.loaded = true;
  }

  onError() {
    this.loaded = true;
  }
}
