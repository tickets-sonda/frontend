import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-nuevo-servicio-asignacion-ver',
  templateUrl: './nuevo-servicio-asignacion-ver.component.html',
  styleUrls: ['./nuevo-servicio-asignacion-ver.component.scss'],
})
export class NuevoServicioAsignacionVerComponent implements OnInit {
  // servicios = [{NoServicio: }]
  parametros={estatus:'Nuevo',idUser: sessionStorage.getItem('idUser')}
  registros:any;
  constructor(private dataService:DataService) {}

  ngOnInit(): void {this.getTablas()}
  getTablas(){this.dataService.postTablas(this.parametros).subscribe(res=>{
    console.log('respuesta',res)
    this.registros=res;
    console.log(this.registros)
  })}
}

