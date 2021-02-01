import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../modelo/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-actualizarusu',
  templateUrl: './actualizarusu.component.html',
  styleUrls: ['./actualizarusu.component.scss']
})

export class ActualizarusuComponent implements OnInit {
  public usu: Usuario;
  public usustorage: any;


  constructor(private ususervice: UsuarioService, private router: Router) { 
    this.usu = new Usuario('',0,'', 0,'','','','','')    
  }

  

  ngOnInit(): void { 
    this.llenarform()
  }

  llenarform() {
this.usustorage = JSON.parse(localStorage.getItem('usu'))
  }

actusu() {
  this.ususervice.actualizarusu(this.usustorage._id, this.usustorage). subscribe(
    (res:any) => {
      if (res.statusCode !== 200) {
        alert('no se pudo actualizar');
      }
      else {
        alert('usuario actualizado');
        localStorage.clear();
        this.router.navigate(['/listarusu']);
      }
    },
    (error) => {
      var errormsg = <any>error;
      if (errormsg != null) {
        
      }
    }
  )
}





}
