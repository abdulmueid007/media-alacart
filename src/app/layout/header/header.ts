import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  readonly navLinks = [
    { label: 'The Platform',   path: '/' },
    { label: 'Features',       path: '/features' },
    { label: 'Benefits',       path: '/benefits' },
    { label: 'Request a Demo', path: '/demo' },
    { label: 'Contact Us',     path: '/contact' },
    { label: 'About Us',       path: '/about' },
  ];

  isMenuOpen = false;
  isScrolled = false;

  constructor(private router: Router) {
    // 🔥 Close mobile menu on route change
    this.router.events.subscribe(() => {
      this.isMenuOpen = false;
    });
  }

  // 🔥 Scroll effect
  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 200;
  }

  // 🔥 Toggle menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // 🔥 Close menu manually
  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // 🔥 Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.header')) {
      this.isMenuOpen = false;
    }
  }
}