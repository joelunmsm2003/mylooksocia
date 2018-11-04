import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { DetalleservicioPage } from '../../pages/detalleservicio/detalleservicio';

/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html'
})
export class HistorialPage {

	servicios:any;

	host='http://138.68.230.137:8000'

  constructor(public _servicio:ServiciosProvider,public navCtrl: NavController, public navParams: NavParams) {


  this._servicio.getservicios()
      .subscribe(data => this.servicios=data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
  }

  iradetalle(data){

    this.navCtrl.push(DetalleservicioPage, {
      servicio: data.id,
    })

  }


}
