import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  whatsappLink: string;
  instagramLink: string;
  facebookLink: string;
  businessName: string;
  
  // Beneficios principales
  benefits = [
    {
      icon: '🥗',
      title: 'Viandas Saludables',
      description: 'Hiposódicas, hipograsas e hipocalóricas. Perfectas para tu plan de alimentación.'
    },
    {
      icon: '❄️',
      title: 'Freezadas y Frescas',
      description: 'Elaboradas con los mejores ingredientes. Listas para consumir cuando las necesites.'
    },
    {
      icon: '👩‍⚕️',
      title: 'Respaldo Nutricional',
      description: 'Asesoramiento personalizado con nuestra nutricionista. Más de 10 años de experiencia.'
    },
    {
      icon: '🏠',
      title: 'Entrega a Domicilio',
      description: 'Servicio de delivery en La Plata y alrededores. Tu alimentación sin complicaciones.'
    }
  ];

  constructor() {
    const phone = environment.whatsappNumber;
    const message = encodeURIComponent(environment.whatsappMessage);
    this.whatsappLink = `https://wa.me/${phone}?text=${message}`;
    this.instagramLink = environment.instagramUrl;
    this.facebookLink = environment.facebookUrl;
    this.businessName = environment.businessName;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openWhatsApp(): void {
    window.open(this.whatsappLink, '_blank');
  }
}