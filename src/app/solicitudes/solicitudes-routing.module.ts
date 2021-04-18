import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearSolicitudComponent } from './pages/crear-solicitud/crear-solicitud.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { HomePageComponent } from '../home/pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
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
export class SolicitudesRoutingModule { }
