import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asignatura } from 'src/app/core/models/asignatura.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class AsignaturasService {

  constructor(private http: HttpClient) { }

  getAsignaturas() {
    return this.http.get(environment.backendUrl + 'api/asignaturas').pipe(
      map((data: any) => {
        let res: Asignatura[] = data.asignaturas;
        return res;
      })
    ).toPromise();
  }


  agregarAsignatura(asignatura: Asignatura) {
    return this.http.post(environment.backendUrl + 'api/save-asignatura', asignatura).toPromise();
  }

  eliminarAsignatura(id: number) {
    return this.http.delete(environment.backendUrl + 'api/asignatura/' + id).toPromise();
  }
}
