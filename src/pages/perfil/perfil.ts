import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { User } from '../../providers/perfil/user';
import { CalificacionPage } from '../../pages/calificacion/calificacion';
import { BalancePage } from '../../pages/balance/balance';
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

  host='http://104.236.247.3:8000'

  constructor(public navCtrl: NavController,private _perfil: PerfilProvider, public navParams: NavParams) {


   

      this._perfil.miperfil()
      .subscribe(data => {

          this.email=data[0]['email']
          this.telefono=data[0]['telefono']
          this.photo=data[0]['photo']
          this.user_grupo=data[0]['user__groups__name']
          this.nombre=data[0]['nombre']
          this.correo=data[0]['email']
          this.telefono=data[0]['telefono']

      })

     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
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
