import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../interfaces/solicitud.interface';

@Injectable({
  providedIn: 'root'
})
export class SolictudesService {

  constructor(private http: HttpClient) { }

  /* metodo que hace la peticion para crear una solicitud en el db.json usando json server */
  sendSolicitudes(solicitud: Solicitud) {
    console.log(solicitud);
    return this.http.post<Solicitud>('http://localhost:3000/solicitudes', solicitud)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
    );
  }

  /* metodo que obtiene las solicitudes almacenadas localmente en el db.json */
  getSolicitudes(): Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>('http://localhost:3000/solicitudes');
  }
}
