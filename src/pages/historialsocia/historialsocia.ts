import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { Device } from '@ionic-native/device';
import { AlertaPage } from '../../pages/alerta/alerta';
import { Http,RequestOptions, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';

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


          this.authHttp.post('http://138.68.230.137:8000/guardadatosmovil/', creds, options)
          .subscribe(
          data => {



          console.log(data)


          }

          );


  }

   iradetalle(data){

    this.navCtrl.push(AlertaPage, {
      servicio: data.id
    })

  }



}
