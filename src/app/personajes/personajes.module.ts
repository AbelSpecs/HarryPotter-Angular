import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { PersonajesRoutingModule } from './personajes-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { SolicitudesTableComponent } from './components/solicitudes-table/solicitudes-table.component';
import { CrearSolicitudComponent } from './pages/crear-solicitud/crear-solicitud.component';





@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    TableComponent,
    FormComponent,
    SolicitudesComponent,
    SolicitudesTableComponent,
    CrearSolicitudComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PersonajesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PersonajesModule { }
