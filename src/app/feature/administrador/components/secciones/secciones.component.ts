import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/core/models/alumno.model';
import { Asignatura } from 'src/app/core/models/asignatura.model';
import { Seccion } from 'src/app/core/models/seccion.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AlumnosService } from '../../services/alumnos.service';
import { AsignaturasService } from '../../services/asignaturas.service';
import { DocentesService } from '../../services/docentes.service';
import { SeccionesService } from '../../services/secciones.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss']
})
export class SeccionesComponent implements OnInit {
  seccionesForm: FormGroup;
  numero = new FormControl('', [Validators.required]);
  asignatura = new FormControl('', [Validators.required]);
  docente = new FormControl('', [Validators.required]);
  alumno = new FormControl('', [Validators.required]);
  currrentOption: 'Nuevo' | 'Activos' = 'Nuevo';
  alumnos: Alumno[];
  alumnosAgregados: string[] = []
  asignaturas: Asignatura[];
  docentes: Usuario[];
  secciones: Seccion[];
  seccionSeleccionada: Seccion;

  constructor(private asignaturasServices: AsignaturasService, private docentesService: DocentesService, private alumnosService: AlumnosService, private seccionesService: SeccionesService) { }

  ngOnInit(): void {
    this.seccionesForm = new FormGroup({
      numero: this.numero,
      asignatura: this.asignatura,
      docente: this.docente
    });
    this.getAsignaturas();
    this.getDocentes();
    this.getAlumnos();
    this.getSecciones();
  }

  async getAsignaturas() {
    this.asignaturas = await this.asignaturasServices.getAsignaturas()
  }

  eliminarAlumnoAgregado(alumnoAgregado: string) {
    this.alumnosAgregados = this.alumnosAgregados.filter(i => i !== alumnoAgregado);
  }


  agregarAlumnoAgregado() {
    let encontrado = this.alumnos.filter(i => i.nombre === this.alumno.value).length > 0;
    let Repetido = this.alumnosAgregados.filter(i => i === this.alumno.value).length > 0;
    if (encontrado) {
      if (!Repetido) {
        this.alumnosAgregados.push(this.alumno.value);

      } else {
        alert('Alumno repetido ')
      }

    } else {
      alert('Alumno no encontrado')
    }
    this.alumno.reset();
  }

  async getDocentes() {
    this.docentes = await this.docentesService.getDocentes()
  }


  async updateSeccion(seccion: Seccion) {
    await this.seccionesService.actualizarSeccion(seccion._id, seccion);
    await this.getSecciones();
    alert('Seccion actualizada');
  }

  async getAlumnos() {
    this.alumnos = await this.alumnosService.getAlumnos()
  }

  setOption(option: 'Nuevo' | 'Activos') {
    this.currrentOption = option;
  }


  async getSecciones() {
    this.secciones = await this.seccionesService.getSecciones();
  }

  async eliminarSeccion(id: number | undefined) {
    if (id) {
      await this.seccionesService.eliminarSeccion(id);
      await this.getSecciones();
      alert('Seccion eliminada')
    }

  }

  modificarSeccion(seccion: Seccion) {
    this.seccionSeleccionada = seccion;
  }

  async agregarSeccion() {

    let seccion: Seccion = {
      ...this.seccionesForm.value,
      alumnos: this.alumnosAgregados,
      notificaciones: []
    }
    await this.seccionesService.agregarSeccion(seccion);
    await this.getSecciones();
    alert('Seccion agregada');
    this.seccionesForm.reset();
    this.alumno.reset();
    this.alumnosAgregados = [];
  }

}
