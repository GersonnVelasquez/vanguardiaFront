import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/core/models/alumno.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable()
export class AlumnosService {
  constructor(private http: HttpClient) { }

  getAlumnos() {
    return this.http.get(environment.backendUrl + 'api/alumnos').pipe(
      map((data: any) => {
        let res: Alumno[] = data.alumnos;
        return res;
      })
    ).toPromise();
  }


  agregarAlumno(alumno: Alumno) {
    return this.http.post(environment.backendUrl + 'api/save-alumno', alumno).toPromise();
  }

  eliminarAlumno(id: number) {
    return this.http.delete(environment.backendUrl + 'api/alumno/' + id).toPromise();
  }
}
