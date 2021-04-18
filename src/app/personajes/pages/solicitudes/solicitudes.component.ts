import { Component, OnInit } from '@angular/core';
import { SolictudesService } from '../../services/solictudes.service';
import { Solicitud } from '../../interfaces/solicitud.interface';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  /* variable que guarda la lista de solicitudes */
  solicitudes: Solicitud[];
  /* variable para guardar el fondo */
  background: string;

  constructor(private solicitudService: SolictudesService) { }

  /* hook en el que se hace la peticion */
  ngOnInit(): void {
    this.background = 'letter.png';
    this.solicitudService.getSolicitudes()
      .subscribe(resp => {
        this.solicitudes = resp;
      });
  }

  /* metodo para agregar estilos */
  styles(): Object {
    return {backgroundImage: 'url(assets/images/' + this.background + ')', height: '100%'};
}

}
