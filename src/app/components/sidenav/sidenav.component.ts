import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() currentUser;
  @Input() location;
  opcionesMenu;

  constructor() {}

  ngOnInit(): void {
    this.getSeccionesMenu();
  }

  getSeccionesMenu(): void {
    let opcionesMenu;
    switch (sessionStorage.getItem('idTipoUsuario')) {
      case '1':
        opcionesMenu = [
          {
            nombre: 'Inicio',
            ruta: 'home',
            icono: 'home',
            clase: 'material-icons',
          },
          {
            nombre: 'Empresas clientes',
            ruta: 'registro/empresa-cliente',
            icono: 'business',
            clase: 'material-icons',
          },
          {
            nombre: 'Empleados',
            ruta: 'registro/empleado',
            icono: 'badge',
            clase: 'material-icons-outlined',
          },
          {
            nombre: 'Tipos de usuario',
            ruta: 'registro/tipo-usuario',
            icono: 'people_alt',
            clase: 'material-icons-outlined',
          },
          {
            nombre: 'Municipios',
            ruta: 'registro/municipio',
            icono: 'place',
            clase: 'material-icons',
          },
          {
            nombre: 'Estados',
            ruta: 'registro/estado',
            icono: 'place',
            clase: 'material-icons',
          },
        ];
        break;
      case '2':
        opcionesMenu = [
          {
            nombre: 'Inicio',
            ruta: 'home',
            icono: 'home',
            clase: 'material-icons',
          },
          {
            nombre: 'Nuevo Servicio (asignación)',
            ruta: 'nuevo-servicio-asignacion-ver',
            icono: 'business',
            clase: 'material-icons',
          },
          {
            nombre: 'Consulta de servicios',
            ruta: '',
            icono: 'badge',
            clase: 'material-icons-outlined',
            children: [
              {
                nombre: 'En curso',
                ruta: 'servicios-en-curso',
                icono: 'badge',
                clase: 'material-icons-outlined',
              },
              {
                nombre: 'Por terminar MDA',
                ruta: 'registro/empleado',
                icono: 'badge',
                clase: 'material-icons-outlined',
              },
            ],
          },
          {
            nombre: 'En curso',
            ruta: 'servicios-en-curso',
            icono: 'badge',
            clase: 'material-icons-outlined',
          },
          {
            nombre: 'Por terminar MDA',
            ruta: 'servicios-pendientes',
            icono: 'badge',
            clase: 'material-icons-outlined',
          },
        ];
        break;
      case '3':
        opcionesMenu = [
          {
            nombre: 'Inicio',
            ruta: 'home',
            icono: 'home',
            clase: 'material-icons',
          },
          {
            nombre: 'Servicios terminados',
            ruta: 'servicios-terminados',
            icono: 'business',
            clase: 'material-icons',
          },
          {
            nombre: 'Servicios pendientes',
            ruta: 'servicios-pendientes',
            icono: 'badge',
            clase: 'material-icons-outlined',
          },
        ];
        break;
        case '4':
        opcionesMenu = [
          {
            nombre: 'Inicio',
            ruta: 'home',
            icono: 'home',
            clase: 'material-icons',
          },
          {
            nombre: 'Crear solicitud',
            ruta: 'crear-solicitud',
            icono: 'badge',
            clase: 'material-icons-outlined',
          },
        ];
        break;
    }
    this.opcionesMenu = opcionesMenu;
  }

  logOut(): void {
    sessionStorage.clear();
  }
}
