import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, Nav,MenuController,App} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { Categoria } from '../../providers/categorias/categoria';

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
import { InicioPage } from '../inicio/inicio';
import { CompartirPage } from '../compartir/compartir';
import { LoginprincipalPage } from '../loginprincipal/loginprincipal';
import { BalancePage } from '../balance/balance';
import { CalificacionPage } from '../calificacion/calificacion';
import { Http,RequestOptions, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';


@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  providers: [CategoriasProvider]
})


export class IntroPage {


categoria: Categoria[];


  @ViewChild(Nav) nav: Nav;

  xxxPage:any

host='http://104.236.247.3:8000/'

  reservaPage: any;

  introPage: any;

  perfilPage: any;

  servicioPage:any;

  ventaPage:any;

  calificacionPage:any;


  historialPage:any;
  ayudaPage:any;


  loginPage:any;

  balancePage:any;

  registroPage:any;

  logeado:any=false;

nologeado:any;
user_grupo:any;

inicioPage:any;

loginprincipalPage:any;

historialsociaPage:any;
compartirPage:any;


  constructor(public menuCtrl: MenuController,private authHttp: AuthHttp,public platform: Platform,public modalCtrl: ModalController,private socialSharing: SocialSharing,private storage: Storage,private _perfil: PerfilProvider,private _categoria: CategoriasProvider,public navCtrl: NavController, public navParams: NavParams) {


this._categoria.getcategorias()
      .subscribe(data => this.categoria = data);


    this.perfilPage = PerfilPage;

    this.introPage = IntroPage;

    this.inicioPage=InicioPage;

    this.servicioPage = ServicioPage;

    this.calificacionPage = CalificacionPage;


    this.historialPage = HistorialPage;

    this.historialsociaPage = HistorialsociaPage;

    this.compartirPage = CompartirPage;

    this.loginPage = LoginPage;

    this.loginprincipalPage = LoginprincipalPage;

    this.ventaPage=VentaPage;

    this.ayudaPage=AyudaPage;

    this.xxxPage=HomePage;

    this.balancePage=BalancePage;



     this.storage.get('token').then((val) => {


           if(val){

                  this.xxxPage=HistorialsociaPage;    
             
             

           }

      });


   


  

 

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

   // this.storage.remove('token')


    
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
