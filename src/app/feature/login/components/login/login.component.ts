import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    let user:any = this.authService._userInfo.getValue();
    if (user) {
      this.authService.goTo(user[0]);
    }
  }

  async login(user: string, password: string) {
    let usario: any = await this.authService.login({ usuario: user, password: password });
    if (usario) {
      this.authService._userInfo.next(usario);
      this.authService._isSessionActive = true;
      this.authService.goTo(usario[0])
      localStorage.setItem('user', JSON.stringify(usario));
    } else {
      alert('Credenciales invalidas');
    }

  }

 

}
