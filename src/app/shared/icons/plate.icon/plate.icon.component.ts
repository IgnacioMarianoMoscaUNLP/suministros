import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-plate',
  standalone: true,
  template: `
    <svg viewBox="0 0 64 64" class="icon-plate">
      <!-- Plato principal -->
      <circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" stroke-width="2.5"/>
      
      <!-- Cubiertos decorativos -->
      <!-- Tenedor (izquierda) -->
      <g>
        <line x1="18" y1="20" x2="18" y2="44" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="16" cy="18" r="1.5" fill="currentColor"/>
        <circle cx="18" cy="18" r="1.5" fill="currentColor"/>
        <circle cx="20" cy="18" r="1.5" fill="currentColor"/>
      </g>
      
      <!-- Cuchillo (derecha) -->
      <g>
        <line x1="46" y1="20" x2="46" y2="44" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="46" cy="18" r="2" fill="currentColor"/>
      </g>
      
      <!-- Hoja decorativa en el centro (representa salud) -->
      <g opacity="0.6">
        <path d="M 32 25 Q 35 28 32 40 Q 29 28 32 25 Z" fill="currentColor"/>
        <line x1="30" y1="30" x2="34" y2="30" stroke="currentColor" stroke-width="0.8"/>
      </g>
    </svg>
  `,
  styles: [`
    .icon-plate {
      width: 5rem;
      height: 5rem;
      color: rgba(255, 255, 255, 0.9);
      filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
      transition: all 0.3s ease;
    }
  `]
})
export class PlateIconComponent {}
