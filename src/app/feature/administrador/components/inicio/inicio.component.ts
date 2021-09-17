import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  user: Usuario;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUSerInfo.subscribe(data => {
      if (data) {
        this.user = data;
      }
    });
  }



}
