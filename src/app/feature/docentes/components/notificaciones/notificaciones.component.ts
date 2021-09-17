import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Notificacion, Seccion } from 'src/app/core/models/seccion.model';
import { DocentesService } from '../../services/docentes.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent implements OnInit {
  notificacionesForm: FormGroup;
  titulo = new FormControl('', [Validators.required]);
  descripcion = new FormControl('', [Validators.required]);
  seccion: Seccion;
  currrentOption: 'Nuevo' | 'Activos' = 'Nuevo';
  constructor(private route: ActivatedRoute, private docentesServices: DocentesService) { }

  ngOnInit(): void {
    this.notificacionesForm = new FormGroup({
      titulo: this.titulo,
      descripcion: this.descripcion
    })
    this.route.queryParamMap.subscribe(data => {
      let param = data.get('id');
      if (param) {
        this.getSeccion(param);
      }
    });
  }

  async getSeccion(id: any) {
    this.seccion = await this.docentesServices.getSeccion(id)
  }

  async agregarNotificacion() {
    this.seccion.notificaciones.push(this.notificacionesForm.value);
    await this.docentesServices.actualizarSeccion(this.seccion._id, this.seccion);
    await this.getSeccion(this.seccion._id);
    alert('Notificacion agregada');
    this.notificacionesForm.reset();
  }

  setOption(option: 'Nuevo' | 'Activos') {
    this.currrentOption = option;
  }


  async eliminarNotificacion(notificacion: Notificacion){
    this.seccion.notificaciones = this.seccion.notificaciones.filter(i=> i !== notificacion);
    await this.docentesServices.actualizarSeccion(this.seccion._id, this.seccion);
    await this.getSeccion(this.seccion._id);
    alert('Notificacion eliminada');
    this.notificacionesForm.reset();
  }


}
