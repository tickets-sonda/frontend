import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
