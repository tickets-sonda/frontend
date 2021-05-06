import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { couldStartTrivia } from 'typescript';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  API = 'http://localhost:8091/api/';

  constructor(private http: HttpClient) {}

  getMunicipios() {
    return this.http.get(`${this.API}municipios`);
  }

  getEstados() {
    return this.http.get(`${this.API}estados`);
  }

  getTiposUsuarios() {
    return this.http.get(`${this.API}tipos-usuario`);
  }

  getTiposServicios() {
    return this.http.get(`${this.API}tipos-servicio`);
  }

  login(idtype, username, password) {
    let body = {
      idTipoUsuario: idtype,
      idUser: username,
      ClaveUsuario: password,
    };
    return this.http.post(`${this.API}auth/login`, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  postEstado(estado) {
    let body = {
      Nombre: estado.Nombre,
    };
    console.log('body', body);
    return this.http.post(`${this.API}registro/estado`, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  postEmpleado(empleado) {
    let body = {
      ...empleado,
    };
    console.log('body', body);
    return this.http.post(`${this.API}registro/empleado`, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  postMunicipio(municipio) {
    let body = {
      ...municipio,
    };
    console.log('body', body);
    return this.http.post(`${this.API}registro/municipio`, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  postSucursal(sucursal) {
    let body = {
      ...sucursal,
    };
    console.log('body', body);
    return this.http.post(`${this.API}registro/sucursal`, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  getSucursales(idUser) {
    let body = {
      idUser: idUser,
    };
    return this.http.post(`${this.API}/sucursales`, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  postSolicitudServicio(solicitud) {
    let body = {
      ...solicitud,
    };
    console.log('body', body);
    return this.http.post(`${this.API}registro/servicio`, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  postTablas(parametros) {
    let body = {
      ...parametros,
    };
    console.log('body', body);
    return this.http.post(`${this.API}tablas`, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  postEmpresaCliente(empresa) {
    let body = {
      ...empresa,
    };
    console.log('body', body);
    return this.http.post(`${this.API}registro/empresa-cliente`, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  getDetalle(id) {
    console.log(id);
    console.log(`${this.API}detalle/${id}`);
    return this.http.get(`${this.API}detalle/${id}`);
  }

  getEmpresaClienteUsers() {
    console.log(`${this.API}empresa-cliente/users`);
    return this.http.get(`${this.API}empresa-cliente/users`);
  }
}
