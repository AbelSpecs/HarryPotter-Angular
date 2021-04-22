import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { SolictudesService } from '../../services/solicitudes.service';
import { Solicitud } from '../../interfaces/solicitud.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  /* arreglos que se usan para los desplegables de genero y especies en el form */
  generos: string[] = ['female', 'male'];
  especies: string[] = ['half-giant', 'human', 'werewolf'];
  screenWidth: any;
  screenHeight: any;

  /* FormControls que se usan para validar los campos del form */
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)] ],
    especie: ['', [Validators.required, Validators.minLength(3)] ],
    genero: ['', [Validators.required, Validators.minLength(3)] ],
    ancestry: ['', [Validators.required, Validators.minLength(3)] ],
    yearOfBirth: ['', [Validators.required]]
  });

  /* variables que ayudan a validar el rango de fechas seleccionable en el datepicker */
  minDate: Date;
  maxDate: Date;

  constructor(private fb: FormBuilder,
              private solicitudService: SolictudesService,
              private _snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<DialogComponent> ) {
    /* Validacion para que la fecha minima no sea menor al año 1981
    y que la maxima no sea mayor a 2022 */
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 40, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    if(this.screenWidth < 575){
      this.dialogRef.updateSize('100%', '70vh');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    console.log(event);
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    if(this.screenWidth < 575){
      this.dialogRef.updateSize('100%', '70vh');
    }
  }

  /* Metodo que ayuda a saber cuando se van a disparar las validaciones del formulario */
  campoNoEsValido = (campo: string) => {
    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

  /* Metodo que crea una solicitud y la guarda en el store*/
  enviarSolicitud = () => {
    const {nombre, especie, genero, ancestry, yearOfBirth} = this.miFormulario.value;
    const date = moment(yearOfBirth).format('L');
    const year = moment(yearOfBirth).format('y');
    const solicitud: Solicitud = {
      name: nombre,
      species: especie,
      gender: genero,
      ancestry,
      dateOfBirth: date,
      yearOfBirth: Number(year)
    };

    if (nombre === '' || especie === '' || genero === '' || ancestry === '' || yearOfBirth === '' ){
      this.openSnackBar('Rellene todos los campos');
    }else{
      this.solicitudService.addSolicitudes(solicitud);
      this.openSnackBar('Solicitud Agregada!!');
      this.dialogRef.close();
    }

  }

  openSnackBar(message: string) {
    this._snackBar.open(message, null, {
      duration: 2000,
    });
  }

}
