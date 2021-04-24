import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, DoCheck {
  location;

  currentUser = {
    nombre: '',
    paterno: '',
    materno: '',
    empresa: '',
    puesto: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.location = location.pathname
      .slice(1)
      .toLocaleLowerCase()
      .split('/')[1];
    this.currentUser.nombre = sessionStorage.getItem('Nombre');
    this.currentUser.paterno = sessionStorage.getItem('Paterno');
    this.currentUser.materno = sessionStorage.getItem('Materno');
    this.currentUser.empresa = sessionStorage.getItem('NombreCliente');
    this.currentUser.puesto = sessionStorage.getItem('NombreTipoUser');
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.location = location.pathname
      .slice(1)
      .toLocaleLowerCase()
      .split('/')[0]
      .split('-')
      .join(' ');
  }
}
