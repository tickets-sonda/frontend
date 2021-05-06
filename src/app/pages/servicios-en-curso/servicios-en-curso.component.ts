import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-servicios-en-curso',
  templateUrl: './servicios-en-curso.component.html',
  styleUrls: ['./servicios-en-curso.component.scss']
})
export class ServiciosEnCursoComponent implements OnInit {
  
  parametros={estatus:'En curso',idUser: sessionStorage.getItem('idUser')}
  registros: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getServiciosEnCurso();
  }

  getServiciosEnCurso() {
    this.dataService.postTablas(this.parametros).subscribe((res:any) => {
      console.log('res', res);
      this.registros = res;
      console.log(this.registros);
    })
  }


}
