import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-frozen',
  standalone: true,
  template: `
    <svg viewBox="0 0 64 64" class="icon-svg">
      <!-- Copo de nieve principal -->
      <g fill="currentColor">
        <!-- Línea vertical -->
        <rect x="30" y="8" width="4" height="48" rx="2"/>
        <!-- Línea diagonal 1 -->
        <rect x="16" y="22" width="4" height="34" rx="2" transform="rotate(-60 18 24)"/>
        <!-- Línea diagonal 2 -->
        <rect x="44" y="22" width="4" height="34" rx="2" transform="rotate(60 46 24)"/>
        <!-- Puntas exteriores -->
        <circle cx="32" cy="12" r="2.5"/>
        <circle cx="48" cy="24" r="2.5"/>
        <circle cx="52" cy="40" r="2.5"/>
        <circle cx="32" cy="52" r="2.5"/>
        <circle cx="12" cy="40" r="2.5"/>
        <circle cx="16" cy="24" r="2.5"/>
      </g>
    </svg>
  `,
  styles: [`
    .icon-svg {
      width: 4rem;
      height: 4rem;
      color: var(--accent-light);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
      transition: all 0.3s ease;
    }
  `]
})
export class FrozenIconComponent {}
