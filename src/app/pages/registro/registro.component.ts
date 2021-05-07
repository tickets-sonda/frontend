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
  Sucursal = { EmpresaCliente: 0, Ubicacion: '', Sitio: '', NombreMunicipio: '' };
  empresaCliente = {
    NombreCliente: '',
    Telefono: '',
    Email: '',
    DescripcionRama: '',
    ClaveEmpresa: '',
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
  listaTiposUsuarios: any;
  empresaClienteUsers: any;
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
    this.getEmpresaClienteUsers();
    this.getTiposUsuarios();
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
      municipios = res;
      for (let municipio of municipios) {
        this.listaMunicipios.push(municipio);
      }
    });
  }

  registrarEmpleado(empleado): void {
    this.dataService.postEmpleado(empleado).subscribe((res: any) => {
      this.text = `Su nombre de usuario es: ${res.idUser}`;
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
      estados = res;
      for (let estado of estados) {
        this.listaEstados.push(estado);
      }
    });
  }

  registrarEmpresaCliente(empresa) {
    this.dataService.postEmpresaCliente(empresa).subscribe((res: any) => {
      console.log(res)
      this.text = `Su ID de usuario es: ${res.Usuario} y su ID de empresa es: ${res.idEmpresaCliente}`;
    });
  }

  getEmpresaClienteUsers() {
    this.dataService.getEmpresaClienteUsers().subscribe((res: any) => {
      this.empresaClienteUsers = res;
    });
  }

  getTiposUsuarios() {
    this.dataService.getTiposUsuarios().subscribe((res: any) => {
      this.listaTiposUsuarios = res;
    });
  }

  registrarSucursal(sucursal) {
    this.dataService.postSucursal(sucursal).subscribe((res: any) => {
      this.text = res.Message;
      console.log(res);
    })
  }
}
