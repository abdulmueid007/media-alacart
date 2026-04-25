import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonDirective } from '../../../shared/ui/button/button.directive';
import { NgmMotionDirective, Variants } from '@scripttype/ng-motion';
import { SlideRevealDirective } from '../../directives/slide-reveal.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ButtonDirective, NgmMotionDirective, SlideRevealDirective],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly itemVariants: Variants = {
    visible: { opacity: 1, y: 0, x: 0 },
    hidden: { opacity: 0, y: 20, x: -12 },
  };

  readonly navLinks = [
    { label: 'The Platform', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Benefits', path: '/benefits' },
    { label: 'Request a Demo', path: '/demo' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'About Us', path: '/about' },
  ];

  isMenuOpen = signal(false);
  isScrolled = false;

  private router = inject(Router);

  constructor() {
    this.router.events.subscribe(() => {
      this.isMenuOpen.set(false);
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 100;
  }

  toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.header')) {
      this.isMenuOpen.set(false);
    }
  }
}
