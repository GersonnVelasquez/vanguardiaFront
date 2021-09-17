import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class PadresService {

  constructor(private http: HttpClient) { }

  getPadres() {
    return this.http.get(environment.backendUrl + 'api/usuarios/tipo/Padre').pipe(
      map((data: any) => {
        let res: Usuario[] = data.usuarios;
        return res;
      })
    ).toPromise();
  }


  agregarPadre(Usuario: Usuario) {
    return this.http.post(environment.backendUrl + 'api/save-usuario', Usuario).toPromise();
  }

  eliminarPadre(id: number) {
    return this.http.delete(environment.backendUrl + 'api/usuario/' + id).toPromise();
  }

}
