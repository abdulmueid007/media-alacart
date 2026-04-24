import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SolutionCard } from '../../components/solution-card/solution-card';
import { SolutionSection } from '../../../core/model/home';
import { ButtonDirective } from '../../ui/button/button.directive';
import { SlideRevealDirective } from '../../../core/directives/slide-reveal.directive';
import { Image } from '../../ui/image/image';

@Component({
  selector: 'app-solutions-section',
  imports: [CommonModule, SolutionCard, ButtonDirective, SlideRevealDirective, Image],
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {
  @Input({ required: true }) solutionData!: SolutionSection;
}
