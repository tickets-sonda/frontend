import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

const components = [SidenavComponent, HeaderComponent];
@NgModule({
  declarations: [components, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [components],
})
export class ComponentsModule {}
