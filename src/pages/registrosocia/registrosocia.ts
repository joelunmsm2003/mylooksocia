import { Component } from '@angular/core';
import { Http,RequestOptions, Headers } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { Categoria } from '../../providers/categorias/categoria';

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



  constructor(private http: Http,private _categoria: CategoriasProvider,private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {

  	 this.todo = this.formBuilder.group({
      email: ['', Validators.required],
      nombre: [''],
      password: [''],
      telefono: [''],
      direccion: ['']

    });

  	 this._categoria.getcategorias()
      .subscribe(data => this.categoria = data);




  }


      user = {}

 


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrosociaPage');
  }

  pedido = new Array();

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

  	
  let creds = JSON.stringify({ categoria: this.pedido, socia: data });



  	  let options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
    });



  this.http.post('http://104.236.247.3:8000/nuevasocia/', creds, options)
    .subscribe(
      data => {

      })


  }

}
