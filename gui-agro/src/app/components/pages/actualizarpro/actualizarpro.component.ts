import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../../modelo/producto';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-actualizarpro',
  templateUrl: './actualizarpro.component.html',
  styleUrls: ['./actualizarpro.component.scss']
})
export class ActualizarproComponent implements OnInit {
  public pro: Producto;
  public prostorage: any;

  constructor(private proservice: ProductoService, private router: Router) {
    this.pro = new Producto('','','',0,0,'')
   } 

  ngOnInit(): void {
    this.llenarform()
  }
  llenarform() {
    this.prostorage = JSON.parse(localStorage.getItem('pro'))
      }

  actpro() {
        this.proservice.actualizarpro(this.prostorage._id, this.prostorage). subscribe(
          (res:any) => {
            if (res.statusCode !== 200) {
              alert('no se pudo actualizar');
            }
            else {
              alert('producto actualizado');
              localStorage.clear();
              this.router.navigate(['/listarpro']);
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
