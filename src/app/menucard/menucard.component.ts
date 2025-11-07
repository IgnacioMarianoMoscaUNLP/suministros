import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PackSelectorService, PlatoSeleccionado } from '../services/pack-selector.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menucard',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './menucard.component.html',
  styleUrls: ['./menucard.component.scss']
})
export class MenucardComponent implements OnInit, OnDestroy {
  @Input() nombre: string = '';
  @Input() platos!: any[];

  desplegado = false;
  modoSelector = false;
  packActual: number | null = null;
  platosSeleccionados: Map<string, number> = new Map();

  private subscriptions: Subscription[] = [];

  constructor(private packService: PackSelectorService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.packService.packSeleccionado.subscribe(pack => {
        this.packActual = pack;
        this.modoSelector = pack !== null;
        
        if (!pack) {
          this.platosSeleccionados.clear();
        }
      })
    );

    this.subscriptions.push(
      this.packService.platosSeleccionados.subscribe(platos => {
        this.platosSeleccionados.clear();
        platos.forEach(p => {
          this.platosSeleccionados.set(p.nombre, p.cantidad);
        });
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // ← SIMPLIFICADO: Solo toggle
  toggleDesplegar() {
    this.desplegado = !this.desplegado;
  }

  agregarPlato(nombre: string) {
    this.packService.agregarPlato({
      nombre,
      cantidad: 1,
      categoria: this.nombre
    });
  }

  quitarPlato(nombre: string) {
    this.packService.quitarPlato(nombre, 1);
  }

  obtenerCantidad(nombre: string): number {
    return this.platosSeleccionados.get(nombre) || 0;
  }

  estaCompleto(): boolean {
    if (!this.packActual) return false;
    const total = Array.from(this.platosSeleccionados.values()).reduce((a, b) => a + b, 0);
    return total === this.packActual;
  }
}
