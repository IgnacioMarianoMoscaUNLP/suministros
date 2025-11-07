import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="how-works-section">
      <div class="container">
        <h2 class="section-title">Nuestro Proceso</h2>
        
        <div class="steps-container">
          <div class="steps-grid">
            <div class="step-card" *ngFor="let step of steps; let i = index">
              <div class="step-number">{{ step.number }}</div>
              <div class="step-icon">{{ step.icon }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
              
              <!-- Línea conectora (no en el último) -->
              <div class="connector" *ngIf="i < steps.length - 1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent {
  steps: Step[] = [
    {
      number: 1,
      title: 'Selección',
      description: 'Elegimos los mejores ingredientes frescos',
      icon: '🛒'
    },
    {
      number: 2,
      title: 'Preparación',
      description: 'Elaboramos con cuidado en nuestra cocina',
      icon: '👨‍🍳'
    },
    {
      number: 3,
      title: 'Congelación',
      description: 'Freezamos para mantener frescura y nutrientes',
      icon: '❄️'
    },
    {
      number: 4,
      title: 'Empaque',
      description: 'Empaques de calidad y profesionales',
      icon: '📦'
    },
    {
      number: 5,
      title: 'Entrega',
      description: 'Llevamos a tu puerta en el tiempo acordado',
      icon: '🚚'
    }
  ];
}
