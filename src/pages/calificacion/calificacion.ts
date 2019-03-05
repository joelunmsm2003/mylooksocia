import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilProvider } from '../../providers/perfil/perfil';


/**
 * Generated class for the CalificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calificacion',
  templateUrl: 'calificacion.html',
})
export class CalificacionPage {


	historial_estrellas:any;

  constructor(private _perfil: PerfilProvider, public navCtrl: NavController, public navParams: NavParams) {

  	 this._perfil.miperfil()
      .subscribe(data => {





          this.historial_estrellas = data[0]['historial_estrella']


          console.log('hshs',this.historial_estrellas)



      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalificacionPage');
  }



     

}
