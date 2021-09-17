import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocentesComponent } from './components/docentes/docentes.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { SeccionesComponent } from './components/secciones/secciones.component';

const routes: Routes = [
  {
    path: '', component: DocentesComponent,
    children: [
      { path: 'Secciones', component: SeccionesComponent },
      { path: 'Notificaciones', component: NotificacionesComponent },
      { path: '**', redirectTo: 'Secciones', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesRoutingModule { }
