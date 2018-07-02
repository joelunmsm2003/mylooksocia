import { HttpClient } from '@angular/common/http';
import { Http , Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';
import { Servicio } from './servicio';


/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosProvider {

  constructor(private authHttp: AuthHttp,public _http: HttpClient) {
    console.log('Hello ServiciosProvider Provider');
  }

   getservicios(): Observable<Servicio[]> {
      return this.authHttp.get('http://104.236.247.3:8000/miservicios/')
      .map((response: Response) => <Servicio[]> response.json())

   }

    detalleservicio(id_servicio): Observable<Servicio[]> {
      return this.authHttp.get('http://104.236.247.3:8000/detalleservicio/'+id_servicio)
      .map((response: Response) => <Servicio[]> response.json())

   }

   ultimoservicio(): Observable<Servicio[]> {
      return this.authHttp.get('http://104.236.247.3:8000/ultimoservicio/')
      .map((response: Response) => <Servicio[]> response.json())

   }

   serviciosdesocias(): Observable<Servicio[]> {
      return this.authHttp.get('http://104.236.247.3:8000/miserviciossocias/2')
      .map((response: Response) => <Servicio[]> response.json())
   }

   
}
