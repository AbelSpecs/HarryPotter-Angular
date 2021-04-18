import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../interfaces/estudiante.interface';
import { Personaje } from '../interfaces/personajes.interface';
import { Profesor } from '../interfaces/profesor.interface';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  /* metodo que hace la peticion para obtener los personajes */
  getPersonajes(casa: string): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`http://hp-api.herokuapp.com/api/characters/house/${casa}`);
  }

  /* metodo que hace la peticion para obtener los estudiantes */
  getEstudiantes(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>('http://hp-api.herokuapp.com/api/characters/students');
  }

  /* metodo que hace la peticion para obtener los profesores */
  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>('http://hp-api.herokuapp.com/api/characters/staff');
  }
}
