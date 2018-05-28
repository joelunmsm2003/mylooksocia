import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, Nav,MenuController,App} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { Categoria } from '../../providers/categorias/categoria';
import { CallNumber } from '@ionic-native/call-number';
import { Storage } from '@ionic/storage';

import { VentaPage } from '../venta/venta';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { UbicacionPage } from '../../pages/ubicacion/ubicacion';
import { PerfilPage } from '../perfil/perfil';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ServicioPage } from '../../pages/servicio/servicio';
import { HistorialPage } from '../historial/historial';
import { HistorialsociaPage } from '../historialsocia/historialsocia';
import { RegistroPage } from '../../pages/registro/registro';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AyudaPage } from '../ayuda/ayuda';
import { LoginprincipalPage } from '../loginprincipal/loginprincipal';
import { IntroPage } from '../intro/intro';
import { Http,RequestOptions, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';
import { BalancePage } from '../balance/balance';
import { CalificacionPage } from '../calificacion/calificacion';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  providers: [CategoriasProvider]
})


export class InicioPage {


categoria: Categoria[];


  @ViewChild(Nav) nav: Nav;

  xxxPage:any

host='http://104.236.247.3:8000/'

  reservaPage: any;

  introPage: any;

  perfilPage: any;

  servicioPage:any;

  ventaPage:any;
  balancePage:any;


  historialPage:any;
  ayudaPage:any;
  inicioPage:any;
  homePage:any;

  calificacionPage:any;


  loginPage:any;

  registroPage:any;

  logeado:any=false;

nologeado:any;
user_grupo:any;

loginprincipalPage:any;

historialsociaPage:any;


  constructor(private callNumber: CallNumber,public menuCtrl: MenuController,private authHttp: AuthHttp,public platform: Platform,public modalCtrl: ModalController,private socialSharing: SocialSharing,private storage: Storage,private _perfil: PerfilProvider,private _categoria: CategoriasProvider,public navCtrl: NavController, public navParams: NavParams) {


this._categoria.getcategorias()
      .subscribe(data => this.categoria = data);


    this.perfilPage = PerfilPage;

    this.introPage = IntroPage;

    this.inicioPage = InicioPage;


    this.servicioPage = ServicioPage;

    this.balancePage= BalancePage

    this.calificacionPage = CalificacionPage

    this.homePage = HomePage

    this.historialPage = HistorialPage;

    this.historialsociaPage = HistorialsociaPage;

    this.loginPage = LoginPage;

    this.loginprincipalPage = LoginprincipalPage;

    this.ventaPage=VentaPage;

    this.ayudaPage=AyudaPage;

    this.xxxPage=HomePage;


     this.storage.get('token').then((val) => {


           if(val){

                  this.xxxPage=HistorialsociaPage;    
             
             

           }

      });


   


  

 

  }

  panico() {


 this.authHttp.get('http://104.236.247.3:8000/panico/')

      .subscribe(
        data => console.log(data)
      );

    this.callNumber.callNumber("910759370", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));

 }
  


 loginModal() {
   let profileModal = this.modalCtrl.create(LoginprincipalPage, { userId: 8675309 });
   profileModal.present();
 }


  ionViewDidLoad() {

    console.log('intro page-intro....','ionViewDidLoad')

  
  }


  ionViewDidEnter() {

    console.log('intro page-intro....','ionViewDidEnter')

  
  }

  ionViewWillEnter(){

    console.log('Intro ionViewWillEnter')



       // this.storage.get('grupo').then((val) => {


       //                        console.log('Historiamskksls',val)

       //                        if(val=='Socia'){

       //                          this.navCtrl.push(HistorialsociaPage);

                                  
       //                        }
                              
       //                      });



  }

  iraventas(data){

 
   this.navCtrl.push(VentaPage, {
      categoria: data,
    })



}

tetas(){


  console.log('tetas')
}

 openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);

       this.menuCtrl.close();
  }


   salir(){

    console.log('saliendo..')

    this.storage.remove('token')


    
    //this.navCtrl.push(IntroPage);

     this.platform.exitApp();


  }

 



    shareSheetShare() {
    this.socialSharing.share("Registrate", "Atreveteeetee sal del closeet", "https://st2.depositphotos.com/5328332/12205/v/950/depositphotos_122057578-stock-illustration-express-delivery-of-fashion-and.jpg", "https://play.google.com/store/apps/details?id=io.codigito.mylookexpress&hl=es").then(() => {
      console.log("shareSheetShare: Success");
    }).catch(() => {
      console.error("shareSheetShare: failed");
    });
  }


}
