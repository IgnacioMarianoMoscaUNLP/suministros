// menusection.component.ts
import { Component, OnInit } from '@angular/core';
import { MenucardComponent } from '../menucard/menucard.component';
import { NgFor, NgIf } from '@angular/common';
// import { MENU_DATA } from '../menu_data'; // quitar
import { PackSelectorService } from '../services/pack-selector.service';
import { MenuService, MenuGrupo } from '../services/menu.service'; // ajusta la ruta

@Component({
  selector: 'app-menusection',
  standalone: true,
  imports: [NgFor, NgIf, MenucardComponent],
  templateUrl: './menusection.component.html',
  styleUrl: './menusection.component.scss'
})
export class MenusectionComponent implements OnInit {
  menuCategories: MenuGrupo[] = [];
  cargando = true;
  error?: string;
  packActual: number | null = null;

  constructor(
    public packService: PackSelectorService,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.menuService.obtenerMenu().subscribe({
      next: data => { this.menuCategories = data; this.cargando = false; },
      error: () => { this.error = 'No se pudo cargar el menú'; this.cargando = false; }
    });

    this.packService.packSeleccionado.subscribe(pack => {
      this.packActual = pack;
    });
  }

  seleccionarPack(cantidad: number) {
    this.packService.seleccionarPack(cantidad);
  }
}
