import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  estado = { Nombre: '' };
  municipio = { Nombre: '', idEstado: 0 };
  empleado = {
    Nombre: 'yadira',
    Paterno: 'x',
    Materno: 'x',
    FechaIngreso: '2021-04-16',
    Telefono: '292839',
    idMunicipio: 2,
    Direccion: 'calle lirio 215',
    Sueldo: 1000000,
    Email: 'email@email.com',
    FechaNacimiento: '2021-04-26',
    MetodoTransporte: 'publico',
    Sexo: 'M',
  };
  paramId;
  listaMunicipios = [
    { NombreMunicipio: 'Seleccione', idEstado: 0, idMunicipio: 0 },
  ];
  listaEstados = [{ idEstado: 0, Nombre: 'Seleccione' }];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getParamId();
    this.getMunicipios();
    this.getEstados();
    console.log(this.paramId);
  }

  getParamId(): void {
    this.route.params.subscribe((res) => {
      this.paramId = res.id
        .slice(0)
        .toLocaleLowerCase()
        .split('/')[0]
        .split('-')
        .join(' ');
    });
  }

  registrarEstado(value) {
    this.estado.Nombre = value;
    console.log(this.estado);
    this.dataService.postEstado(this.estado).subscribe((res) => {
      console.log(res);
    });
  }

  cancelar(): void {
    this.location.back();
  }

  getMunicipios(): void {
    let municipios;
    this.dataService.getMunicipios().subscribe((res) => {
      municipios = res;
      console.log(municipios);
      for (let municipio of municipios) {
        this.listaMunicipios.push(municipio);
      }
    });
  }

  registrarEmpleado(empleado): void {
    this.dataService.postEmpleado(empleado).subscribe((res) => {
      console.log(res);
    });
  }

  registrarMunicipio(municipio): void {
    this.dataService.postMunicipio(municipio).subscribe((res) => {
      console.log(res);
    });
  }

  getEstados(): void {
    let estados;
    this.dataService.getEstados().subscribe((res) => {
      console.log(res);
      estados = res;
      for (let estado of estados) {
        this.listaEstados.push(estado);
      }
      console.log(this.listaEstados);
    });
  }
}
