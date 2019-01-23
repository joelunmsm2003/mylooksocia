import { Component,ViewChild } from '@angular/core';
import { Http,RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Injectable } from '@angular/core';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';

import { IntroPage } from '../../pages/intro/intro';
import { TabsPage } from '../../pages/tabs/tabs';
import { HistorialsociaPage } from '../../pages/historialsocia/historialsocia';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { Storage } from '@ionic/storage';
import { App,IonicPage, NavController,Nav,ViewController,AlertController } from 'ionic-angular';

import { RegistroprincipalPage } from '../registroprincipal/registroprincipal';
import { RegistrosociaPage } from '../../pages/registrosocia/registrosocia';

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
  selector: 'page-loginprincipal',
  templateUrl: 'loginprincipal.html',
})
export class LoginprincipalPage {


 credentials: Credentials;

  introPage: any;

  registroPage:any;

  registroprincipalPage:any;

  registrosociaPage:any;

  grupo:any;

  rootPage:any=HistorialsociaPage

  logeado:any=false;

  //@ViewChild(Nav) nav: Nav;


   model = new User(null,null);

   


  constructor(public navCtrl1: NavController,private nav: NavController,public alertCtrl: AlertController,private view:ViewController,private _perfil: PerfilProvider,public appCtrl: App,private http: Http, private authHttp: AuthHttp,public storage: Storage) {

    
    this.registroprincipalPage=RegistroprincipalPage

    this.registrosociaPage= RegistrosociaPage

  }

    ionViewWillEnter() {

    	console.log('ENTRE a LOGIN PRINCIOAPL')


          this.storage.get('token').then((val) => {


            console.log('TOKENNNNN.....',val)



        
      });


     this._perfil.miperfil()
      .subscribe(data => {




      },

      error=>{

        console.log('loginprincipail...',error)

         //this.nav.setRoot(LoginprincipalPage);

          //this.navCtrl1.push('RegistrosociaPage');

      })



      

      
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

  this.http.post('http://mylookxpressapp.com:8000/api-token-auth/', creds, options)
    .subscribe(
      data => {

          console.log('status',data.status)

         this.storage.set('token', JSON.parse(data["_body"]).token)

         if(data.status==200){

              

                 console.log('Redirigiendo...')
                 sleep(200).then(() => {


                // Do something after the sleep!

                          this.storage.get('token').then((val) => {


                             if(val){



                                     console.log('TOKEN...',val)

                                              
                                     this.logeado=true
                                     

                                     //this.nav.setRoot(HistorialsociaPage);

                                     //this.appCtrl.getRootNav().push(HistorialsociaPage);

                                     //this.nav.popToRoot();

                                     this.nav.setRoot(HistorialsociaPage);

                                     //this.nav.popToRoot()


                                   }

                              });
     


                  });
           
                 
         }

 
       

      },
      error=>{


        console.log('No esta logeado......')

        this.nologin()
      }
 
    );

}




closeModal(){

  this.view.dismiss()
}


tetas(){


  
}

}
