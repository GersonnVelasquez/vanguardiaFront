import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seccion } from 'src/app/core/models/seccion.model';
import { PadresService } from '../../services/padres.service';

@Component({
  selector: 'app-secciones-panel',
  templateUrl: './secciones-panel.component.html',
  styleUrls: ['./secciones-panel.component.scss']
})
export class SeccionesPanelComponent implements OnInit {
  secciones: Seccion[];
  alumno: string;
  constructor(private router: Router, private route: ActivatedRoute, private padresSevice: PadresService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(data => {
      let param = data.get('alumno');
      if (param) {
        this.getSecciones(param);
        this.alumno = param;
      }
    });
  }

  get hayData() {
    if (this.secciones) {
      return this.secciones.length <= 0;
    }
    return true;
  }

  async getSecciones(nombre: string) {
    this.secciones = await this.padresSevice.getSecciones(nombre);
  }



  verNotificaciones(id: number) {
    this.router.navigate(["Padres/Notificaciones"], { queryParams: { id: id } });
  }

}
