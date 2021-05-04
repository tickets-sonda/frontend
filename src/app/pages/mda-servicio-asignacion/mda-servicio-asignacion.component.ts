import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';


@Component({
  selector: 'app-mda-servicio-asignacion',
  templateUrl: './mda-servicio-asignacion.component.html',
  styleUrls: ['./mda-servicio-asignacion.component.scss']
})
export class MdaServicioAsignacionComponent implements OnInit {

  safeUrl : SafeResourceUrl;
  id;
  detalle = {
    NoServicio: 0,
    FechaInicio: '',
    Duracion: '',
    FechaFin: '',
    FechaAsignacion: '',
    FechaDeSolicitud: '',
    Prioridad: '',
    Estatus: '',
    Sitio: '',
    ubicacion: '' ,
    ResponsableDelSitio: '',
    Asunto: '',
    RutaDescarga: '',
    RutaSubida: '',
    NombreTipoServicio: 'Seleccione',
    idMunicipio: 0,
    NombreCliente: '',
  }

  prioridades = [
    {name: 'Alta'},
    {name: 'Media'},
    {name: 'Baja'},
  ]

  sanitizedurl: any;

  tipoServicios = [
    {   idTipoServicio: 0,
    NombreTipoServicio: "Seleccione"}
  ]
  constructor(private route: ActivatedRoute, private dataService: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.id = res.id;
    });
    this.getDetalle();
    this.getTiposServicios();
  }

  getDetalle(){
    this.dataService.getDetalle(this.id).subscribe((res: any) => {
      console.log(this.detalle)
      this.detalle = res;
      if(res){
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(res.ubicacion);
     }
    });
  }

  getTiposServicios() {
    let tiposServicios;
    this.dataService.getTiposServicios().subscribe(res=>{
      console.log(res)
      tiposServicios = res;

      for (let tiposServicio of tiposServicios) {
        this.tipoServicios.push(tiposServicio);
      }
    })
  }

}
