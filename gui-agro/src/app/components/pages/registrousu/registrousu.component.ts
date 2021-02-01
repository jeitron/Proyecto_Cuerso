import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../modelo/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-registrousu',
  templateUrl: './registrousu.component.html',
  styleUrls: ['./registrousu.component.scss']
})

export class RegistrousuComponent implements OnInit {
public usu : Usuario;

  constructor(private ususervice: UsuarioService) {
    this.usu = new Usuario('',0,'', 0,'','','','','')
   }

  ngOnInit(): void { }

  registrar() {
    this.ususervice.registrarusu(this.usu).subscribe(
     (res: any) => {
     if (res.statusCode != 200) {
       alert('no se registro');
     }
else {
  alert('usuario registrado');
  console.log(this.usu.documento)
}
     },
    (error) => {
var errosmen = <any>error;
if (errosmen != null) {
  console.log(error)
}
    }

    )
  }

}
