import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seccion } from 'src/app/core/models/seccion.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class SeccionesService {

  constructor(private http: HttpClient) { }

  getSecciones() {
    return this.http.get<Seccion[]>(environment.backendUrl + 'api/seccions').pipe(
      map((data: any) => {
        let res: Seccion[] = data.seccions;
        return res;
      })
    ).toPromise();
  }


  agregarSeccion(seccion: Seccion) {
    return this.http.post(environment.backendUrl + 'api/save-seccion', seccion).toPromise();
  }

  eliminarSeccion(id: number) {
    return this.http.delete(environment.backendUrl + 'api/seccion/' + id).toPromise();
  }

  actualizarSeccion(id: any, seccion: Seccion) {
    return this.http.put(environment.backendUrl + 'api/seccion/actualizar/' + id, seccion).toPromise();
  }
}
