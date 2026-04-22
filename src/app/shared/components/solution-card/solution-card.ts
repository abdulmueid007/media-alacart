import { Component, Input } from '@angular/core';
import { SolutionCardType } from '../../../core/model/home';
import { CommonModule } from '@angular/common';
import { IconButton } from '../../ui/icon-button/icon-button';
import { IconButtonDirective } from '../../ui/icon-button/icon-button-directive';

@Component({
  selector: 'app-solution-card',
  imports: [CommonModule, IconButton, IconButtonDirective],
  templateUrl: './solution-card.html',
  styleUrl: './solution-card.css',
})
export class SolutionCard {
  @Input({ required: true }) data!: SolutionCardType;
}
