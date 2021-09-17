import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seccion } from 'src/app/core/models/seccion.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { DocentesService } from '../../services/docentes.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss']
})
export class SeccionesComponent implements OnInit {
  docente: Usuario;
  secciones: Seccion[];
  constructor(private router: Router, private authService: AuthService, private docentesService: DocentesService) { }

  ngOnInit(): void {
    this.authService.getUSerInfo.subscribe(data => {
      if (data) {
        this.docente = data;
        this.getSecciones(this.docente.nombreCompleto);
      }
    });
  }

  async getSecciones(docente: string) {
    this.secciones = await this.docentesService.getSecciones(docente);
  }

  verNotificaciones(id: number) {
    this.router.navigate(["Docentes/Notificaciones"], { queryParams: { id: id } });
  }

}
