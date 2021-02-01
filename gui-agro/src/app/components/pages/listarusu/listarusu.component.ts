import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../modelo/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-listarusu',
  templateUrl: './listarusu.component.html',
  styleUrls: ['./listarusu.component.scss']
})
export class ListarusuComponent implements OnInit {
public usu: Usuario;
public listausu: any = [];
public buscardoc: number;

  constructor(private usuarioservice: UsuarioService) { 
    this.usu = new Usuario( '',0,'', 0,'','','','','');
  }

  ngOnInit(): void { }



  //listar un usuario
  listarusu() {
    this.usuarioservice.listarusu(this.buscardoc).subscribe((res:any) => {
      if (res.statusCode != 200) {
        alert('no se encontro');
      }
      else {
        this.listausu = res.listado;
      }
    },
    (error) => {
      var errmsg = <any>error;
      if (errmsg != null) {
        console.log(error)
      }
    }

    )
  }
//listar todos los usuarios
  listar() {
    this.usuarioservice.listar().subscribe((res:any) => {
      if (res.statusCode != 200) {
        alert('no se encontro');
      }
      else {
        this.listausu = res.listado;
      }
    },
    (error) => {
      var errmsg = <any>error;
      if (errmsg != null) {
        console.log(error)
      }
    }

    )
  }

//traer un usuario al formulario
traerusu(usu){
  const usustring = JSON.stringify(usu);
  localStorage.setItem('usu', usustring);
}


//eliminar un usuario
eliminarusu(idusu) {
  this.usuarioservice.eliminarusu(idusu).subscribe(
 (res:any) => {
   if (res.statusCode !== 200) {
     alert('no se elimino el usuario')
   }
   else {
     alert('usuario eliminado');
     window.location.reload();
   }
 },
 (error) => {
   console.log(error);
 }

  )
}







}



