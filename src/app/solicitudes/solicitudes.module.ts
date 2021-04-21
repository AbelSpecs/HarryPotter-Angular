import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CrearSolicitudComponent } from './pages/crear-solicitud/crear-solicitud.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { FormComponent } from './components/form/form.component';
import { SolicitudesTableComponent } from './components/solicitudes-table/solicitudes-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';

import { PipesModule } from '../pipes/pipes.module';
import { DialogComponent } from './components/dialog/dialog.component';




@NgModule({
  declarations: [
    CrearSolicitudComponent,
    SolicitudesComponent,
    FormComponent,
    SolicitudesTableComponent,
    DialogComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    SolicitudesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule
  ]
})
export class SolicitudesModule { }
