import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Tabs,AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { Categoria } from '../../providers/categorias/categoria';
import { Subcategoria } from '../../providers/categorias/subcategoria';


import { ReservaPage } from '../reserva/reserva';
import { UbicacionPage } from '../ubicacion/ubicacion';
import { IntroPage } from '../intro/intro';
import { PerfilPage } from '../perfil/perfil';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the VentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-venta',
  templateUrl: 'venta.html',
  providers: [CategoriasProvider]
})
export class VentaPage {

categoria: Categoria[];

myVar=true

host ='http://104.236.247.3:8000/'

subcategoria: Subcategoria[];

venta: Subcategoria[];

mano: Subcategoria[];

pies: Subcategoria[];

maquillaje: Subcategoria[];

podologia: Subcategoria[];

masajes: Subcategoria[];

manicureninas: Subcategoria[];

baber: Subcategoria[];

extras: Subcategoria[];

cabello: Subcategoria[];

reservaPage: any;

ubicacionPage: any;

introPage: any;

perfilPage: any;

book: number=0;

precio: number=0

pedido = new Array();

muestradescripcion:boolean=true

public cate;

  constructor(public alertCtrl: AlertController,public storage: Storage,private _categoria: CategoriasProvider,public navCtrl: NavController,public http: Http, public navParams: NavParams) {


  		this.reservaPage = ReservaPage;

      this.ubicacionPage = UbicacionPage;

      this.cate = navParams.get("categoria");

      console.log('cate...',this.cate.id)


	    this._categoria.getcategorias()
      .subscribe(data => this.categoria = data);


      this._categoria.getsubcategorias(this.cate.id)
      .subscribe(data => 
      this.subcategoria=data);

      this._categoria.getsubcategorias(1)
      .subscribe(data => 
      this.mano = data);

      this._categoria.getsubcategorias(2)
      .subscribe(data => this.pies = data);

      this._categoria.getsubcategorias(3)
      .subscribe(data => this.maquillaje = data);

         this._categoria.getsubcategorias(4)
      .subscribe(data => this.podologia = data);

         this._categoria.getsubcategorias(5)
      .subscribe(data => this.masajes = data);

       this._categoria.getsubcategorias(6)
      .subscribe(data => this.manicureninas = data);

       this._categoria.getsubcategorias(7)
      .subscribe(data => this.baber = data);


       this._categoria.getsubcategorias(8)
      .subscribe(data => this.extras = data);


       this._categoria.getsubcategorias(9)
      .subscribe(data => this.cabello = data);



  
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad VentaPage');


  }

    showAlert(data) {

      console.log(data)

    let alert = this.alertCtrl.create({
      title: data.nombre,
      subTitle: data.descripcion,
      buttons: ['OK']
    });
    alert.present();
  }




  traesubcategorias(data){

console.log(data.id)

  // this._categoria.getsubcategorias(data.id)
  //     .subscribe(data => this.subcategoria = data);

  if (data.id==1){

    this.subcategoria = this.mano
  }

  if (data.id==2){

    this.subcategoria = this.pies
  }

   if (data.id==3){

    this.subcategoria = this.maquillaje
  }

   if (data.id==4){

    this.subcategoria = this.podologia
  }

   if (data.id==5){

    this.subcategoria = this.masajes
  }

    if (data.id==6){

    this.subcategoria = this.manicureninas
  }

   if (data.id==7){

    this.subcategoria = this.baber
  }

  if (data.id==8){

    this.subcategoria = this.extras
  }

   if (data.id==9){

    this.subcategoria = this.cabello
  }

  }

  

  agregacarrito(data){





    console.log('indexof',this.pedido.indexOf(data))

    this.pedido.push(data); 

    console.log('pedido',this.pedido)


    this.precio = this.precio+data.precio
   
    this.book=this.book+1

  

  }

  quitacarrito(data){

      const index: number = this.pedido.indexOf(data);

      if (index !== -1) {
          this.pedido.splice(index, 1);
      }  
       
      this.book=this.book-1

      this.precio = this.precio-data.precio

      console.log('pedido',this.pedido)

  }

  continuar(){

    console.log('avanza',this.pedido)

    


    this.storage.set('pedido', this.pedido)

    this.storage.set('precio', this.precio)




  }


  reset(data){

    console.log('resetando...',this.categoria)




for (let i = 0; i < this.categoria.length; i++) {


 this.categoria[i]['check']=true
         
    }
  


      data.check=false


  }




}







