import { HttpClient } from '@angular/common/http';
import { Http , Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { Categoria } from './categoria';
import { Distrito } from './distrito';
import { Subcategoria } from './subcategoria';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';
/*
  Generated class for the CategoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class CategoriasProvider {

  constructor(private authHttp: AuthHttp,public _http: Http) {
    console.log('Hello CategoriasProvider Provider');
  }

  getcategorias(): Observable<Categoria[]> {
      return this._http.get('http://104.236.247.3:8000/categoria/1')
      .map((response: Response) => <Categoria[]> response.json())

   }

  getsubcategorias(categoria): Observable<Subcategoria[]> {
      return this._http.get('http://104.236.247.3:8000/subcategoria/'+categoria)
      .map((response: Response) => <Subcategoria[]> response.json())
  
   }


  getdistrito(): Observable<Distrito[]> {
      return this._http.get('http://104.236.247.3:8000/distritos/')
      .map((response: Response) => <Distrito[]> response.json())
  
   }


    panico(){

       this.authHttp.get('http://104.236.247.3:8000/panico/')
    .map((response: Response) => response.json())

 
    }




      
   


}

