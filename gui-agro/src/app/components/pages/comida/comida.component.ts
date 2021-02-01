import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../modelo/producto';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {
  public pro: Producto;
  public listapro: any = [];
  public buscarnom =  "comida"; 


  constructor(private productoservice: ProductoService) { 
    this.pro = new Producto('','','',0,0,'')
  }

 
  ngOnInit(): void {
this.listacom()
  }

  listacom() {
    this.productoservice.listarprocom(this.buscarnom).subscribe((res:any) => {
      if (res.statusCode != 200) {
        alert('no se encontro');
      }
      else {
        this.listapro = res.listado;
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

//traer un producto a mostrar
traerpro(pro){
  const usustring = JSON.stringify(pro);
  localStorage.setItem('pro', usustring);
}




}
