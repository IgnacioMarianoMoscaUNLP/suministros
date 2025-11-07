import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-delivery',
  standalone: true,
  template: `
    <svg viewBox="0 0 64 64" class="icon-svg">
      <!-- Cuerpo moto -->
      <rect x="18" y="30" width="28" height="12" rx="2" fill="currentColor" opacity="0.8"/>
      <!-- Rueda trasera -->
      <circle cx="24" cy="44" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
      <!-- Rueda delantera -->
      <circle cx="44" cy="44" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
      <!-- Manillar -->
      <line x1="48" y1="30" x2="48" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="46" y1="22" x2="50" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <!-- Asiento -->
      <rect x="28" y="26" width="8" height="4" rx="1" fill="currentColor" opacity="0.9"/>
      <!-- Caja de entrega -->
      <rect x="14" y="20" width="10" height="8" rx="1" fill="currentColor" opacity="0.7"/>
    </svg>
  `,
  styles: [`
    .icon-svg {
      width: 4rem;
      height: 4rem;
      color: var(--accent-green);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
      transition: all 0.3s ease;
    }
  `]
})
export class DeliveryIconComponent {}
