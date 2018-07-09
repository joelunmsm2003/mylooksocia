import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';


import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';


import { CuandoPage } from '../cuando/cuando';
import { VentaPage } from '../venta/venta';
import { PerfilPage } from '../perfil/perfil';

import { IntroPage } from '../../pages/intro/intro';
import { LoginprincipalPage } from '../../pages/loginprincipal/loginprincipal';
import { RegistrosociaPage } from '../../pages/registrosocia/registrosocia';
import { HistorialsociaPage } from '../../pages/historialsocia/historialsocia';



/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('searchbar', { read: ElementRef }) searchbar: ElementRef;
  addressElement: HTMLInputElement = null;

  map: any;
  address = '';
  cuandoPage: any;

  ventaPage:any;
  logeado:any=false;

 

  constructor(public navCtrl: NavController,public navParams: NavParams,public storage: Storage,) {
console.log('entre mierdaaaaaaaaaaaaaaaaa')
  }


 
  

  ionViewDidLoad() {
    
 this.storage.get('token').then((val) => {

                              if(val){

                                this.logeado=true

                                  
                              }
                              
                            });


    console.log('ionViewDidLoad HomePage');
   
  }


  ionViewDidEnter() {
    console.log('ionViewDidEnter HomePage');
  }

  ionViewWillEnter(){

    console.log('ionViewWillEnter HomePage');

    this.storage.get('registrosocia').then((val) => {

         console.log('registrosocia',val)

         if(val==true){

             //this.rootPage = PerfilPage;

             this.navCtrl.push(HistorialsociaPage);

             this.storage.set('registrosocia', false)

         }

      });

  }

     iradetalle(data){

    this.navCtrl.push(RegistrosociaPage, {
      servicio: data.id,
    })

  }

   irlogin(){

    this.navCtrl.push(LoginprincipalPage, {
      servicio: '9',
    })

  }



}
