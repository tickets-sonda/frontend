import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  opciones: any;
  contadores: any;

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    this.getOpciones();
    this.getContadores();
  }


  getContadores(): void {
    let opcionesContador;
    switch (sessionStorage.getItem('idTipoUsuario')) {
      case '2':
        this.contadores = [
          {
            Nombre: 'Total de Servicios Terminados',
            Valor: '15', //Este valor debe ser llenado desde la BD
            Color: 'info'
          },
          {
            Nombre: 'Total de Servicios Pendientes',
            Valor: '55',
            Color: 'secondary'
          },
        ];
      break;
      case '3':
        this.contadores = [
          {
            Nombre: 'Total de Servicios Terminados',
            Valor: '45', //Este valor debe ser llenado desde la BD
            Color: 'info'
          },
          {
            Nombre: 'Total de Servicios Pendientes',
            Valor: '10',
            Color: 'secondary'
          },
        ];
      break;
      case '4':
        this.contadores = [
          {
            Nombre: 'No. Ticket en Curso',
            Valor: '12345',
            Color: 'info'
          },
          {
            Nombre: 'Tickets Concluidos',
            Valor: '15',
            Color: 'secondary'
          },
        ];
      break;
    }
  }
    
  getOpciones(): void {
    let opcionesMenu;
    switch (sessionStorage.getItem('idTipoUsuario')) {
      case '1':
        this.opciones = [
          {
            id: 1,
            Nombre: 'Reporte de servicios terminados',
            ruta: 'servicios-terminados',
          },
          {
            id: 2,
            Nombre: 'Reporte de servicios pendientes',
            ruta: 'servicios-pendientes',
          },
          {
            id: 3,
            Nombre: 'Reporte Empleados',
            ruta: 'servicios-pendientes',
          },
        ];
      break;
    }
    
    // this.DataService.getOpciones().subscribe((resp) => {
    //   console.log('opciones', resp);
    //   this.opciones = resp;
    // });
  }
}
