import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/core/models/alumno.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { PadresService } from '../../services/padres.service';


@Component({
  selector: 'app-hijos-panel',
  templateUrl: './hijos-panel.component.html',
  styleUrls: ['./hijos-panel.component.scss']
})
export class HijosPanelComponent implements OnInit {

  padre: Usuario;
  hijos: Alumno[]
  constructor(private router: Router, private authService: AuthService, private padresServices: PadresService) { }

  ngOnInit(): void {
    this.authService.getUSerInfo.subscribe(data => {
      if (data) {
        this.padre = data;
        this.getHijos(this.padre.nombreCompleto);
      }
    });
  }


  get hayData() {
    if (this.hijos){
      return this.hijos.length <= 0;
    }
    return true;
  }


  async getHijos(padre: string) {
    this.hijos = await this.padresServices.getHijos(padre);
  }

  verAsignaturas(nombre: string) {
    this.router.navigate(["Padres/Secciones"], { queryParams: { alumno: nombre } });
  }

}
