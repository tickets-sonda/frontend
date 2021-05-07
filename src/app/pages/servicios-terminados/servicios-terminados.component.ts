import { DataService } from 'src/app/core/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-terminados',
  templateUrl: './servicios-terminados.component.html',
  styleUrls: ['./servicios-terminados.component.scss'],
})
export class ServiciosTerminadosComponent implements OnInit {
  parametros = { estatus: 'Aprobado/Terminado', idUser: sessionStorage.getItem('idUser') }
  registros: any;
  constructor(private dataService: DataService) {}
  ngOnInit(): void { }
  
  getTablas() {
    this.dataService.postTablas(this.parametros).subscribe((res: any) => {
      console.log(res)
      this.registros = res;
    })
  }
}
