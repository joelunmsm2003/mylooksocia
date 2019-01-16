import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
/**
 * Generated class for the DetalleservicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalleservicio',
  templateUrl: 'detalleservicio.html',
})
export class DetalleservicioPage {


	socia__photo:any;
	ped:any;
	fecha:any;
	fecha_inicio:any;
	serv:any;
	reference:any;
	cliente__photo_facebook:any;
	cliente__photo:any;

	host='http://mylookxpressapp.com:8000'

  constructor(public _servicio:ServiciosProvider,public navCtrl: NavController, public navParams: NavParams) {

  	this.serv = navParams.get("servicio");

  	console.log('sericmsmss...',this.serv)
  }




  ionViewDidLoad() {





    console.log('ionViewDidLoad DetalleservicioPage');

    console.log('llslslsl',this.navParams.get("servicio"))

	this._servicio.detalleservicio(this.navParams.get("servicio"))
		.subscribe(data => {

			console.log('detalle servicio...',data)


			this.ped=data[0]['pedidos']

			this.socia__photo=data[0]['socia__photo']

			this.fecha=data[0]['fecha']

			this.fecha_inicio=data[0]['fecha_inicio']

			this.reference=data[0]['referencia']

			this.cliente__photo_facebook=data[0]['cliente__photo_facebook']

			this.cliente__photo=data[0]['cliente__photo']



		});
    
  }

}
