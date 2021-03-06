import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController } from 'ionic-angular';
import { Http,RequestOptions, Headers } from '@angular/http';
import { App,Nav } from 'ionic-angular';
import { IntroPage } from '../../pages/intro/intro';
import { LoginPage } from '../../pages/login/login';
import { RegistrosociaPage } from '../../pages/registrosocia/registrosocia';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HistorialsociaPage } from '../../pages/historialsocia/historialsocia';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

   private todo : FormGroup;

   registrosociaPage:any;
   loginPage:any;

  constructor(public storage: Storage,private _perfil: PerfilProvider,public alertCtrl: AlertController,private view:ViewController,private formBuilder: FormBuilder,public appCtrl: App,private http: Http,public navCtrl: NavController, public navParams: NavParams) {




     this.todo = this.formBuilder.group({
      email: ['', Validators.required],
      nombre: [''],
      password: [''],

    });

      this.registrosociaPage=RegistrosociaPage

      this.loginPage=LoginPage


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }




    showAlert(data) {

      console.log(data)

    let alert = this.alertCtrl.create({
      title: 'My Look Xpress',
      subTitle: 'Bienvenido, porfavor ingresa',
      buttons: ['OK']
    });
    alert.present();
  }



    emailrepetido() {

      

    let alert = this.alertCtrl.create({
      title: 'My Look Xpress',
      subTitle: 'Este correo ya existe porfavor escoja otra',
      buttons: ['Cerrar']
    });
    alert.present();
  }

  closeModal(){

  this.view.dismiss()
}

    user = {}


  logForm(env) {
    console.log(env.email)



 let creds = JSON.stringify({ username: env.email, password: env.password });




  let options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
    });


  function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}






  this.http.post('http://mylookxpressapp.com:8000/registro/', env, options)
    .subscribe(
      data => {

        console.log('eroo..',data['_body'])

        if(data['_body']=='"ok"'){

          console.log('ingrese')

           ///Logeandose

                   this.http.post('http://mylookxpressapp.com:8000/api-token-auth/', creds, options)
                  .subscribe(
                    data => {


                       console.log('ingresando..',data)
                       this.storage.set('token', JSON.parse(data["_body"]).token)

                       this.view.dismiss()
                               
                                }
                           
                              );

        }

        if(data['_body']==0){

          this.emailrepetido()

        }

     
     
       
      

      }
 
    );





  }

}
