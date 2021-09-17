import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/core/models/alumno.model';
import { Seccion } from 'src/app/core/models/seccion.model';

@Component({
  selector: 'app-alumnos-secciones-modal',
  templateUrl: './alumnos-secciones-modal.component.html',
  styleUrls: ['./alumnos-secciones-modal.component.scss']
})
export class AlumnosSeccionesModalComponent implements OnInit {

  alumnosForm: FormGroup;
  nombre = new FormControl('', [Validators.required]);
  @Input() alumnos: Alumno[];
  @Input() seccion: Seccion;
  @Output() updateSeccion = new EventEmitter<Seccion>();
  currrentOption: 'Nuevo' | 'Activos' = 'Nuevo';
  constructor() { }

  ngOnInit(): void {
    this.alumnosForm = new FormGroup({
      nombre: this.nombre
    });
  }

  setOption(option: 'Nuevo' | 'Activos') {
    this.currrentOption = option;
  }


  eliminarAlumnoAgregado(alumnoAgregado: string) {
    this.seccion.alumnos = this.seccion.alumnos.filter(i => i !== alumnoAgregado);
    this.updateSeccion.emit(this.seccion);
    this.alumnosForm.reset();
  }


  agregarAlumnoAgregado() {
    let encontrado = this.alumnos.filter(i => i.nombre === this.nombre.value).length > 0
    let Repetido = this.seccion.alumnos.filter(i => i === this.nombre.value).length > 0;
    if (encontrado) {
      if (!Repetido) {
        this.seccion.alumnos.push(this.nombre.value);
        this.nombre.reset();
        this.updateSeccion.emit(this.seccion);
      } else {
        alert('Alumno repetido ')
      }

    } else {
      alert('Alumno no encontrado ')
    }
    this.alumnosForm.reset();
  }

}
