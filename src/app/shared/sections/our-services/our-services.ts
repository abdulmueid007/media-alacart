import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ServiceCard } from '../../components/service-card/service-card';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from '../../ui/icon-component/icon-component';
import { Service } from '../../../core/model/service.model';
import { TranslatePipe } from '../../../core/pipes/translate.pipe';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ServiceCard, IconComponent, TranslatePipe],
  templateUrl: './our-services.html',
  styleUrls: ['./our-services.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurServices {
  faGears = faGears;
  @Input({ required: true }) services!: Service[];
}
