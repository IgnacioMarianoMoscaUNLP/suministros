import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackSelectorService } from '../services/pack-selector.service';

@Component({
  selector: 'app-pack-selector-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pack-selector-bar" *ngIf="packActual">
      <div class="bar-content">
        <!-- Mostrar progreso -->
        <div class="progress-info">
          <span class="label">Seleccionadas:</span>
          <span class="counter">{{ totalActual }}/{{ packActual }}</span>
        </div>

        <!-- Barra visual -->
        <div class="progress-bar">
          <div class="progress-fill" [style.width.%]="(totalActual / packActual) * 100"></div>
        </div>

        <!-- Botones de acción -->
        <div class="action-buttons">
          <!-- Botón Cancelar -->
          <button 
            class="btn-cancel"
            (click)="abrirConfirmacion()"
            title="Cancelar selección"
          >
            <span class="icon">✕</span>
            <span class="text">Cancelar</span>
          </button>

          <!-- Botón WhatsApp -->
          <button 
            class="btn-whatsapp"
            [disabled]="totalActual !== packActual"
            (click)="abrirWhatsApp()"
            [title]="totalActual !== packActual ? 'Completa tu selección' : 'Hacer pedido'"
          >
            <span class="icon">💬</span>
            <span class="text">Pedir ahora</span>
          </button>
        </div>
      </div>

      <!-- Modal de confirmación -->
      <div class="confirmation-modal" *ngIf="mostrarConfirmacion" (click)="cerrarConfirmacion()">
        <div class="modal-content" (click)="$event.stopPropagation()">
          <div class="modal-icon">⚠️</div>
          <h3>¿Cancelar selección?</h3>
          <p>Se borrarán todas las viandas que seleccionaste</p>
          
          <div class="modal-buttons">
            <button class="btn-no" (click)="cerrarConfirmacion()">
              No, continuar
            </button>
            <button class="btn-si" (click)="confirmarCancelacion()">
              Sí, cancelar todo
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./pack-selector-bar.component.scss']
})
export class PackSelectorBarComponent implements OnInit {
  packActual: number | null = null;
  totalActual = 0;
  mostrarConfirmacion = false;

  constructor(private packService: PackSelectorService) {}

  ngOnInit() {
    this.packService.packSeleccionado.subscribe(pack => {
      this.packActual = pack;
    });

    this.packService.platosSeleccionados.subscribe(() => {
      this.totalActual = this.packService.getTotalActual();
    });
  }

  // Abrir modal de confirmación
  abrirConfirmacion() {
    this.mostrarConfirmacion = true;
  }

  // Cerrar modal sin hacer nada
  cerrarConfirmacion() {
    this.mostrarConfirmacion = false;
  }

  // Confirmar cancelación
  confirmarCancelacion() {
    this.packService.limpiar();
    this.mostrarConfirmacion = false;
  }

  // Abrir WhatsApp
  abrirWhatsApp() {
    const mensaje = this.packService.generarMensajeWhatsApp();
    const numero = '5492215963237'; // WhatsApp de Comidas Light
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}
