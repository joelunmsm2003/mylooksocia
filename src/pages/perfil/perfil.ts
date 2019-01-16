import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { User } from '../../providers/perfil/user';
import { CalificacionPage } from '../../pages/calificacion/calificacion';
import { BalancePage } from '../../pages/balance/balance';
import { Device } from '@ionic-native/device';
import { Http,RequestOptions, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

 	nombre: any;
 	email: any;
 	telefono:any;
  photo:any;
  perfil:User[];
  user_grupo:any;
  correo:any;
  logeado:any=false;
    uno:any=false;
  dos:any=false;
  tres:any=false;
  cuatro:any=false;
  cinco:any=false;
  dni:any;
  atendidos:any;
  qr:any;
  puntaje:any;
  estrella:any;

  host='http://mylookxpressapp.com:8000'

  constructor(private storage: Storage,private authHttp: AuthHttp,public device:Device,public navCtrl: NavController,private _perfil: PerfilProvider, public navParams: NavParams) {


     this.storage.get('logeado').then((val) => {

                              if(val){

                                this.logeado=true

                                  
                              }
                              
                            });

      this._perfil.miperfil()
      .subscribe(data => {

          this.email=data[0]['email']
          this.telefono=data[0]['telefono']
          this.photo=data[0]['photo']
          this.user_grupo=data[0]['user__groups__name']
          this.nombre=data[0]['nombre']
          this.correo=data[0]['email']
          this.telefono=data[0]['telefono']
          this.dni=data[0]['dni']
          this.atendidos=data[0]['atendidos']
          this.qr=data[0]['qr']
          this.puntaje=data[0]['puntaje']
          this.estrella=data[0]['estrella']


            if(this.estrella==1){
              this.uno=true
            }

            if(this.estrella==2){
              this.uno=true
              this.dos=true
            }

            if(this.estrella==3){
              this.uno=true
              this.dos=true
              this.tres=true
            }

             if(this.estrella==4){
              this.uno=true
              this.dos=true
              this.tres=true
              this.cuatro=true
            }

            if(this.estrella==5){
              this.uno=true
              this.dos=true
              this.tres=true
              this.cuatro=true
              this.cinco=true
            }


      })

     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');



                let creds = JSON.stringify({ model: this.device.model ,tipo:this.device.version });


          let options: RequestOptions = new RequestOptions({
          headers: new Headers({ 'Content-Type': 'application/json' })
          });


          this.authHttp.post('http://mylookxpressapp.com:8000/guardadatosmovil/', creds, options)
          .subscribe(
          data => {



          console.log(data)


          }

          );





  }

  calificacion(){

       this.navCtrl.push(CalificacionPage, {
      categoria: 9,
    })

  }

  balance(){

       this.navCtrl.push(BalancePage, {
      categoria: 9,
    })

  }


}
