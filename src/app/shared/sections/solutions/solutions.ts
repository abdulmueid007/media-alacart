import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SolutionCard } from '../../components/solution-card/solution-card';
import { SolutionSection } from '../../../core/model/home';
import { ButtonDirective } from '../../ui/button/button.directive';
import { NgmMotionDirective } from '@scripttype/ng-motion';
import { SlideRevealDirective } from '../../../core/directives/slide-reveal.directive';
import { Image } from '../../ui/image/image';

@Component({
  selector: 'app-solutions-section',
  imports: [CommonModule, SolutionCard, ButtonDirective, NgmMotionDirective, SlideRevealDirective, Image],
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {
  @Input({ required: true }) solutionData!: SolutionSection;
}
