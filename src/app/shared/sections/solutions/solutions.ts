import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SolutionCard } from '../../components/solution-card/solution-card';
import { SolutionSection } from '../../../core/model/home';
import { ButtonDirective } from '../../ui/button/button.directive';
import { NgmMotionDirective } from '@scripttype/ng-motion';

@Component({
  selector: 'app-solutions-section',
  imports: [CommonModule, SolutionCard, ButtonDirective, NgmMotionDirective],
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {
  @Input({ required: true }) solutionData!: SolutionSection;
}
