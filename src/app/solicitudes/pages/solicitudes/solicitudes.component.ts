import { Component, OnInit } from '@angular/core';
import { SolictudesService } from '../../services/solicitudes.service';
import { Solicitud } from '../../interfaces/solicitud.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';


@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  /* variable que guarda la lista de solicitudes */
  solicitudes: Solicitud[] = [];
  solicitudes2: Solicitud[] = [];

  constructor(private solicitudService: SolictudesService,
              public dialog: MatDialog) { }

  /* hook en el que se hace la peticion */
  ngOnInit(): void {

    this.solicitudService.Solicitudes.subscribe(resp => {
      this.solicitudes = resp;

    });

    this.solicitudes2 = this.solicitudService.obtenerSolictudes();

  }
  /* metodo para refrescar la tabla solo la primera vez */
  refrescar() {
    this.solicitudes2 = this.solicitudService.obtenerSolictudes();
  }


  /* metodo para agregar estilos */
  styles(): Object {
    return { height: '100%'};
}

openDialog(): void {
  const dialogRef = this.dialog.open(DialogComponent, {

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

}
