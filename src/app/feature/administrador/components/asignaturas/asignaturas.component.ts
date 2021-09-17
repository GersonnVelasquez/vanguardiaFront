import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Asignatura } from 'src/app/core/models/asignatura.model';
import { AsignaturasService } from '../../services/asignaturas.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.scss']
})
export class AsignaturasComponent implements OnInit {
  asignaturasForm: FormGroup;
  nombre = new FormControl('', [Validators.required]);
  currrentOption: 'Nuevo' | 'Activos' = 'Nuevo';
  asignaturas: Asignatura[];
  constructor(private asignaturasService: AsignaturasService) { }

  ngOnInit(): void {
    this.asignaturasForm = new FormGroup({
      nombre: this.nombre
    });
    this.getAsignaturas();
  }

  async getAsignaturas() {
    this.asignaturas = await this.asignaturasService.getAsignaturas();
  }

  async eliminarAsignatura(id: number | undefined) {
    if (id) {
      await this.asignaturasService.eliminarAsignatura(id);
      await this.getAsignaturas();
      alert('Asignatura eliminara')
    }

  }

  async agregarAsignatura() {
    let asignatura: Asignatura = {
      nombre: this.nombre.value
    }
    await this.asignaturasService.agregarAsignatura(asignatura);
    await this.getAsignaturas();
    alert('Asignatura agregada');
    this.asignaturasForm.reset();
  }

  setOption(option: 'Nuevo' | 'Activos') {
    this.currrentOption = option;
  }

}
