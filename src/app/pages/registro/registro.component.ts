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
  open = false;
  text = '';
  estado = { Nombre: '' };
  municipio = { Nombre: '', idEstado: 0 };
  empleado = {
    Nombre: '',
    Paterno: '',
    Materno: '',
    FechaIngreso: '',
    Telefono: '',
    idMunicipio: 0,
    Direccion: '',
    Sueldo: 0,
    Email: '',
    FechaNacimiento: '',
    MetodoTransporte: '',
    Sexo: '',
    TipoUsuario: 0,
    ClaveUser: 0,
  };
  paramId;
  listaMunicipios = [
    { NombreMunicipio: 'Seleccione', idEstado: 0, Municipio: 0 },
  ];
  listaEstados = [{ idEstado: 0, Nombre: 'Seleccione' }];
  tipoUsuarios = [
    { id: 0, nombre: 'Seleccione' },
    { id: 2, nombre: 'Mesa de ayuda' },
    { id: 3, nombre: 'Ingeniero de Campo' },
  ];
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
    this.dataService.postEstado(this.estado).subscribe((res: any) => {
      this.text = res.Message;
    });
  }

  cancelar(): void {
    this.location.back();
  }

  getMunicipios(): void {
    let municipios;
    this.dataService.getMunicipios().subscribe((res) => {
      console.log('res', res);
      municipios = res;
      for (let municipio of municipios) {
        this.listaMunicipios.push(municipio);
        console.log('lista municipios', this.listaMunicipios);
      }
    });
  }

  registrarEmpleado(empleado): void {
    this.dataService.postEmpleado(empleado).subscribe((res: any) => {
      console.log(res.idUser);
      this.text = `Su nombre de usuario es: ${res.idUser}`;
      console.log(this.text);
    });
  }

  registrarMunicipio(municipio): void {
    this.dataService.postMunicipio(municipio).subscribe((res: any) => {
      this.text = res.Message;
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
