import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-terminados',
  templateUrl: './servicios-terminados.component.html',
  styleUrls: ['./servicios-terminados.component.scss'],
})
export class ServiciosTerminadosComponent implements OnInit {
  parametros={estatus:'Aprobado/Terminado',idUser: sessionStorage.getItem('idUser')}
  constructor() {}

  ngOnInit(): void {}
}
