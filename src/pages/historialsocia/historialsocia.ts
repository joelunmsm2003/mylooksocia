import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Nav, NavParams,Platform } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { Device } from '@ionic-native/device';

import { LoginPage } from '../../pages/login/login';
import { AlertaPage } from '../../pages/alerta/alerta';
import { Http,RequestOptions, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';
import { LoginprincipalPage } from '../../pages/loginprincipal/loginprincipal';
import { PerfilProvider } from '../../providers/perfil/perfil'

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
  linea:any;

  @ViewChild(Nav) nav: Nav;

 

  constructor(private _perfil: PerfilProvider,private authHttp: AuthHttp,public device:Device,public _servicio:ServiciosProvider,public navCtrl: NavController, public navParams: NavParams) {


  	


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialsociaPage');

    

    console.log(' page-inicio....','ionViewDidLoad')

      this._perfil.miperfil()
      .subscribe(data => {

          console.log('perfil......',data)

          this.linea=data


      },

      error=>{

        console.log('loginprincipail...',error)

         //this.nav.setRoot(LoginprincipalPage);

          //this.navCtrl1.push('RegistrosociaPage');

      })


  



    this._servicio.serviciosdesocias()
      .subscribe(data => {

        console.log('serv socias',data)

        this.servicios=data

         console.log(Object.keys(data).length)

         if (Object.keys(data).length==0){

           this.servicios=false
         }

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

   cambia(data){

   console.log(data)


      this._perfil.enlinea(data)
      .subscribe(data => {

         
          console.log('linea.....',data)

      })

 
 }



}
