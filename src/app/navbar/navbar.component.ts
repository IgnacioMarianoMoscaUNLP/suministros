import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ environment } from '../../environments/environment';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
navigateToSection(arg0: string) {
  this.menuOpen = false;
  this.scrollToSection(arg0);
}
  businessName: string;
  menuOpen: boolean = false;
toggleMenu() {
    this.menuOpen = !this.menuOpen;
}
  
  constructor() {
    this.businessName = environment.businessName;
  }  


  menuItems = [
    { label: 'Inicio', section: 'hero-section' },
    { label: 'Beneficios', section: 'beneficios' },
    { label: 'Nosotros', section: 'nosotros' },
    { label: 'Carta', section: 'menusection' },
    { label: 'Contacto', section: 'contacto' }
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Altura aproximada del navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}