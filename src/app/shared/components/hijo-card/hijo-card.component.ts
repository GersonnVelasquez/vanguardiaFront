import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/app/core/models/alumno.model';

@Component({
  selector: 'app-hijo-card',
  templateUrl: './hijo-card.component.html',
  styleUrls: ['./hijo-card.component.scss']
})
export class HijoCardComponent implements OnInit {
  @Output() verAsignaturas = new EventEmitter<string>();
  @Input() hijo: Alumno;

  constructor() { }

  ngOnInit(): void {
  }

  emitVerAsignaturas(nombre: string) {
    this.verAsignaturas.emit(nombre);
  }

}
