import { Component } from '@angular/core';
import { PortadaProvider } from '../../providers/portada/portada';
import { Foto } from '../../providers/portada/foto';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the CategoriasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'categoriaspue',
  templateUrl: 'categorias.html',
  providers:[PortadaProvider]
})
export class CategoriasComponent {

  text: string;

  photo1: string;

  photo2: string;

  photo3: string;


    photo4: string;

  host='http://104.236.247.3:8000/'

   @ViewChild(Slides) slides: Slides;

  // ngAfterViewInit() {
  //   this.slides.autoplay = true;
  // }

  ionViewDidLoad(){


    //setTimeout(()=>this.slides.startAutoplay())

  }



  constructor(private _photo: PortadaProvider) {


  	    this._photo.getfotosdeportada()
      .subscribe(data => {

           this.photo1=data[0].photo;

           this.photo2=data[1].photo;

           this.photo3=data[2].photo

           this.photo4=data[3].photo

      })






  }


  

    	
  
}


