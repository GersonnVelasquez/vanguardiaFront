import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seccion } from 'src/app/core/models/seccion.model';
import { PadresService } from '../../services/padres.service';

@Component({
  selector: 'app-notificaciones-panel',
  templateUrl: './notificaciones-panel.component.html',
  styleUrls: ['./notificaciones-panel.component.scss']
})
export class NotificacionesPanelComponent implements OnInit {

  seccion: Seccion;
  constructor(private route: ActivatedRoute, private padresSevice: PadresService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(data => {
      let param = data.get('id');
      if (param) {
        this.getSeccion(param);
      }
    });
  }

  get hayData() {
    if (this.seccion) {
      return this.seccion.notificaciones.length <= 0;
    }
    return true;
  }

  async getSeccion(id: any) {
    this.seccion = await this.padresSevice.getSeccion(id);
  }

}
