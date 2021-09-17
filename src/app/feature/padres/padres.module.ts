import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PadresRoutingModule } from './padres-routing.module';
import { PadresComponent } from './components/padres/padres.component';
import { HijosPanelComponent } from './components/hijos-panel/hijos-panel.component';
import { SeccionesPanelComponent } from './components/secciones-panel/secciones-panel.component';
import { NotificacionesPanelComponent } from './components/notificaciones-panel/notificaciones-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PadresService } from './services/padres.service';



@NgModule({
  declarations: [
    PadresComponent,
    HijosPanelComponent,
    SeccionesPanelComponent,
    NotificacionesPanelComponent
  ],
  imports: [
    CommonModule,
    PadresRoutingModule,
    SharedModule
  ],
  providers: [
    PadresService
  ]
})
export class PadresModule { }
