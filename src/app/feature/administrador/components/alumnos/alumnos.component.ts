import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/core/models/alumno.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AlumnosService } from '../../services/alumnos.service';
import { PadresService } from '../../services/padres.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  alumnosForm: FormGroup;
  noCuenta = new FormControl('', [Validators.required]);
  nombre = new FormControl('', [Validators.required]);
  padre = new FormControl('', [Validators.required]);
  padres: Usuario[];
  alumnos: Alumno[];
  currrentOption: 'Nuevo' | 'Activos' = 'Nuevo';
  constructor(private padresService: PadresService, private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.alumnosForm = new FormGroup({
      noCuenta: this.noCuenta,
      nombre: this.nombre,
      padre: this.padre
    });

    this.getPadres();
    this.getAlumnos();
  }

  setOption(option: 'Nuevo' | 'Activos') {
    this.currrentOption = option;
  }

  async getPadres() {
    this.padres = await this.padresService.getPadres();
  }

  async getAlumnos() {
    this.alumnos = await this.alumnosService.getAlumnos();
  }

  async eliminarAlumno(id: number | undefined) {
    if (id) {
      await this.alumnosService.eliminarAlumno(id);
      await this.getAlumnos();
      alert('Alumno eliminado')
    }

  }

  async agregarAlumno() {
    await this.alumnosService.agregarAlumno(this.alumnosForm.value);
    await this.getAlumnos();
    alert('Alumno agregado');
    this.alumnosForm.reset();
  }


}
