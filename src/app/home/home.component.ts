import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { ɵEmptyOutletComponent } from "@angular/router";
import { MenusectionComponent } from '../menusection/menusection.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { HealthyFoodIconComponent } from "../shared/icons/healthy-food.icon/healthy-food.icon.component";
import { FrozenIconComponent } from "../shared/icons/frozen.icon/frozen.icon.component";
import { NutritionistIconComponent } from "../shared/icons/nutritionist.icon/nutritionist.icon.component";
import { DeliveryIconComponent } from "../shared/icons/delivery.icon/delivery.icon.component";
import { PlateIconComponent } from '../shared/icons/plate.icon/plate.icon.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ɵEmptyOutletComponent, MenusectionComponent, NavbarComponent, HealthyFoodIconComponent, FrozenIconComponent, NutritionistIconComponent, DeliveryIconComponent,PlateIconComponent,HowItWorksComponent],
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
      id: 'healthy',
      title: 'Viandas Saludables',
      description: 'Hiposódicas, hipograsas e hipocalóricas. Perfectas para tu plan de alimentación.'
    },
    {
      id: 'frozen',
      title: 'Freezadas y Frescas',
      description: 'Elaboradas con los mejores ingredientes. Listas para consumir cuando las necesites.'
    },
    {
      id: 'nutritionist',
      title: 'Respaldo Nutricional',
      description: 'Asesoramiento personalizado con nuestra nutricionista. Más de 15 años de experiencia.'
    },
    {
      id: 'delivery',
      title: 'Entrega a Domicilio',
      description: 'Servicio de delivery en La Plata y alrededores. Tu alimentación sin complicaciones.'
    }
  ];
isMenuOpen: any;
secciones: any;

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