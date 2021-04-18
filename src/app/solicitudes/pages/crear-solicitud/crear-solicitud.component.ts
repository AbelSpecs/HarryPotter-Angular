import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  /* variable para el fondo */
  background: string;
  constructor() { }

  ngOnInit(): void {
    this.background = 'letter.png';
  }

  /* metodo para asignar estilos */
  styles(): Object {
    return {backgroundImage: 'url(assets/images/' + this.background + ')'};
}
}
