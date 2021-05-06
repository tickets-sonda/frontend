import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

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

  parametros={estatus:'En revision',idUser: sessionStorage.getItem('idUser')}
  registros: any;

  constructor(private dataService: DataService) {
    this.getTablas();
   }

  ngOnInit(): void {
    this.currentUser.nombre = sessionStorage.getItem('Nombre');
    this.currentUser.paterno = sessionStorage.getItem('Paterno');
    this.currentUser.materno = sessionStorage.getItem('Materno');
    this.currentUser.empresa = sessionStorage.getItem('NombreCliente');
    this.currentUser.puesto = sessionStorage.getItem('NombreTipoUser');
    this.currentUser.tipousuario = sessionStorage.getItem('idTipoUsuario');
  }

  getTablas(){
    this.dataService.postTablas(this.parametros).subscribe((res: any) => {
      console.log(res);
      this.registros = res;
      console.log('registros pendientes',this.registros);
    })
  }

}
