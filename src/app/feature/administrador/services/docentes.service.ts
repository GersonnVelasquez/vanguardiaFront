import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class DocentesService {

  constructor(private http: HttpClient) { }

  getDocentes() {
    return this.http.get(environment.backendUrl + 'api/usuarios/tipo/Docente').pipe(
      map((data: any) => {
        let res: Usuario[] = data.usuarios;
        return res;
      })
    ).toPromise();
  }


  agregarDocente(Docente: Usuario) {
    return this.http.post(environment.backendUrl + 'api/save-usuario', Docente).toPromise();
  }

  eliminarDocente(id: number) {
    return this.http.delete(environment.backendUrl + 'api/usuario/' + id).toPromise();
  }
}
