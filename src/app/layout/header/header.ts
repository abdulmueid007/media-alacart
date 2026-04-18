import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  trigger, transition, style, animate, group, query, stagger
} from '@angular/animations';

const SPRING    = 'cubic-bezier(0.22, 1, 0.36, 1)';
const BOUNCE    = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
const EASE_IN   = 'cubic-bezier(0.4, 0, 0.2, 1)';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  animations: [
    trigger('mobileMenu', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px) scaleY(0.97)', transformOrigin: 'top' }),
        group([
          animate(`320ms ${SPRING}`,
            style({ opacity: 1, transform: 'translateY(0) scaleY(1)' })),
          query('a', [
            style({ opacity: 0, transform: 'translateX(-14px)' }),
            stagger(55, [
              animate(`280ms ${SPRING}`,
                style({ opacity: 1, transform: 'translateX(0)' }))
            ])
          ], { optional: true })
        ])
      ]),
      transition(':leave', [
        group([
          query('a', [
            stagger(-30, [
              animate(`120ms ${EASE_IN}`,
                style({ opacity: 0, transform: 'translateX(-8px)' }))
            ])
          ], { optional: true }),
          animate(`220ms 60ms ${EASE_IN}`,
            style({ opacity: 0, transform: 'translateY(-8px)' }))
        ])
      ])
    ])
  ]
})
export class Header {
  readonly navLinks = [
    { label: 'The Platform',    path: '/'          },
    { label: 'Features',        path: '/features'  },
    { label: 'Benefits',        path: '/benefits'  },
    { label: 'Request a Demo',  path: '/demo'      },
    { label: 'Contact Us',      path: '/contact'   },
    { label: 'About Us',        path: '/about'     },
  ];

  isMenuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
