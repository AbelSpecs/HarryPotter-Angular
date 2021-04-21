import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IPersona } from '../interfaces/personajes.interface';



@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  /* metodo que hace la peticion para obtener los personajes */
  getPersonajes(casa: string): Observable<IPersona[]> {
    return this.http.get<IPersona[]>(`http://hp-api.herokuapp.com/api/characters/house/${casa}`);
  }

  /* metodo que hace la peticion para obtener los estudiantes */
  getEstudiantes(): Observable<IPersona[]>{
    return this.http.get<IPersona[]>('http://hp-api.herokuapp.com/api/characters/students');
  }

  /* metodo que hace la peticion para obtener los profesores */
  getProfesores(): Observable<IPersona[]> {
    return this.http.get<IPersona[]>('http://hp-api.herokuapp.com/api/characters/staff');
  }
}
