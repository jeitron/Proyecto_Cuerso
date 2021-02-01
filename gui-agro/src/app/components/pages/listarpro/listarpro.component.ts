import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../modelo/producto';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-listarpro',
  templateUrl: './listarpro.component.html',
  styleUrls: ['./listarpro.component.scss']
})
export class ListarproComponent implements OnInit {
  public pro: Producto;
  public listapro: any = [];
  public buscarnom: string;

  constructor(private productoservice: ProductoService) { 
    this.pro = new Producto('','','',0,0,'')
  }

  ngOnInit(): void {
  }

//listar producto por nombre
  listarpro() {
    this.productoservice.listarpro(this.buscarnom).subscribe((res:any) => {
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



//listar todos los productos
  listarp() {
    this.productoservice.listarp().subscribe((res:any) => {
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

//traer un producto al formulario
traerpro(pro){
  const usustring = JSON.stringify(pro);
  localStorage.setItem('pro', usustring);
}


//eliminar un producto
eliminarpro(nomp) {
  this.productoservice.eliminarpro(nomp).subscribe(
 (res:any) => {
   if (res.statusCode !== 200) {
     alert('no se elimino el producto')
   }
   else {
     alert('producto eliminado');
     window.location.reload();
   }
 },
 (error) => {
   console.log(error);
 }

  )
}


}
