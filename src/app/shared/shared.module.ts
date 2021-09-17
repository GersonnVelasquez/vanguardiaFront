import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoCardComponent } from './components/hijo-card/hijo-card.component';
import { SeccionCardComponent } from './components/seccion-card/seccion-card.component';
import { AnuncioCardComponent } from './components/anuncio-card/anuncio-card.component';
import { AlumnosSeccionesModalComponent } from './components/alumnos-secciones-modal/alumnos-secciones-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HijoCardComponent,
    SeccionCardComponent,
    AnuncioCardComponent,
    AlumnosSeccionesModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HijoCardComponent,
    SeccionCardComponent,
    AnuncioCardComponent,
    AlumnosSeccionesModalComponent
  ]
})
export class SharedModule { }
