import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.scss'],
})
export class HomeClienteComponent implements OnInit {
  text = '';
  open = false;
  sucursales = [{ idSucursal: 0, NombreCliente: 'Seleccione una opcion' }];
  servicio = {
    idEmpresaCliente: sessionStorage.getItem('idEmpresaCliente'),
    idUser: sessionStorage.getItem('idUser'),
    FechaSolicitud: '',
    Asunto: '',
    Sucursal: 0,
    ResponsableSitio: '',
    Email: 'miguelon@elbarbaro.com',
  };
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getSucursales();
  }

  enviar(e): void {
    e.preventDefault();
    this.open = true;
    console.log(this.servicio);

    this.dataService.postSolicitudServicio(this.servicio).subscribe((res) => {
      this.text = res.Message;
    });
  }

  getSucursales() {
    let sucursales;
    this.dataService.getSucursales().subscribe((res) => {
      sucursales = res;
      for (let sucursal of sucursales) {
        this.sucursales.push(sucursal);
      }
    });
    console.log(this.sucursales);
  }
}
