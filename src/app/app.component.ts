import { Component, ViewChild } from '@angular/core';
import { App,Nav,NavController,Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http,RequestOptions, Headers } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { IntroPage } from '../pages/intro/intro';
import { LoginprincipalPage } from '../pages/loginprincipal/loginprincipal';
import { LoginPage } from '../pages/login/login';
import { DetalleservicioPage } from '../pages/detalleservicio/detalleservicio';
import { AlertaPage } from '../pages/alerta/alerta';
import { HistorialsociaPage } from '../pages/historialsocia/historialsocia';
import { Storage } from '@ionic/storage';
import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';
import { OneSignal } from '@ionic-native/onesignal';
import { PerfilProvider } from '../providers/perfil/perfil';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IntroPage;

  data:any;

  public grupo:any;

  url = 'http://104.236.247.3:8000'

  pages: Array<{title: string, component: any}>;

  
  navCtrl:NavController

  constructor(private _perfil: PerfilProvider,private storage:Storage,private alertCtrl: AlertController,private authHttp: AuthHttp,public appCtrl: App,public platform: Platform,private oneSignal: OneSignal, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
     this.platform.ready().then(() => {


  
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.handlerNotifications();


      



    });




     




    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
 
    ];

      this.storage.get('token').then((val) => {


           if(val){

             
                  this.storage.get('grupo').then((val) => {


                 
                    if(val=='Socia'){

                        this.appCtrl.getRootNav().push(HistorialsociaPage);


                        //this.appCtrl.getRootNav().push(DetalleservicioPage, { servicio: 120 })

                        

                    }
                    else{

                        this.appCtrl.getRootNav().push(IntroPage);


                    }
          });


   
             

           }

      });

  }


   ionViewWillEnter(){


    console.log('App components.','ionViewWillEnter')

  }



 




  private handlerNotifications(){


  this.oneSignal.startInit('6d06ccb5-60c3-4a76-83d5-9363fbf6b40a', '466431784640')
  this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
  this.oneSignal.handleNotificationOpened()
  .subscribe(jsonData => {



     if(jsonData.notification.payload.additionalData.servicio){


    // let alert = this.alertCtrl.create({
    //   title: 'Tienes un nuevo servicio',
    //   subTitle: 'Codigo: '+jsonData.notification.payload.additionalData.servicio,
    //   buttons: ['OK']
    // });

    // alert.present();

    
      this.appCtrl.getRootNav().push(AlertaPage, { servicio: jsonData.notification.payload.additionalData.servicio });
      
    }

     if(jsonData.notification.payload.additionalData.aceptaservicio){

       

      this.appCtrl.getRootNav().push(DetalleservicioPage, { servicio: jsonData.notification.payload.additionalData.aceptaservicio })
      
    }


     if(jsonData.notification.payload.additionalData.codigo){


         let code = this.alertCtrl.create({
      title: 'No te olvide de My Look Xpress',
      subTitle: 'Buenas tardes',
      buttons: ['OK']
    });

    code.present();




        let creds = JSON.stringify(jsonData);

      let options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
      });


      this.authHttp.post('http://104.236.247.3:8000/guardanotificacion/',creds,options)
      .subscribe(

      data => {

          console.log(data)

       }

      );

     }


    





      
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  });


  this.oneSignal.endInit();
}









  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

////

// Add the following to your existing ready fuction.

