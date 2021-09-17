import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seccion } from 'src/app/core/models/seccion.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable()
export class DocentesService {


  constructor(private http: HttpClient) { }


  getSecciones(docente: String) {
    return this.http.get(environment.backendUrl + 'api/seccion/docente/' + docente).pipe(
      map((data: any) => {
        let res: Seccion[] = data.seccion;
        return res;
      })
    ).toPromise();
  }


  getSeccion(id: any) {
    return this.http.get(environment.backendUrl + 'api/seccion/' + id).pipe(
      map((data: any) => {
        let res: Seccion = data.seccion;
        return res;
      })
    ).toPromise();
  }


  actualizarSeccion(id: any, seccion: Seccion) {
    return this.http.put(environment.backendUrl + 'api/seccion/actualizar/' + id, seccion).toPromise();
  }

}
