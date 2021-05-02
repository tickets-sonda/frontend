import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-pendientes',
  templateUrl: './servicios-pendientes.component.html',
  styleUrls: ['./servicios-pendientes.component.scss']
})
export class ServiciosPendientesComponent implements OnInit {
  currentUser = {
    nombre: '',
    paterno: '',
    materno: '',
    empresa: '',
    puesto: '',
    tipousuario: '',
  };

  constructor() { }

  ngOnInit(): void {
    this.currentUser.nombre = sessionStorage.getItem('Nombre');
    this.currentUser.paterno = sessionStorage.getItem('Paterno');
    this.currentUser.materno = sessionStorage.getItem('Materno');
    this.currentUser.empresa = sessionStorage.getItem('NombreCliente');
    this.currentUser.puesto = sessionStorage.getItem('NombreTipoUser');
    this.currentUser.tipousuario = sessionStorage.getItem('idTipoUsuario');
  }

}
