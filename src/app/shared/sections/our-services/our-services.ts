import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCard } from '../../components/service-card/service-card';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from '../../ui/icon-component/icon-component';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCard, IconComponent],
  templateUrl: './our-services.html',
  styleUrls: ['./our-services.css']
})
export class OurServices implements OnInit {
  faGears = faGears;
  services: any[] = [];


  ngOnInit() {
   
    this.services = [
      {
        title: 'Advertisers',
        description: 'Run & Optimize ads across multiple platforms effortlessly.',
        image: 'assets/images/service-1.png'
      },
      {
        title: 'Agencies',
        description: 'Run & Optimize ads across multiple platforms effortlessly.',
        image: 'assets/images/service-2.png',
      },
      {
        title: 'Media Owners',
        description: 'Run & Optimize ads across multiple platforms effortlessly.',
        image: 'assets/images/service-3.png',
      }
    ];
  }
}