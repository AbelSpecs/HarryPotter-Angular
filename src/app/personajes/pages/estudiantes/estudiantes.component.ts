import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../interfaces/estudiante.interface';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  /* variable estudiantes recibe una lista de todos los estudiantes desde la peticion */
  estudiantes: Estudiante[];
  /* variable para el logo de fondo */
  logo: string;

  constructor(private personajesService: PersonajesService) { }

  /* hook en donde se realizo la peticion a la API */
  ngOnInit(): void {
    this.logo = 'houses.png';
    this.personajesService.getEstudiantes()
      .subscribe(resp => {
        this.estudiantes = resp;
      });
  }

  /* metodo para asignar estilos */
  styles(): Object {
    return {backgroundImage: 'url(assets/images/' + this.logo + ')'};
  }
}
