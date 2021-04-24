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
}
