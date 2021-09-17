import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Seccion } from 'src/app/core/models/seccion.model';

@Component({
  selector: 'app-seccion-card',
  templateUrl: './seccion-card.component.html',
  styleUrls: ['./seccion-card.component.scss']
})
export class SeccionCardComponent implements OnInit {
  @Output() verNotificaciones = new EventEmitter<number>();
  @Input() seccion: Seccion;

  constructor() { }

  ngOnInit(): void {
  }

  emitVerNotificaciones(id:any) {
    this.verNotificaciones.emit(id);
  }

}
