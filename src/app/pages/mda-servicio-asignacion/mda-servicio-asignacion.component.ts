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
    ubicacion: '',
    ResponsableDelSitio: '',
    Asunto: '',
    RutaDescarga: '',
    RutaSubida: '',
    NombreTipoServicio: 'Seleccione',
    idMunicipio: 0,
    NombreCliente: '',
    NoEmpleadoInvitado: 0,
    NoEmpleado: 0,
    Herramientas: '',
    NoSerieProducto: '',
    ActividadesRealizadas: '',
    idTipoMovProducto: 0,
    Descripcion: '',
    idTipoServicio:'',
  }

  open = false;
  text = '';

  prioridades = [
    {name: 'Alta'},
    {name: 'Media'},
    {name: 'Baja'},
  ]

  EmpleadoSeleccionado: any;
  EmpleadoInvitadoSeleccionado: any;

  sanitizedurl: any;

  tipoServicios = [
    {  idTipoServicio: 0, NombreTipoServicio: "Seleccione"}
  ]

  comboMDAEmpleados = [
    { NoEmpleado: 0, NombreEmpleado: "Seleccione"}
  ]
  constructor(private route: ActivatedRoute, private dataService: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.id = res.id;
    });
    this.getDetalle();
    this.getTiposServicios();
    this.getMDAEmpleadosCombo();
  }

  getDetalle(){
    this.dataService.getDetalle(this.id).subscribe((res: any) => {
      console.log('res', res);
      this.detalle = res;
      let fechaSolicitud = res.FechaDeSolicitud.split('T');
      this.detalle.FechaDeSolicitud = fechaSolicitud[0];
      if(res.FechaAsignacion) {
        let fechaAsignacion = res.FechaAsignacion.split('T');
        this.detalle.FechaAsignacion = fechaAsignacion[0];
      }
      console.log('DETALLEEEEEEEEEEEEE',this.detalle)
      console.log('fecha', this.detalle.FechaDeSolicitud);
      this.detalle.NoEmpleado = 0;
      this.detalle.NoEmpleadoInvitado = 0;
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

  getMDAEmpleadosCombo() {
    let mdaEmpleadosCombo;
    this.dataService.getMDAEmpleadosCombo().subscribe((res: any) => {
      console.log('comboooo', res); 
      mdaEmpleadosCombo = res;
      for (let empleado of mdaEmpleadosCombo) {
        this.comboMDAEmpleados.push(empleado);
      }
      console.log('combo mda empleados', this.comboMDAEmpleados);
    })
  }

  getEmpleadoSeleccionado(event) {
    let value = event.target.value;
    console.log(value);
    this.dataService.getEmpleadoSeleccionado(value).subscribe((res:any) => {
      console.log(res);
      this.EmpleadoSeleccionado = res.Message;
    })
  }

  getEmpledoInvitadoSeleccionado(event) {
    let value = event.target.value;
    console.log(value);
    this.dataService.getEmpleadoSeleccionado(value).subscribe((res:any) => {
      this.EmpleadoInvitadoSeleccionado = res.Message;
      console.log(this.EmpleadoInvitadoSeleccionado);
    })
  }

  reset(){
    window.location.reload();
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
      NoEmpleadoInvi:this.detalle.NoEmpleadoInvitado,
      FechaInicio: this.detalle.FechaInicio,
      FechaFin: this.detalle.FechaFin,
      ActividadesRealizadas: this.detalle.ActividadesRealizadas
    }
    this.dataService.updateServicioEstatus(servicioEstatus).subscribe((res: any) => {
      console.log(res)
      this.text = `Estatus actual: ${res.Estatus}`;
    })
  }

  // getEmpleadoSeleccionado() {
  //   this.dataService.getEmpleadoSeleccionado(1).subscribe((res:any)=>{ 
  //     console.log('seleccionado',res);
  //     // this.detalle.NombreEmpleado = res.Message; 

  //   })
  // }

}
