import { Component,ViewChild } from '@angular/core';
import { Http,RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Injectable } from '@angular/core';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';

import { IntroPage } from '../../pages/intro/intro';
import { TabsPage } from '../../pages/tabs/tabs';
import { RegistroPage } from '../../pages/registro/registro';
import { HistorialsociaPage } from '../../pages/historialsocia/historialsocia';
import { PerfilProvider } from '../../providers/perfil/perfil';

import { ModalController,App,IonicPage, NavController, NavParams,Nav,ViewController,AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';

import { Storage } from '@ionic/storage';

import { ServicioPage } from '../servicio/servicio';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Credentials {
  username: string,
  password: string
}

export class User {
  constructor(
    public username: string,
    public password: string
  ) {  }
}


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


 credentials: Credentials;

  introPage: any;

  registroPage:any;

  grupo:any;

  @ViewChild(Nav) nav: Nav;


   model = new User(null,null);

   


  constructor(public alertCtrl: AlertController,private view:ViewController,private _perfil: PerfilProvider,public appCtrl: App,private http: Http, private authHttp: AuthHttp,public storage: Storage) {

    
    console.log('Login Page....')

    
    this.registroPage=RegistroPage

  }

    ionViewWillEnter() {

      

      
   }

     nologin() {



    let alert = this.alertCtrl.create({
      title: 'My Look Xpress',
      subTitle: 'Usuario o contraseña incorrecta',
      buttons: ['Cerrar']
    });
    alert.present();
  }









  public authenticate(username, password) {


   console.log('ingresando...')

  let creds = JSON.stringify({ username: username, password: password });



  let jwtHelper: JwtHelper = new JwtHelper();

  let options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
    });

  // sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

  this.http.post('http://104.236.247.3:8000/api-token-auth/', creds, options)
    .subscribe(
      data => {

          console.log('status',data.status)

         this.storage.set('token', JSON.parse(data["_body"]).token)

         if(data.status==200){

                 this.view.dismiss()

                 console.log('Redirigiendo...')
                 sleep(200).then(() => {


                // Do something after the sleep!

                          this._perfil.miperfil()

                          .subscribe(reference => 

                          
                          this.storage.set('grupo', reference[0]['user__groups__name'])

                          );


                          this.storage.get('grupo').then((val) => {


                              

                              if(val=='Socia'){

                                  this.appCtrl.getRootNav().push(HistorialsociaPage);

                              }
                              else{

                                  this.appCtrl.getRootNav().push(IntroPage);



                              }
                            });



                  });
           
                 
         }

 
       
         console.log('jwtHelper',JSON.stringify(jwtHelper.decodeToken(JSON.parse(data["_body"]).token)))

      },
      error=>{

        this.nologin()
      }
 
    );

}




closeModal(){

  this.view.dismiss()
}




}
