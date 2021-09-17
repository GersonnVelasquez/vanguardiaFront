import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/core/models/usuario.model';
import { PadresService } from '../../services/padres.service';

@Component({
  selector: 'app-padres',
  templateUrl: './padres.component.html',
  styleUrls: ['./padres.component.scss']
})
export class PadresComponent implements OnInit {
  padresForm: FormGroup;
  numeroCedula = new FormControl('', [Validators.required]);
  nombreCompleto = new FormControl('', [Validators.required]);
  usuario = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  tipoCuenta = new FormControl('Padre', [Validators.required]);
  padres: Usuario[];

  currrentOption: 'Nuevo' | 'Activos' = 'Nuevo';
  constructor(private padresService: PadresService) { }

  ngOnInit(): void {
    this.padresForm = new FormGroup({
      numeroCedula: this.numeroCedula,
      nombreCompleto: this.nombreCompleto,
      usuario: this.usuario,
      password: this.password,
      tipoCuenta: this.tipoCuenta
    });
    this.getPadres();
  }

  setOption(option: 'Nuevo' | 'Activos') {
    this.currrentOption = option;
  }

  async getPadres() {
    this.padres = await this.padresService.getPadres();
  }

  async eliminarPadre(id: number | undefined) {
    if (id) {
      await this.padresService.eliminarPadre(id);
      await this.getPadres();
      alert('Padre eliminaro')
    }

  }

  async agregarPadre() {
    await this.padresService.agregarPadre(this.padresForm.value);
    await this.getPadres();
    alert('Padre agregado');
    this.padresForm.reset();
  }

}
