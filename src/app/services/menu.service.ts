// menu.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface Row { Categoria: string; Plato: string; }
export interface MenuItem { nombre: string; }
export interface MenuGrupo { titulo: string; items: MenuItem[]; }

@Injectable({ providedIn: 'root' })
export class MenuService {
  private url = environment.menuUrl;

  constructor(private http: HttpClient) {}

  obtenerMenu(): Observable<MenuGrupo[]> {
    return this.http.get<Row[]>(this.url).pipe(
      map(rows => {
        const grupos = new Map<string, MenuItem[]>();
        for (const r of rows) {
          const titulo = (r.Categoria || '').trim();
          const nombre = (r.Plato || '').trim();
          if (!titulo || !nombre) continue;
          if (!grupos.has(titulo)) grupos.set(titulo, []);
          grupos.get(titulo)!.push({ nombre });
        }
        return Array.from(grupos, ([titulo, items]) => ({ titulo, items }));
      })
    );
  }
}
