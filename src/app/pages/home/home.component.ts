import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  opciones: any;

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    this.getOpciones();
  }

  getOpciones(): void {
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
        Nombre: 'Reporte de empleados',
        ruta: 'reporte/empleados',
      },
    ];
    // this.DataService.getOpciones().subscribe((resp) => {
    //   console.log('opciones', resp);
    //   this.opciones = resp;
    // });
  }
}
