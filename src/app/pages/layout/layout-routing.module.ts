import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegistroComponent } from '../registro/registro.component';
import { ReporteComponent } from '../reporte/reporte.component';
import { ServiciosPendientesComponent } from '../servicios-pendientes/servicios-pendientes.component';
import { ServiciosTerminadosComponent } from '../servicios-terminados/servicios-terminados.component';
import { LayoutComponent } from './layout.component';
import { HomeClienteComponent } from '../home-cliente/home-cliente.component';
import { MdaServicioAsignacionComponent } from '../mda-servicio-asignacion/mda-servicio-asignacion.component';
import { ServiciosEnCursoComponent } from '../servicios-en-curso/servicios-en-curso.component'
import { NuevoServicioAsignacionVerComponent } from '../nuevo-servicio-asignacion-ver/nuevo-servicio-asignacion-ver.component';
import { ServiciosTerminadosDetalleComponent } from '../servicios-terminados-detalle/servicios-terminados-detalle.component';
import { ServiciosPendienteDetalleComponent } from '../servicios-pendiente-detalle/servicios-pendiente-detalle.component';
import { MdaPorTerminarComponent } from '../mda-por-terminar/mda-por-terminar.component';
import { ServiciosEnCursoDetalleComponent } from '../servicios-en-curso-detalle/servicios-en-curso-detalle.component';

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
      { path: 'crear-solicitud', component: HomeClienteComponent},
      { path: 'servicio-asignacion/:id', component: MdaServicioAsignacionComponent},
      { path: 'servicios-en-curso', component: ServiciosEnCursoComponent},
      { path: 'nuevo-servicio-asignacion-ver', component: NuevoServicioAsignacionVerComponent},
      { path: 'servicios-terminados-detalle', component: ServiciosTerminadosDetalleComponent},
      { path: 'servicios-pediente-detalle', component: ServiciosPendienteDetalleComponent},
      { path: 'servicio-pendiente-por-terminar-mda', component: MdaPorTerminarComponent},
      { path: 'servicios-en-curso-detalle', component: ServiciosEnCursoDetalleComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
