import { HttpClient } from '@angular/common/http';
import { Http , Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';


/*
  Generated class for the PerfilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerfilProvider {


	
  constructor(private authHttp: AuthHttp,public _http: HttpClient) {
    console.log('Hello PerfilProvider Provider');
  }


   miperfil(): Observable<User[]> {
      return this.authHttp.get('http://mylookxpressapp.com:8000/miperfil/')
      .map((response: Response) => <User[]> response.json())


   }


    getperfil() {
    return this.authHttp.get('http://mylookxpressapp.com:8000/miperfil/').map((res) => {
      return res.json();
    } );
  }


  enlinea(data) {


        return this.authHttp.post('http://mylookxpressapp.com:8000/linea/', JSON.stringify({ linea: data }))
            .map((response: Response) => {
                
                return response.json();
                
            });
   

        }

}
