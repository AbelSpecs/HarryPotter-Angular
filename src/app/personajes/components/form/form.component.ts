import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { SolictudesService } from '../../services/solictudes.service';
import { Solicitud } from '../../interfaces/solicitud.interface';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  /* arreglos que se usan para los desplegables de genero y especies en el form */
  generos: string[] = ['female', 'male'];
  especies: string[] = ['half-giant', 'human', 'werewolf'];

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

  constructor(private fb: FormBuilder, private solicitudService: SolictudesService ) {
    /* Validacion para que la fecha minima no sea menor al año 1981
    y que la maxima no sea mayor a 2022 */
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 40, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
  }

  /* Metodo que ayuda a saber cuando se van a disparar las validaciones del formulario */
  campoNoEsValido = (campo: string) => {
    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

  /* Metodo que crea una solicitud y la guarda en el db.json*/
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
    console.log(solicitud);
    this.solicitudService.sendSolicitudes(solicitud);

  }

}
