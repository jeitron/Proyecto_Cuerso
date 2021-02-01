import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlapi = 'http://localhost:3000/api/'

  constructor(private _http: HttpClient) { }

   // registro producto
   registrarpro(proparam): Observable<any> {
    let params = JSON.stringify(proparam);
    let options = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.urlapi + 'producto', params, {headers: options}).pipe((res) => res)
  }


// listar productos por nombre
listarpro(nombrep): Observable<any> {
  let options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  return this._http.get(this.urlapi + 'listarpro/' + nombrep, options).pipe((res) => res);
  }

// listar productos por tipo categoria

listarprocom(nombrep): Observable<any> {
  let options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  return this._http.get(this.urlapi + 'listartip/' + nombrep, options).pipe((res) => res);
  }

// listar todos los productos
listarp(): Observable<any> {
  let options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  return this._http.get(this.urlapi + 'listarpro', options).pipe((res) => res);
  }

  // actualizar producto
  actualizarpro(idpro, productoactualizado): Observable<any> {
    let params = JSON.stringify(productoactualizado)
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    }
   return this._http.put(this.urlapi + 'actpro/' + idpro, params, options).pipe((res) => res)
  }

//eliminar producto
eliminarpro(nomp): Observable<any> {
  let options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
return this._http.delete(this.urlapi + 'elim/' + nomp, options).pipe((res) => res)
 
}







 
}
