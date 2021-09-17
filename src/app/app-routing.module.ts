import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: 'Inicio', loadChildren: () => import('./feature/login/login.module').then(mod => mod.LoginModule) },
  { path: 'Padres', loadChildren: () => import('./feature/padres/padres.module').then(mod => mod.PadresModule), canActivate: [AuthGuard] },
  { path: 'Docentes', loadChildren: () => import('./feature/docentes/docentes.module').then(mod => mod.DocentesModule), canActivate: [AuthGuard] },
  { path: 'Administrador', loadChildren: () => import('./feature/administrador/administrador.module').then(mod => mod.AdministradorModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'Inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
