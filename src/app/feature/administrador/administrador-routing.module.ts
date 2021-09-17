import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdministradorComponent } from './components/administrador/administrador.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PadresComponent } from './components/padres/padres.component';
import { SeccionesComponent } from './components/secciones/secciones.component';

const routes: Routes = [
  {
    path: '', component: AdministradorComponent,
    children: [
      { path: 'Inicio', component: InicioComponent },
      { path: 'Secciones', component: SeccionesComponent },
      { path: 'Asignaturas', component: AsignaturasComponent },
      { path: 'Alumnos', component: AlumnosComponent },
      { path: 'Docentes', component: DocentesComponent },
      { path: 'Padres', component: PadresComponent },
      { path: '**', redirectTo: 'Inicio', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
