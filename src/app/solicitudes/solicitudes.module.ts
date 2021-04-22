import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';

import { SolicitudesTableComponent } from './components/solicitudes-table/solicitudes-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';

import { PipesModule } from '../pipes/pipes.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    SolicitudesComponent,
    SolicitudesTableComponent,
    DialogComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    SolicitudesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    FlexLayoutModule
  ]
})
export class SolicitudesModule { }
