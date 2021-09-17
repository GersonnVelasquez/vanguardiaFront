import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/core/models/usuario.model';
import { DocentesService } from '../../services/docentes.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.scss']
})
export class DocentesComponent implements OnInit {

  docentesForm: FormGroup;
  numeroCedula = new FormControl('', [Validators.required]);
  nombreCompleto = new FormControl('', [Validators.required]);
  usuario = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  tipoCuenta = new FormControl('Docente', [Validators.required]);
  docentes: Usuario[];

  currrentOption: 'Nuevo' | 'Activos' = 'Nuevo';
  constructor(private docentesService: DocentesService) { }

  ngOnInit(): void {
    this.docentesForm = new FormGroup({
      numeroCedula: this.numeroCedula,
      nombreCompleto: this.nombreCompleto,
      usuario: this.usuario,
      password: this.password,
      tipoCuenta: this.tipoCuenta
    });
    this.getDocentes();
  }

  setOption(option: 'Nuevo' | 'Activos') {
    this.currrentOption = option;
  }

  async getDocentes() {
    this.docentes = await this.docentesService.getDocentes();
  }

  async eliminarDocente(id: number | undefined) {
    if (id) {
      await this.docentesService.eliminarDocente(id);
      await this.getDocentes();
      alert('Docente eliminado')
    }

  }

  async agregarDocente() {
    await this.docentesService.agregarDocente(this.docentesForm.value);
    await this.getDocentes();
    alert('Docente agregado');
    this.docentesForm.reset();
  }
}
