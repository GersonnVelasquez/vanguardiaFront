import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule { }
