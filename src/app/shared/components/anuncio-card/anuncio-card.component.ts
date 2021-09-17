import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Notificacion } from 'src/app/core/models/seccion.model';

@Component({
  selector: 'app-anuncio-card',
  templateUrl: './anuncio-card.component.html',
  styleUrls: ['./anuncio-card.component.scss']
})
export class AnuncioCardComponent implements OnInit {
  @Input() showDeleteButton = false;
  @Input() notificacion: Notificacion
  @Output() delete = new EventEmitter<Notificacion>();
  constructor() { }

  ngOnInit(): void {
  }

  eliminar() {
    if (this.notificacion) {
      this.delete.emit(this.notificacion);
    }
  }
}
