import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  urlapi = 'http://localhost:3000/api/'

  constructor(private _http: HttpClient) { }

   // registro noticia
registrarnot(notparam): Observable<any> {
    let params = JSON.stringify(notparam);
    let options = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.urlapi + 'regnot', params, {headers: options}).pipe((res) => res)
  }

// listar todas las noticias
listar(): Observable<any> {
  let options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  return this._http.get(this.urlapi + 'listanot', options).pipe((res) => res);
  }

  
//eliminar producto
eliminarnot(idnot): Observable<any> {
  let options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
return this._http.delete(this.urlapi + 'notdel/' + idnot, options).pipe((res) => res)
 
}





}
