import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/core/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DetalleInterface } from 'src/app/core/model/detalle.interface';

@Component({
  selector: 'app-servicios-pendiente-detalle',
  templateUrl: './servicios-pendiente-detalle.component.html',
  styleUrls: ['./servicios-pendiente-detalle.component.scss']
})
export class ServiciosPendienteDetalleComponent implements OnInit {
  id;
  tipoUsuario = sessionStorage.getItem('idTipoUsuario');
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
    ubicacion: '',
    ResponsableDelSitio: '',
    Asunto: '',
    RutaDescarga: '',
    RutaSubida: '',
    NombreTipoServicio: 'Seleccione',
    idMunicipio: 0,
    NombreCliente: '',
    NoEmpleadoInvitado: '',
    NoEmpleado: '',
    Herramientas: '',
    NoSerieProducto: '',
    ActividadesRealizadas: '',
    idTipoMovProducto: 0,
    Descripcion: '',
    idTipoServicio:'',
  };
  open = false;
  text = '';
  safeUrl : SafeResourceUrl;
  constructor(private route: ActivatedRoute, private dataService: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log('ID', this.id);
    })
    this.getDetalle();
    console.log('tipo usuariooo',this.tipoUsuario);
  }

  getDetalle() {
    this.dataService.getDetalle(this.id).subscribe((res: any) => {
      this.detalle = res;
      console.log(this.detalle)
      let fecha = res.FechaDeSolicitud.split('T');
      this.detalle.FechaDeSolicitud = fecha[0];
      if(res){
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(res.ubicacion);
      }
    })
  }

  getDate(value) {
    return new Date(value).toUTCString().split(' ').splice(0, 4).join(' ');
  }

  accion(value) {
    console.log(value)
    let servicioEstatus = {
      Accion: value,
      NoServicioA: this.detalle.NoServicio,
      Prioridad: this.detalle.Prioridad,
      IdTipoServicio: this.detalle.idTipoServicio,
      FechaAsignacion: this.detalle.FechaDeSolicitud,
      Herramientas: this.detalle.Herramientas,
      Descripcion: this.detalle.Descripcion,
      NumSerieProducto: this.detalle.NoSerieProducto,
      idTipoMovProducto: this.detalle.idTipoMovProducto,
      NoEmpleadoAsig: this.detalle.NoEmpleado,
      NoEmpleadoInvi:this.detalle.NoEmpleadoInvitado 
    }
    this.dataService.updateServicioEstatus(servicioEstatus).subscribe((res: any) => {
      console.log(res)
      this.text = `Estatus actual: ${res.Estatus}`;
    })
  }

}
