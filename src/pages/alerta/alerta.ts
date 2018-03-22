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
  @ViewChild('searchbar', { read: ElementRef }) searchbar: ElementRef;
  addressElement: HTMLInputElement = null;

  map: any;
  address = '';
  reservaPage: any;
  ubicacion:any;

  host='http://104.236.247.3:8000'


  ped:any;
  photo_cliente:any;

  latitud:any;
  longitud:any;
  nombre_cliente:any;
  pedidos:any;
  serv:any;
  fecha:any;
  fecha_inicio:any;

  constructor(private authHttp: AuthHttp,public _servicio:ServiciosProvider,public storage: Storage,public navCtrl: NavController,
    public geolocation: Geolocation,
    public zone: NgZone,
    public platform: Platform,
    public localStorage: Storage,
    public mapService: MapProvider,
    public spinner: SpinnerProvider,
    public viewCtrl: ViewController,
    public navParams: NavParams) {

      this.reservaPage = ReservaPage;

      this.platform.ready().then(() => this.loadMaps());

     
      


  }


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');

    this.ubicacion='jsjsjsj'
  }

  loadMaps() {
    if (!!google) {
      this.initializeMap();
      this.initAutocomplete();
    } else {
      this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.')
    }

          console.log('servicio..',this.navParams.get("servicio"))

         this._servicio.detalleservicio(this.navParams.get("servicio"))
      		.subscribe(data => 

      		//this.servicio=data

      		this.iraLocation(data[0]['latitud'],data[0]['longitud'])

      		//console.log('ser...',data[0])
      	
      		);



      		 this._servicio.detalleservicio(this.navParams.get("servicio"))
      		.subscribe(data => {


                this.ped=data[0]['pedidos']

     

          this.photo_cliente=data[0]['cliente__photo']

          

          this.nombre_cliente=data[0]['cliente__nombre']
          this.fecha =data[0]['fecha']
          this.fecha_inicio = data[0]['fecha_inicio']


          }

      	
      		
      		);


 


      
  }

  initializeMap() {
    let that = this;

 

    //that.currentLocation();
    this.zone.run(() => {
      var mapEle = this.mapElement.nativeElement;
      this.map = new google.maps.Map(mapEle, {
        zoom: 16,
        center: { lat: 12, lng: -12 },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
        disableDoubleClickZoom: false,
        disableDefaultUI: true,
        zoomControl: false,
        scaleControl: true,
      });


        // Map drag started
        this.map.addListener('dragstart', function() {
          console.log('Drag start');
        });
        // Map dragging
        this.map.addListener('drag', function() {
          that.address = 'Searching...';
        });
        //Reload markers every time the map moves
        this.map.addListener('dragend', function() {
          let map_center = that.getMapCenter();
          let latLngObj = {'lat': map_center.lat(), 'long': map_center.lng() };

      

          that.ubicacion=latLngObj

     
          
          //that.getAddress(latLngObj);
        });

      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        google.maps.event.trigger(this.map, 'resize');
        mapEle.classList.add('show-map');
      });

      google.maps.event.addListener(this.map, 'bounds_changed', () => {
        this.zone.run(() => {
          this.resizeMap();
        });
      });


    });
  }

  initAutocomplete(): void {

    this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
    this.createAutocomplete(this.addressElement).subscribe((location) => {
      console.log('Searchdata', location);
      let latLngObj = {'lat': location.lat(), 'long': location.lng()};
      //this.getAddress(latLngObj);

      
      let options = {
        center: location,
        zoom: 16
      };
      this.map.setOptions(options);
    });
  }

  currentLocation() {
    this.spinner.load();
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let latLngObj = {'lat': position.coords.latitude, 'long': position.coords.longitude};
      // Display  Marker
      this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
      //alert(latLngObj)
      //this.storage.set('ubicacion', latLngObj)

      //this.getAddress(latLngObj);
      this.spinner.dismiss();
      localStorage.setItem('current_latlong', JSON.stringify(latLngObj));
      return latLngObj;

    }, (err) => {
      console.log(err);
    });
  }

   iraLocation(lat,long) {
    this.spinner.load();

      console.log('ubicando...',lat,long)

      let latLng = lat;
      let latLngObj = long;
      // Display  Marker
      this.map.setCenter(new google.maps.LatLng(latLng, latLngObj));
      //alert(latLngObj)
      //this.storage.set('ubicacion', latLngObj)

      //this.getAddress(latLngObj);
      this.spinner.dismiss();
      localStorage.setItem('current_latlong', JSON.stringify(latLngObj));
      return latLngObj;


  }

  getAddress(latLngObj) {
    // Get the address object based on latLngObj
    this.mapService.getStreetAddress(latLngObj).subscribe(
      s_address => {
        if (s_address.status == "ZERO_RESULTS") {
          this.mapService.getAddress(latLngObj).subscribe(
            address => {
              this.address = address.results[0].formatted_address;
              this.getAddressComponentByPlace(address.results[0], latLngObj);
            },
            err => console.log("Error in getting the street address " + err)
          )
        } else {
          this.address = s_address.results[0].formatted_address;
          this.getAddressComponentByPlace(s_address.results[0], latLngObj);
          //alert(latLngObj)
          //this.storage.set('ubicacion', latLngObj)
          //alert(this.address);
        }
      },
      err => {
        //alert('No Address found ' + err);
      }
    );
  }

  getMapCenter(){
    return this.map.getCenter()
  }

  createAutocomplete(addressEl: HTMLInputElement): Observable<any> {
    const autocomplete = new google.maps.places.Autocomplete(addressEl);
    autocomplete.bindTo('bounds', this.map);
    return new Observable((sub: any) => {
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          sub.error({
            message: 'Autocomplete returned place with no geometry'
          });
        } else {
          let latLngObj = {'lat': place.geometry.location.lat(), 'long': place.geometry.location.lng()}
          //this.getAddress(latLngObj);
          sub.next(place.geometry.location);
        }
      });
    });
  }

  getAddressComponentByPlace(place, latLngObj) {
    var components;

    components = {};

    for(var i = 0; i < place.address_components.length; i++){
      let ac = place.address_components[i];
      components[ac.types[0]] = ac.long_name;
    }

    let addressObj = {
      street: (components.street_number) ? components.street_number : 'not found',
      area: components.route,
      city: (components.sublocality_level_1) ? components.sublocality_level_1 : components.locality,
      country: (components.administrative_area_level_1) ? components.administrative_area_level_1 : components.political,
      postCode: components.postal_code,
      loc: [latLngObj.long, latLngObj.lat],
      address: this.address
    }
    localStorage.clear();
    localStorage.setItem('carryr_customer', JSON.stringify(addressObj));
    return components;
  }

  resizeMap() {
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 200);
  }

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


   enviaracliente(data){

  	let creds = JSON.stringify(data);

      let options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
      });




          this.authHttp.post('http://104.236.247.3:8000/aceptarservicio/',creds,options)
      .subscribe(

      data => {

            console.log(data)

       }

      );
  }

  aceptar(){


      		this._servicio.detalleservicio(this.navParams.get("servicio"))
      		.subscribe(data => 

      		this.enviaracliente(data)

     
      		);



  }

 



}

