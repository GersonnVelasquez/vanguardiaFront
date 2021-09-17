import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionesPanelComponent } from './components/secciones-panel/secciones-panel.component';
import { HijosPanelComponent } from './components/hijos-panel/hijos-panel.component';
import { NotificacionesPanelComponent } from './components/notificaciones-panel/notificaciones-panel.component';
import { PadresComponent } from './components/padres/padres.component';

const routes: Routes = [
  {
    path: '', component: PadresComponent,
    children: [
      { path: 'Hijos', component: HijosPanelComponent },
      { path: 'Secciones', component: SeccionesPanelComponent },
      { path: 'Notificaciones', component: NotificacionesPanelComponent },
      { path: '**', redirectTo: 'Hijos', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PadresRoutingModule { }
