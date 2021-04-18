import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { PersonajesRoutingModule } from './personajes-routing.module';

import { ListadoComponent } from './pages/listado/listado.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { TableComponent } from './components/table/table.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    TableComponent,
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
