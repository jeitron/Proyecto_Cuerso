import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../../modelo/noticia';
import { NoticiaService } from '../../../services/noticia.service';

@Component({
  selector: 'app-listarnot',
  templateUrl: './listarnot.component.html',
  styleUrls: ['./listarnot.component.scss']
})
export class ListarnotComponent implements OnInit {
  public not: Noticia;
  public listanot: any = [];
 
  constructor(private noticiaservice: NoticiaService) {
    this.not = new Noticia( '','','', '');
   }

  ngOnInit(): void {
    this.listarnot()
  }


//listar todos los usuarios
listarnot() {
  this.noticiaservice.listar().subscribe((res:any) => {
    if (res.statusCode != 200) {
      alert('no se encontro');
    }
    else {
      this.listanot = res.listado;
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


//eliminar noticia
eliminarnot(idnot) {
  this.noticiaservice.eliminarnot(idnot).subscribe(
 (res:any) => {
   if (res.statusCode !== 200) {
     alert('no se elimino la noticia')
   }
   else {
     alert('noticia eliminada');
     window.location.reload();
   }
 },
 (error) => {
   console.log(error);
 }

  )
}



}
