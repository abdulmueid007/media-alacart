import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SolutionCard } from '../../components/solution-card/solution-card';
import { ButtonDirective } from '../../ui/button/button.directive';
import { SlideRevealDirective } from '../../../core/directives/slide-reveal.directive';
import { Image } from '../../ui/image/image';
import { SolutionSection } from '../../../core/model/solution.model';
import { TranslatePipe } from '../../../core/pipes/translate.pipe';

@Component({
  selector: 'app-solutions-section',
  imports: [
    CommonModule,
    SolutionCard,
    ButtonDirective,
    SlideRevealDirective,
    Image,
    TranslatePipe,
  ],
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {
  @Input({ required: true }) solutionData!: SolutionSection;
}
