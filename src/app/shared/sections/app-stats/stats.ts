import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonDirective } from '../../ui/button/button.directive';
import { CountUpDirective } from '../../../core/directives/count-up.directive';
import { StatsData } from '../../../core/model/stats.model';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [ButtonDirective, CountUpDirective],
  templateUrl: './stats.html',
  styleUrls: ['./stats.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stats {
  @Input({ required: true }) statsData!: StatsData;
}
