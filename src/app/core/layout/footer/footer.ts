import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faLocationPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from '../../../shared/ui/icon-component/icon-component';
import { SlideRevealDirective } from '../../directives/slide-reveal.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface FooterLink {
  labelKey: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  imports: [CommonModule, IconComponent, SlideRevealDirective, TranslatePipe],
})
export class Footer {
  year = new Date().getFullYear();
  faEnvelope = faEnvelope;
  faLocationPin = faLocationPin;

  usefulLinks: FooterLink[] = [
    { labelKey: 'footer.link.platform', url: '#' },
    { labelKey: 'footer.link.features', url: '#' },
    { labelKey: 'footer.link.benefits', url: '#' },
    { labelKey: 'footer.link.demo', url: '#' },
  ];

  companyLinks: FooterLink[] = [
    { labelKey: 'footer.link.contact', url: '#' },
    { labelKey: 'footer.link.about', url: '#' },
    { labelKey: 'footer.link.privacy', url: '#' },
    { labelKey: 'footer.link.terms', url: '#' },
  ];
}
