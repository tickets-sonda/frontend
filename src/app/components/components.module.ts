import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

const components = [SidenavComponent, HeaderComponent, ModalComponent];
@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule],
  exports: [components],
})
export class ComponentsModule {}
