import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BackDirective } from './back.directive';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';
import { MdaServicioAsignacionComponent } from './pages/mda-servicio-asignacion/mda-servicio-asignacion.component';
import { ServiciosEnCursoComponent } from './pages/servicios-en-curso/servicios-en-curso.component';
import { NuevoServicioAsignacionVerComponent } from './pages/nuevo-servicio-asignacion-ver/nuevo-servicio-asignacion-ver.component';
import { ServiciosTerminadosDetalleComponent } from './pages/servicios-terminados-detalle/servicios-terminados-detalle.component';
import { ServiciosPendienteDetalleComponent } from './pages/servicios-pendiente-detalle/servicios-pendiente-detalle.component';
import { MdaPorTerminarComponent } from './pages/mda-por-terminar/mda-por-terminar.component';
import { ServiciosEnCursoDetalleComponent } from './pages/servicios-en-curso-detalle/servicios-en-curso-detalle.component';


@NgModule({
  declarations: [AppComponent, BackDirective, HomeClienteComponent, MdaServicioAsignacionComponent, ServiciosEnCursoComponent, NuevoServicioAsignacionVerComponent, ServiciosTerminadosDetalleComponent, ServiciosPendienteDetalleComponent, MdaPorTerminarComponent, ServiciosEnCursoDetalleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
