import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  /* arreglos usados para las listas que se encuentran en la toolbar */
  casas: string[] = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'];

  constructor(private navegacion: Router) { }

  ngOnInit(): void {
  }

  /* metodos que sirven para la navegacion entre rutas */
  busquedaCasa = (casa: string) => {
    this.navegacion.navigate(['personajes/listado', casa]);
  }


}
