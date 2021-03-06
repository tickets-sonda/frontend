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
  terminados: any;
  pendientes: any;

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    this.getOpciones();
    this.getContadores();
  }


  getContadores(): void {
    this.DataService.getContador(sessionStorage.getItem('idUser')).subscribe((res: any) => {
      console.log(res)
      this.terminados = res.Terminados;
      this.pendientes = res.Pendientes;

      switch (sessionStorage.getItem('idTipoUsuario')) {
        case '2':
          this.contadores = [
            {
              Nombre: 'Total de Servicios Terminados',
              Valor: this.terminados, //Este valor debe ser llenado desde la BD
              Color: 'info'
            },
            {
              Nombre: 'Total de Servicios Pendientes',
              Valor: this.pendientes,
              Color: 'secondary'
            },
          ];
        break;
        case '3':
          this.contadores = [
            {
              Nombre: 'Total de Servicios Terminados',
              Valor: this.terminados, //Este valor debe ser llenado desde la BD
              Color: 'info'
            },
            {
              Nombre: 'Total de Servicios Pendientes',
              Valor: this.pendientes,
              Color: 'secondary'
            },
          ];
        break;
        case '4':
          this.contadores = [
            {
              Nombre: 'Tickets en curso',
              Valor: this.pendientes,
              Color: 'info'
            },
            {
              Nombre: 'Tickets Concluidos',
              Valor:  this.terminados,
              Color: 'secondary'
            },
          ];
        break;
      }
    })
    
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
