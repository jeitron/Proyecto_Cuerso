import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlapi = 'http://localhost:3000/api/'

  constructor(private _http: HttpClient) { }

 // registro usuario
  registrarusu(usuparam): Observable<any> {
    let params = JSON.stringify(usuparam);
    let options = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.urlapi, params, {headers: options}).pipe((res) => res)
  }
  

// listar usuarios por documento
listarusu(documento): Observable<any> {
let options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};
return this._http.get(this.urlapi + 'listado/' + documento, options).pipe((res) => res);
}

// listar todos los usuarios
listar(): Observable<any> {
  let options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  return this._http.get(this.urlapi + 'listado', options).pipe((res) => res);
  }
  
  //actualizar usuario
  actualizarusu(idusu, usuarioactualizado): Observable<any> {
    let params = JSON.stringify(usuarioactualizado)
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    }
   return this._http.put(this.urlapi + 'actusu/' + idusu, params, options).pipe((res) => res)
  }



//eliminar usuario
eliminarusu(idusu): Observable<any> {
  let options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
return this._http.delete(this.urlapi + idusu, options).pipe((res) => res)

}

}
