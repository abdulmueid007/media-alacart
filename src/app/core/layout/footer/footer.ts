import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faLocationPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from '../../../shared/ui/icon-component/icon-component';
import { SlideRevealDirective } from '../../directives/slide-reveal.directive';

interface Link {
  label: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  imports: [CommonModule, IconComponent, SlideRevealDirective],
})
export class Footer {
  year = new Date().getFullYear();
  faEnvelope = faEnvelope;
  faLocationPin = faLocationPin;

  usefulLinks: Link[] = [
    { label: 'The Platform', url: '#' },
    { label: 'Features', url: '#' },
    { label: 'Benefits', url: '#' },
    { label: 'Request a Demo', url: '#' },
  ];

  companyLinks: Link[] = [
    { label: 'Contact Us', url: '#' },
    { label: 'About Us', url: '#' },
    { label: 'Privacy Policy', url: '#' },
    { label: 'Terms of Service', url: '#' },
  ];
}
