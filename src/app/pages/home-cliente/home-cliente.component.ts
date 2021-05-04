import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Response } from '../../core/model/response.interface';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.scss'],
})
export class HomeClienteComponent implements OnInit {
  idUser = sessionStorage.getItem('idUser');
  text = '';
  open = false;
  sucursales = [{ idSucursal: 0, Sitio: 'Seleccione una opcion' }];
  servicio = {
    idEmpresaCliente: sessionStorage.getItem('idEmpresaCliente'),
    idUser: this.idUser,
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

    this.dataService.postSolicitudServicio(this.servicio).subscribe((res: Response) => {
      this.text = res.Message;
    });
  }

  getSucursales() {
    let sucursales;
    console.log(this.idUser);
    this.dataService.getSucursales(this.idUser).subscribe((res) => {
      console.log('res', res);
      sucursales = res;
      console.log(sucursales);
      for (let sucursal of sucursales) {
        this.sucursales.push(sucursal);
      }
    });
    console.log(this.sucursales);
  }
}
