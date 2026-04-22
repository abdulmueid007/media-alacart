import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SolutionCard } from '../../components/solution-card/solution-card';
import { SolutionSection } from '../../../core/model/home';
import { ButtonDirective } from '../../ui/button/button.directive';

@Component({
  selector: 'app-solutions-section',
  imports: [CommonModule, SolutionCard, ButtonDirective],
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {
  @Input({ required: true }) solutionData!: SolutionSection;
}
