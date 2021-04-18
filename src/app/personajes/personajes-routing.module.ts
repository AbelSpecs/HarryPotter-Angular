/* Archivo para las rutas hijas */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoComponent } from './pages/listado/listado.component';

import { HomeComponent } from './pages/home/home.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';


import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { CrearSolicitudComponent } from './pages/crear-solicitud/crear-solicitud.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listado/:casa',
        component: ListadoComponent
      },
      {
        path: 'estudiantes',
        component: EstudiantesComponent
      },
      {
        path: 'profesores',
        component: ProfesoresComponent
      },
      {
        path: 'crearsolicitud',
        component: CrearSolicitudComponent
      },
      {
        path: 'solicitudes',
        component: SolicitudesComponent
      },
      {
        path: '**',
        redirectTo: 'estudiantes'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonajesRoutingModule { }
