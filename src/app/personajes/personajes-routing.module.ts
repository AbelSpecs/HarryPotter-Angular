/* Archivo para las rutas hijas */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoComponent } from './pages/listado/listado.component';

import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';

import { HomePageComponent } from '../home/pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
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
        path: '**',
        redirectTo: 'home'
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
