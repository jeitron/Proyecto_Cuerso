import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../../modelo/noticia';
import { NoticiaService } from '../../../services/noticia.service';


@Component({
  selector: 'app-registrarnot',
  templateUrl: './registrarnot.component.html',
  styleUrls: ['./registrarnot.component.scss']
})
export class RegistrarnotComponent implements OnInit {
  public not: Noticia;
  constructor(private noticiaservice: NoticiaService) { 
    this.not = new Noticia( '','','', '');
  }

  ngOnInit(): void {
  }


registrarnot() {
    this.noticiaservice.registrarnot(this.not).subscribe(
     (res: any) => {
     if (res.statusCode != 200) {
       alert('no se registro');
     }
else {
  alert('noticia creada');
  console.log(this.not.titulo)
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
