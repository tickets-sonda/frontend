import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegistroComponent } from '../registro/registro.component';
import { ReporteComponent } from '../reporte/reporte.component';
import { ServiciosPendientesComponent } from '../servicios-pendientes/servicios-pendientes.component';
import { ServiciosTerminadosComponent } from '../servicios-terminados/servicios-terminados.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'servicios-terminados', component: ServiciosTerminadosComponent },
      { path: 'servicios-pendientes', component: ServiciosPendientesComponent },
      { path: 'reporte/:id', component: ReporteComponent },
      { path: 'registro/:id', component: RegistroComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
