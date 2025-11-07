import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-nutritionist',
  standalone: true,
  template: `
    <svg viewBox="0 0 64 64" class="icon-svg">
      <!-- Cabeza -->
      <circle cx="32" cy="16" r="8" fill="currentColor" opacity="0.7"/>
      <!-- Cuerpo -->
      <rect x="26" y="26" width="12" height="16" rx="2" fill="currentColor" opacity="0.8"/>
      <!-- Diploma/Certificado -->
      <rect x="20" y="34" width="24" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
      <!-- Línea en diploma -->
      <line x1="24" y1="40" x2="40" y2="40" stroke="currentColor" stroke-width="1.5"/>
      <line x1="24" y1="45" x2="40" y2="45" stroke="currentColor" stroke-width="1.5"/>
      <!-- Sello en diploma -->
      <circle cx="42" cy="48" r="3" fill="currentColor"/>
    </svg>
  `,
  styles: [`
    .icon-svg {
      width: 4rem;
      height: 4rem;
      color: var(--primary-green);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
      transition: all 0.3s ease;
    }
  `]
})
export class NutritionistIconComponent {}
