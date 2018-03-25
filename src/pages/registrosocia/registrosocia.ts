import { Component } from '@angular/core';
import { Http,RequestOptions, Headers } from '@angular/http';
import { App,IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { Categoria } from '../../providers/categorias/categoria';
import { Distrito } from '../../providers/categorias/distrito';
import { SpinnerProvider } from '../../providers/spinner/spinner'
import { Storage } from '@ionic/storage';
import { IntroPage } from '../../pages/intro/intro';
import { PerfilPage } from '../../pages/perfil/perfil';
import { Device } from '@ionic-native/device';

import { AuthHttp, tokenNotExpired,JwtHelper } from 'angular2-jwt';

/**
 * Generated class for the RegistrosociaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrosocia',
  templateUrl: 'registrosocia.html',
  providers: [CategoriasProvider]
})
export class RegistrosociaPage {

	 private todo : FormGroup;

	 categoria: Categoria[];
   distrito:Distrito[]

   zone:any;
   employees:any;

   subcate:any;
   email:any;



  constructor(private authHttp: AuthHttp,public device:Device,public appCtrl: App,public storage: Storage,public spinner: SpinnerProvider,public alertCtrl: AlertController,private http: Http,private _categoria: CategoriasProvider,private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {

  	 this.todo = this.formBuilder.group({
      email: ['', Validators.required],
      nombre: [''],
      apellido: [''],
      password: [''],
      telefono: [''],
      direccion: [''],
      referencia:[''],
      cuenta:[''],
      distrito:[''],
      horario:[''],
      experiencia:[''],
      comentario:['']

    });

     this.subcate = this.navParams.get("subcategoria");

  	 this._categoria.getcategorias()
      .subscribe(data => this.categoria = data);



         this._categoria.getdistrito()
      .subscribe(data => this.distrito = data);
  

  }


    


      user = {}

 


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrosociaPage');
  }

  pedido = new Array();






  public authenticate(username, password) {


   console.log('ingresando...')

  let creds = JSON.stringify({ username: username, password: password });


  console.log('Ingresando....',creds)


  let options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
    });

  // sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

  this.http.post('http://104.236.247.3:8000/api-token-auth/', creds, options)
    .subscribe(
      data => {

          console.log('token.....',JSON.parse(data["_body"]).token)

         this.storage.set('token', JSON.parse(data["_body"]).token)



          let creds = JSON.stringify({ model: this.device.model ,tipo:this.device.version });


          let options: RequestOptions = new RequestOptions({
          headers: new Headers({ 'Content-Type': 'application/json' })
          });


          this.authHttp.post('http://104.236.247.3:8000/guardadatosmovil/', creds, options)
          .subscribe(
          data => {



          console.log(data)


          }

          );



  

      },
      error=>{

        this.nologin()
      }
 
    );

}



     nologin() {



    let alert = this.alertCtrl.create({
      title: 'My Look Xpress',
      subTitle: 'Usuario o contraseña incorrecta',
      buttons: ['Cerrar']
    });
    alert.present();
  }


    agregacarrito(data){



    this.pedido.push(data); 

    console.log('pedido',this.pedido)




  

  }

  quitacarrito(data){

      const index: number = this.pedido.indexOf(data);

      if (index !== -1) {
          this.pedido.splice(index, 1);
      }  
       

  }

  enviasocia(data){

    this.spinner.load();

    console.log('pedido..',this.pedido)



  	
  let creds = JSON.stringify({ categoria: this.subcate, socia: data ,detalle:null,pedido:this.pedido});



  	  let options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
    });



  this.http.post('http://104.236.247.3:8000/nuevasocia/', creds, options)
    .subscribe(
      data => {




        console.log('gsgsgsggs',data['_body'].replace('"','').replace('"',''))


        this.email= data['_body'].replace('"','').replace('"','')




        if(this.email==0){


    let alert = this.alertCtrl.create({
      title: 'My Look Xpress',
      subTitle: 'Este correo ya existe, porfavor escoja otro',
      buttons: ['OK']
    });
    alert.present();

     this.spinner.dismiss();


        }

        else{




              this.authenticate(this.email,this.email)


              let alert = this.alertCtrl.create({
              title: 'My Look Xpress',
              subTitle: 'Recibimos su solicitud de inscripcion en breve nos contactaremos con usted via email o wasap para una evaluacion',
              buttons: ['OK']
              });
              alert.present();

              this.storage.set('registrosocia', true)

              this.spinner.dismiss();

              this.appCtrl.getRootNav().push(PerfilPage);



            




        }



      })


  }

}
