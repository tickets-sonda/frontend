import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-servicios-terminados-detalle',
  templateUrl: './servicios-terminados-detalle.component.html',
  styleUrls: ['./servicios-terminados-detalle.component.scss']
})
export class ServiciosTerminadosDetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  id;
  ngOnInit(): void {
    this.route.params.subscribe(res=> {
      console.log(res)
      this.id = res.id;
    })
    this.getDetalle();
  }

  getDetalle(){
    this.dataService.getDetalle(this.id).subscribe((res: any) => {
      console.log(res)
    })
  }

}
