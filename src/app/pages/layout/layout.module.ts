import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ServiciosTerminadosComponent } from '../servicios-terminados/servicios-terminados.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from '../registro/registro.component';
import { ServiciosPendientesComponent } from '../servicios-pendientes/servicios-pendientes.component';
import { HomeClienteComponent } from '../home-cliente/home-cliente.component';
import { MdaServicioAsignacionComponent } from '../mda-servicio-asignacion/mda-servicio-asignacion.component';
import { ServiciosEnCursoComponent } from '../servicios-en-curso/servicios-en-curso.component';
import { NuevoServicioAsignacionVerComponent } from '../nuevo-servicio-asignacion-ver/nuevo-servicio-asignacion-ver.component';
import { ServiciosTerminadosDetalleComponent } from '../servicios-terminados-detalle/servicios-terminados-detalle.component';
import { ServiciosPendienteDetalleComponent } from '../servicios-pendiente-detalle/servicios-pendiente-detalle.component';
import { MdaPorTerminarComponent } from '../mda-por-terminar/mda-por-terminar.component';
import { ServiciosEnCursoDetalleComponent } from '../servicios-en-curso-detalle/servicios-en-curso-detalle.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    ServiciosTerminadosComponent,
    ServiciosPendientesComponent,
    RegistroComponent,
    HomeClienteComponent,
    HomeClienteComponent,
    MdaServicioAsignacionComponent,
    ServiciosEnCursoComponent,
    NuevoServicioAsignacionVerComponent,
    ServiciosTerminadosDetalleComponent,
    ServiciosPendienteDetalleComponent,
    MdaPorTerminarComponent,
    ServiciosEnCursoDetalleComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
  ],
})
export class LayoutModule {}
