import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { IPersona } from '../../interfaces/personajes.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private personajesService: PersonajesService,
              private route: ActivatedRoute,
              private router: Router)
              /* reutilizacion de la ruta en caso de que los parametros cambien */
              { this.router.routeReuseStrategy.shouldReuseRoute = () => false; }

  /* variable personajes recibe una lista de personajes de la peticion */
  personajes: IPersona[];
  /* variable casa guarda el parametro de la ruta */
  casa: string;
  /* variable para guardar el logo de fondo */
  logo: string;

  ngOnInit(): void {

    this.casa = this.route.snapshot.params['casa'];
    if ( this.casa === 'Gryffindor'){
      this.logo = 'gryffindor.png';

    }else if (this.casa === 'Ravenclaw'){
      this.logo = 'ravenclaw.png';

    }else if(this.casa === 'Hufflepuff'){
      this.logo = 'hufflepuff.png';

    }else{
      this.logo = 'slytherin.png';
    }

    /* peticion */
    this.personajesService.getPersonajes(this.casa.toLocaleLowerCase())
      .subscribe(resp => {
        this.personajes = resp;
      });

  }

  /* metodo para agregar estilos */
  styles(): Object {
    if (this.casa === 'Gryffindor' || this.casa === 'Slytherin'){
        return {backgroundImage: 'url(assets/images/' + this.logo + ')'};
    }else{
      return {backgroundImage: 'url(assets/images/' + this.logo + ')', height: '100%'};
    }

}
}


