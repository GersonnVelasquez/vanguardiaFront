import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/core/models/alumno.model';
import { Seccion } from 'src/app/core/models/seccion.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable()
export class PadresService {

  constructor(private http: HttpClient) { }


  getHijos(padre: String) {
    return this.http.get(environment.backendUrl + 'api/alumno/padres/' + padre).pipe(
      map((data: any) => {
        let res: Alumno[] = data.alumno;
        return res;
      })
    ).toPromise();
  }


  getSecciones(alumno: String) {
    return this.http.get(environment.backendUrl + 'api/seccion/alumnos/' + alumno).pipe(
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
}
