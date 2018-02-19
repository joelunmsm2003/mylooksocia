import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';


import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';


import { CuandoPage } from '../cuando/cuando';
import { VentaPage } from '../venta/venta';

import { IntroPage } from '../../pages/intro/intro';
import { RegistrosociaPage } from '../../pages/registrosocia/registrosocia';



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

 

  constructor(public navCtrl: NavController,public navParams: NavParams) {
console.log('entre mierdaaaaaaaaaaaaaaaaa')
  }


 
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

     iradetalle(data){

    this.navCtrl.push(RegistrosociaPage, {
      servicio: data.id,
    })

  }



}
