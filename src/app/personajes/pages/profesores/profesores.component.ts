import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';

import { IPersona } from '../../interfaces/personajes.interface';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  /* variable para guardar la lista de profesores */
  profesores: IPersona[];
  logo: string;

  constructor(private personajesService: PersonajesService) { }

  /* hook en el que se hace la peticion a la API */
  ngOnInit(): void {
    this.logo = 'houses.png';
    this.personajesService.getProfesores()
      .subscribe(resp => {
        this.profesores = resp;
      });
  }

  /* metodo para agregar estilos */
  styles(): Object {
    return {backgroundImage: 'url(assets/images/' + this.logo + ')'};
  }

}
