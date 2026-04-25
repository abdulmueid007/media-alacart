import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCard } from '../../components/service-card/service-card';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from '../../ui/icon-component/icon-component';
import { Service } from '../../../core/model/home.model';
@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCard, IconComponent],
  templateUrl: './our-services.html',
  styleUrls: ['./our-services.css']
})
export class OurServices {
  faGears = faGears;
  @Input({ required: true }) services!: Service[];

}