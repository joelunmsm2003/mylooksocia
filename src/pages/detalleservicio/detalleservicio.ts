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

	host='http://104.236.247.3:8000'

  constructor(public _servicio:ServiciosProvider,public navCtrl: NavController, public navParams: NavParams) {

  	this.serv = navParams.get("servicio");

  	console.log('sericmsmss...',this.serv)
  }




  ionViewDidLoad() {

    console.log('ionViewDidLoad DetalleservicioPage');

    console.log('llslslsl',this.navParams.get("servicio"))

	this._servicio.detalleservicio(this.navParams.get("servicio"))
		.subscribe(data => 

		this.ped=data[0]['pedidos']

		);


	this._servicio.detalleservicio(this.navParams.get("servicio"))
		.subscribe(data => 

		this.socia__photo=data[0]['socia__photo']

		);


	this._servicio.detalleservicio(this.navParams.get("servicio"))
		.subscribe(data => 

		this.fecha=data[0]['fecha']

		);

	this._servicio.detalleservicio(this.navParams.get("servicio"))
		.subscribe(data => 

		this.fecha_inicio=data[0]['fecha_inicio']

		);
    
  }

}
