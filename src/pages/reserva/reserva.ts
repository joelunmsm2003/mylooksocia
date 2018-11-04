import { Component } from '@angular/core';
import { ModalController,App,IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';
import { Storage } from '@ionic/storage';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';
import { ServicioPage } from '../servicio/servicio';
import { PerfilProvider } from '../../providers/perfil/perfil';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  LatLng
} from '@ionic-native/google-maps';
/**
 * Generated class for the ReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserva',
  templateUrl: 'reserva.html',
})
export class ReservaPage {


  


	public rootPage: any = HomePage;

  ubicacion :any;
  pedidos:any;
  precio:any;
  dia:any;
  hora:any;
  data:any;
  referencia:any;

  nombre: any;
  email: any;
  telefono:any;
  photo:any;
  i:any;

  API_URL='http://138.68.230.137:8000'


  constructor(private _perfil: PerfilProvider,public modalCtrl: ModalController,public appCtrl: App,private authHttp: AuthHttp,private storage: Storage,public http: Http,public navCtrl: NavController, public navParams: NavParams,private googleMaps: GoogleMaps) {}







  ionViewDidLoad() {




      this.storage.get('ubicacion').then((val) => {

        this.ubicacion=val
  });


         this.storage.get('precio').then((val) => {

        this.precio=val
  });

        this.storage.get('dia').then((val) => {

        this.dia=val
  });

          this.storage.get('hora').then((val) => {

      

        this.hora=val
  });


           this.storage.get('referencia').then((val) => {

 

        this.referencia=val
  });



  }



 presentProfileModal() {
   let profileModal = this.modalCtrl.create(RegistroPage, { userId: 8675309 });
   profileModal.present();
 }



  quitacarrito(data){


      console.log('jsjs',data)

      const index: number = this.pedidos.indexOf(data);

      if (index !== -1) {

          console.log('isisi',this.pedidos[index])


          this.precio=this.precio-this.pedidos[index].precio

          
          this.pedidos.splice(index, 1);
      }  


  }

   confirma() {



     this.storage.get('token').then((val) => {

      console.log('token',val)

      if(val==null){

        console.log('nullll')

        this.presentProfileModal()

     


      }
      else{

                  let myHeader = new Headers();
                  myHeader.append('Content-Type', 'application/json');

                  this.data={

                  'pedido':this.pedidos,
                  'ubicacion':this.ubicacion,
                  'dia':this.dia,
                  'hora':this.hora,
                  'referencia':this.referencia

                  }

                  this.authHttp.post(this.API_URL+'/buscasocia/1', this.data)
                  .subscribe(
                  data => {

                  console.log(data)

                  this.appCtrl.getRootNav().push(ServicioPage);



                  }

                  );




      }

  });












  }



}

	


