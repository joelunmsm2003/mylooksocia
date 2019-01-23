import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Nav, NavParams,Platform } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { Device } from '@ionic-native/device';

import { LoginPage } from '../../pages/login/login';
import { AlertaPage } from '../../pages/alerta/alerta';
import { Http,RequestOptions, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';
import { LoginprincipalPage } from '../../pages/loginprincipal/loginprincipal';


/**
 * Generated class for the HistorialsociaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historialsocia',
  templateUrl: 'historialsocia.html',
  providers: [ServiciosProvider]
})
export class HistorialsociaPage {

  servicios:any;

  @ViewChild(Nav) nav: Nav;

 

  constructor(private authHttp: AuthHttp,public device:Device,public _servicio:ServiciosProvider,public navCtrl: NavController, public navParams: NavParams) {


  	


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialsociaPage');

    

    this._servicio.serviciosdesocias()
      .subscribe(data => {

        console.log('serv socias',data)

        this.servicios=data

      });




                let creds = JSON.stringify({ model: this.device.model ,tipo:this.device.version });


          let options: RequestOptions = new RequestOptions({
          headers: new Headers({ 'Content-Type': 'application/json' })
          });


          this.authHttp.post('http://mylookxpressapp.com:8000/guardadatosmovil/', creds, options)
          .subscribe(
          data => {



          console.log(data)


          },
          error => {  
            console.log('data...')

            this.navCtrl.setRoot(LoginprincipalPage); 

            //this.navCtrl.push('LoginPrincipalPage');
          }

          );


  }

   iradetalle(data){

    this.navCtrl.push(AlertaPage, {
      servicio: data.id
    })

  }



}
