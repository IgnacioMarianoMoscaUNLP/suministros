import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-healthy-food',
  standalone: true,
  template: `
    <svg viewBox="0 0 64 64" class="icon-svg">
      <!-- Corazón -->
      <path d="M32 55c-10-8-20-15-20-24 0-6 4-10 8-10 3 0 6 2 8 4 2-2 5-4 8-4 4 0 8 4 8 10 0 9-10 16-20 24z" 
            fill="currentColor" class="heart"/>
      <!-- Hoja -->
      <path d="M45 25c-2-4-6-6-10-6 2-1 4-2 4-4 0-2-1-3-2-3-4 0-8 4-10 8-2-4-6-8-10-8-1 0-2 1-2 3 0 2 2 3 4 4-4 0-8 2-10 6" 
            fill="currentColor" opacity="0.6" class="leaf"/>
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
export class HealthyFoodIconComponent {}
