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

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    ServiciosTerminadosComponent,
    RegistroComponent,
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
