import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { PadresComponent } from './components/padres/padres.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AsignaturasService } from './services/asignaturas.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PadresService } from './services/padres.service';
import { DocentesService } from './services/docentes.service';
import { AlumnosService } from './services/alumnos.service';
import { SeccionesService } from './services/secciones.service';


@NgModule({
  declarations: [
    AdministradorComponent,
    AsignaturasComponent,
    SeccionesComponent,
    AlumnosComponent,
    DocentesComponent,
    PadresComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    AsignaturasService,
    PadresService,
    DocentesService,
    AlumnosService,
    SeccionesService
  ]
})
export class AdministradorModule { }
