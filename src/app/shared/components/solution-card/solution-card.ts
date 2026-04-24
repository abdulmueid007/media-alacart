import { Component, Input } from '@angular/core';
import { SolutionCardType } from '../../../core/model/home';
import { CommonModule } from '@angular/common';
import { IconButton } from '../../ui/icon-button/icon-button';
import { IconButtonDirective } from '../../ui/icon-button/icon-button-directive';
import { SlideRevealDirective } from '../../../core/directives/slide-reveal.directive';

@Component({
  selector: 'app-solution-card',
  imports: [CommonModule, IconButton, IconButtonDirective, SlideRevealDirective],
  templateUrl: './solution-card.html',
  styleUrl: './solution-card.css',
})
export class SolutionCard {
  @Input({ required: true }) data!: SolutionCardType;
  @Input({ required: true}) index!:number;
}
