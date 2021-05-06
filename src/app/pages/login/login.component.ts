import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/model/usuario.interface';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    name: '',
    password: '',
    tipo: 0,
  };
  tiposUsuarios = [{ idTipoUsuario: 0, NombreTipoUser: 'Tipo de usuario' }];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getTiposUsuario();
  }

  signIn(usertype, username, password): void {
    this.dataService
      .login(usertype, username, password)
      .subscribe((resp: Usuario) => {
        console.log('resp', resp);
        if (resp) {
          if (resp.idUser) {
            sessionStorage.setItem('NoEmpleado', resp.NoEmpleado.toString());
            sessionStorage.setItem('Nombre', resp.Nombre);
            sessionStorage.setItem('Paterno', resp.Paterno);
            sessionStorage.setItem('Materno', resp.Materno);
            sessionStorage.setItem('NombreCliente', resp.NombreCliente);
            sessionStorage.setItem('NombreTipoUser', resp.NombreTipoUser);
            if (resp.idEmpresaCliente) {
              sessionStorage.setItem(
                'idEmpresaCliente',
                resp.idEmpresaCliente.toString()
              );
            }
            sessionStorage.setItem(
              'idTipoUsuario',
              resp.idTipoUsuario.toString()
            );
            sessionStorage.setItem('idUser', resp.idUser);

            this.router.navigateByUrl('/home');
          } else {
          }
        }
      });
  }

  getTiposUsuario(): void {
    let tiposUsuarios;

    this.dataService.getTiposUsuarios().subscribe((resp) => {
      tiposUsuarios = resp;

      for (let tipoUsuario of tiposUsuarios) {
        this.tiposUsuarios.push(tipoUsuario);
      }
    });
  }
}
