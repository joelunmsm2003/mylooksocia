import { HttpClient } from '@angular/common/http';
import { Http , Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { Foto } from './foto';

@Injectable()
export class PortadaProvider {

  constructor(public _http: Http) {
    console.log('Hello PortadaProvider Provider');
  }

    getfotosdeportada(): Observable<Foto[]> {
      return this._http.get('http://138.68.230.137:8000/portadaphoto')
      .map((response: Response) => <Foto[]> response.json())

   }

}
