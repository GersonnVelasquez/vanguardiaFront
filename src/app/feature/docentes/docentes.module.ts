import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocentesRoutingModule } from './docentes-routing.module';
import { DocentesComponent } from './components/docentes/docentes.component';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocentesService } from './services/docentes.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DocentesComponent,
    SeccionesComponent,
    NotificacionesComponent
  ],
  imports: [
    CommonModule,
    DocentesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    DocentesService
  ]
})
export class DocentesModule { }
