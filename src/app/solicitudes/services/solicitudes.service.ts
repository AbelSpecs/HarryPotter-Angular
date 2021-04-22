import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Solicitud } from '../interfaces/solicitud.interface';

@Injectable({
  providedIn: 'root'
})
export class SolictudesService {


  private sol: Solicitud[] = [];
  private solChanges = new Subject<Solicitud[]>();

  get Solicitudes(): Observable<Solicitud[]> {
    return this.solChanges.asObservable();
  }

  constructor(private http: HttpClient) {
    this.sol = JSON.parse(localStorage.getItem('solicitudes')) || [];
   }

  /* metodo para agregar la solicitud en el store */
  addSolicitudes(solicitud: Solicitud) {
    this.sol.push(solicitud);
    localStorage.setItem('solicitudes', JSON.stringify(this.sol));
    this.solChanges.next(this.obtenerSolictudes());
  }

  /* metodo que obtiene las solicitudes almacenadas localmente en el store */

  obtenerSolictudes(): Solicitud[] {
    return JSON.parse(localStorage.getItem('solicitudes')) || [];
  }
}
