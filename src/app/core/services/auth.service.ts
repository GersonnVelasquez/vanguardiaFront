import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credencial } from '../models/credencial.model';
import { Usuario } from '../models/usuario.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  _isSessionActive = false;
  _userInfo = new BehaviorSubject<Usuario | null>(null);
  constructor(private http: HttpClient, private router: Router) {
    let user =  localStorage.getItem('user');
    if(user) {
      this._userInfo.next(JSON.parse(user));
      this._isSessionActive = true;
      this.goTo(JSON.parse(user)[0])
    }
  }

  goTo(usario: Usuario) {
    if (usario.tipoCuenta === 'Administrador') {
      this.router.navigateByUrl('Administrador/')
    } else if (usario.tipoCuenta === 'Docente') {
      this.router.navigateByUrl('Docentes/')
    } else if (usario.tipoCuenta === 'Padre') {
      this.router.navigateByUrl('Padres/')
    }
  }

  get isSessionActive() {
    return this._isSessionActive;
  }

  get getUSerInfo() {
    return this._userInfo.pipe(
      map((i: any) => {
        if(i){
          return i[0]
        }
       return null;
      })
    );
  }

  logout(){
    localStorage.removeItem('user');
    this._isSessionActive = false;
    this._userInfo.next(null);
    this.router.navigateByUrl("Inicio")
  }

  login(user: Credencial) {
    return this.http.post(environment.backendUrl + 'api/auth', user).pipe(
      map((res: any) => {
        let usuario: Usuario = res.usuario;
        return usuario
      })
    ).toPromise();
  }

}
