import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { SpinnerProvider } from '../../providers/spinner/spinner'
import { MapProvider } from '../../providers/map/map';
import { ReservaPage } from '../reserva/reserva';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { Http,RequestOptions, Headers } from '@angular/http';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { HistorialsociaPage } from '../../pages/historialsocia/historialsocia';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()

@Component({
  selector: 'page-alerta',
  templateUrl: 'alerta.html',
})
export class AlertaPage {




  @ViewChild('map') mapElement: ElementRef;

  map: any;
  address = '';
  reservaPage: any;
  ubicacion:any;

  host='http://mylookxpressapp.com:8000'


  ped:any;
  photo_cliente:any;

  latitud:any;
  longitud:any;
  nombre_cliente:any;
  pedidos:any;
  serv:any;
  fecha:any;
  fecha_inicio:any;
  cliente__photo_facebook:any;
  reference:any;
  codigo:any;
  socia_id:any;
  codigo_user:any;
  estado_nombre:any;
  estado_pedido:any;

  constructor(private authHttp: AuthHttp,public _servicio:ServiciosProvider,public storage: Storage,public navCtrl: NavController,
    public geolocation: Geolocation,
    public zone: NgZone,
    public platform: Platform,
    public localStorage: Storage,
    public mapService: MapProvider,
    public spinner: SpinnerProvider,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private _perfil: PerfilProvider,
    private alertCtrl: AlertController) {

      this.reservaPage = ReservaPage;

      this.codigo=this.navParams.get("servicio")

    

       this._perfil.miperfil()
      .subscribe(data => {


          this.codigo_user=data[0]['id']


      })




  }

  presentAlert() {
  
}



  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');

    this.ubicacion='jsjsjsj'

    this.detalleservicio()


  }



detalleservicio(){

    this._servicio.detalleservicio(this.navParams.get("servicio"))
          .subscribe(data => {


             

                this.ped=data[0]['pedidos']
                

     

          this.photo_cliente=data[0]['cliente__photo']

           this.socia_id=data[0]['socia_id']

          this.nombre_cliente=data[0]['cliente__nombre']

       
          this.fecha =data[0]['fecha']
          this.fecha_inicio = data[0]['fecha_inicio']
          this.cliente__photo_facebook =data[0]['cliente__photo_facebook']
          this.reference =data[0]['referencia']
          this.estado_nombre =data[0]['estado__nombre']
          this.estado_pedido =data[0]['estado_pedido']


              // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    // create LatLng object
    let myLatLng = {lat: parseFloat(data[0]['latitud']), lng: parseFloat(data[0]['longitud'])};

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 17   

    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!'
      });
      mapEle.classList.add('show-map');
    });









          if(this.codigo_user!=this.socia_id){

            this.navCtrl.push(HistorialsociaPage, {
              servicio: '9',
            })
          }


          });


     }



 

  // loadMaps() {
  //   if (!!google) {
  //     this.initializeMap();

  //     this.initAutocomplete();








  //   } else {
  //     this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.')
  //   }

  //         console.log('servicio..',this.navParams.get("servicio"))

  //        this._servicio.detalleservicio(this.navParams.get("servicio"))
  //     		.subscribe(data => 

  //     		//this.servicio=data

  //     		this.iraLocation(data[0]['latitud'],data[0]['longitud'])

  //     		//console.log('ser...',data[0])
      	
  //     		);



      		 

 


      
  // }




  closeModal() {
    this.viewCtrl.dismiss();
  }

  errorAlert(title, message) {
    alert('Error in Alert');
  }

  reserva(dia,hora,ubicacion){

      console.log('hhddh',dia,hora)

  	 this.storage.set('dia', dia)

     this.storage.set('hora', hora)

  	 this.storage.set('ubicacion', ubicacion)

  }


  finalizarservicio(){


     this._servicio.finalizaservicio(this.codigo)
        .subscribe(data => {

          console.log(data)

          this.detalleservicio()

        })

  }

  yallege(){


        this._servicio.yallege(this.codigo)
        .subscribe(data => {

          console.log(data)

           this.detalleservicio()

        })
  }


   encamino(){


        this._servicio.encamino(this.codigo)
        .subscribe(data => {

          console.log(data)

          this.detalleservicio()

        })
  }




   enviaracliente(data){

  	let creds = JSON.stringify(data);

      let options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
      });




          this.authHttp.post('http://mylookxpressapp.com:8000/aceptarservicio/',creds,options)
      .subscribe(

      data => {

            console.log(data)


          this.detalleservicio()

          let alert = this.alertCtrl.create({
    title: 'Stilo',
    subTitle: 'Aceptaste el el servicio',
    buttons: ['Cerrar']
  });
  alert.present();


       }

      );
  }

     cancelasocia(data){

    let creds = JSON.stringify(data);

      let options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
      });




          this.authHttp.post('http://mylookxpressapp.com:8000/cancelaserviciosocia',creds,options)
      .subscribe(

      data => {

                 this.navCtrl.popToRoot();
   
                // this._servicio.detalleservicio(this.navParams.get("servicio"))
                //       .subscribe(data => {

      
                //       this.estado_nombre =data[0]['estado__nombre']


                
                      




                //       });

                   }

      );
  }



  aceptar(){




      		this._servicio.detalleservicio(this.navParams.get("servicio"))
      		.subscribe(data => 

      		this.enviaracliente(data)


     
      		);



  }

    rechazar(){


          this._servicio.detalleservicio(this.navParams.get("servicio"))
          .subscribe(data => 


          this.cancelasocia(data)

     
          );



  }

 



}

