import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCard } from '../../components/service-card/service-card';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCard],
  templateUrl: './our-services.html',
  styleUrls: ['./our-services.css']
})
export class OurServices implements OnInit {

  services: any[] = [];


  ngOnInit() {
   
    this.services = [
      {
        title: 'Advertisers',
        description: 'Run & optimize ads across multiple platforms effortlessly.',
        image: 'assets/images/service-1.png'
      },
      {
        title: 'Agencies',
        description: 'Run & optimize ads across multiple platforms effortlessly.',
        image: 'assets/images/service-2.png',
      },
      {
        title: 'Media Owners',
        description: 'Run & optimize ads across multiple platforms effortlessly.',
        image: 'assets/images/service-3.png',
      }
    ];
  }
}