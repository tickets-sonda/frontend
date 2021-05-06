import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-servicios-en-curso-detalle',
  templateUrl: './servicios-en-curso-detalle.component.html',
  styleUrls: ['./servicios-en-curso-detalle.component.scss']
})
export class ServiciosEnCursoDetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  id;
  ngOnInit(): void {
    this.route.params.subscribe(res=> {
      console.log(res)
      this.id = res.id;
    })
    this.getDetalle();
  }

  getDetalle() {
    this.dataService.getDetalle(this.id).subscribe((res: any) => {
      console.log(res)
    });
  }

}
