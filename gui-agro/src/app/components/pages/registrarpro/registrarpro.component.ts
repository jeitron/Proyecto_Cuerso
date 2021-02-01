import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../modelo/producto';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-registrarpro',
  templateUrl: './registrarpro.component.html',
  styleUrls: ['./registrarpro.component.scss']
})
export class RegistrarproComponent implements OnInit {
public pro: Producto;
  constructor(private productoservice: ProductoService) { 
    this.pro = new Producto('','','',0,0,'')
  }

  ngOnInit(): void {
  }

  registrarpro() {
    this.productoservice.registrarpro(this.pro).subscribe(
     (res: any) => {
     if (res.statusCode != 200) {
       alert('no se registro');
     }
else {
  alert('producto registrado');
  console.log(this.pro.nombrep)
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
