import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../../ui/button/button.directive';
import { CountUpDirective } from '../../../core/directives/count-up.directive';
import { StatsData } from '../../../core/model/stats.model';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, ButtonDirective, CountUpDirective],
  templateUrl: './stats.html',
  styleUrls: ['./stats.css'],
})
export class Stats {
  @Input({ required: true }) statsData!: StatsData;
}
