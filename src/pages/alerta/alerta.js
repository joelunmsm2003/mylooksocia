var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthHttp } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
import { SpinnerProvider } from '../../providers/spinner/spinner';
import { MapProvider } from '../../providers/map/map';
import { ReservaPage } from '../reserva/reserva';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { RequestOptions, Headers } from '@angular/http';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { HistorialsociaPage } from '../../pages/historialsocia/historialsocia';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertaPage = /** @class */ (function () {
    function AlertaPage(authHttp, _servicio, storage, navCtrl, geolocation, zone, platform, localStorage, mapService, spinner, viewCtrl, navParams, _perfil) {
        this.authHttp = authHttp;
        this._servicio = _servicio;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.zone = zone;
        this.platform = platform;
        this.localStorage = localStorage;
        this.mapService = mapService;
        this.spinner = spinner;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this._perfil = _perfil;
        this.address = '';
        this.host = 'http://104.236.247.3:8000';
        this.reservaPage = ReservaPage;
        //this.platform.ready().then(() => this.loadMap());
    }
    AlertaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MapPage');
        this.ubicacion = 'jsjsjsj';
        this._perfil.miperfil()
            .subscribe(function (data) {
            _this.codigo_user = data[0]['id'];
        });
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            console.log('detalllllle', data);
            _this.ped = data[0]['pedidos'];
            _this.codigo = data[0]['id'];
            _this.photo_cliente = data[0]['cliente__photo'];
            _this.socia_id = data[0]['socia_id'];
            _this.nombre_cliente = data[0]['cliente__nombre'];
            _this.fecha = data[0]['fecha'];
            _this.fecha_inicio = data[0]['fecha_inicio'];
            _this.cliente__photo_facebook = data[0]['cliente__photo_facebook'];
            _this.reference = data[0]['referencia'];
            _this.estado_nombre = data[0]['estado__nombre'];
            // create a new map by passing HTMLElement
            var mapEle = document.getElementById('map');
            // create LatLng object
            var myLatLng = { lat: parseFloat(data[0]['latitud']), lng: parseFloat(data[0]['longitud']) };
            // create map
            _this.map = new google.maps.Map(mapEle, {
                center: myLatLng,
                zoom: 17
            });
            google.maps.event.addListenerOnce(_this.map, 'idle', function () {
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    title: 'Hello World!'
                });
                mapEle.classList.add('show-map');
            });
            if (_this.codigo_user != _this.socia_id) {
                _this.navCtrl.push(HistorialsociaPage, {
                    servicio: '9',
                });
            }
        });
    };
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
    AlertaPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AlertaPage.prototype.errorAlert = function (title, message) {
        alert('Error in Alert');
    };
    AlertaPage.prototype.reserva = function (dia, hora, ubicacion) {
        console.log('hhddh', dia, hora);
        this.storage.set('dia', dia);
        this.storage.set('hora', hora);
        this.storage.set('ubicacion', ubicacion);
    };
    AlertaPage.prototype.enviaracliente = function (data) {
        var _this = this;
        var creds = JSON.stringify(data);
        var options = new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        this.authHttp.post('http://104.236.247.3:8000/aceptarservicio/', creds, options)
            .subscribe(function (data) {
            console.log(data);
            _this.navCtrl.popToRoot();
        });
    };
    AlertaPage.prototype.cancelasocia = function (data) {
        var _this = this;
        var creds = JSON.stringify(data);
        var options = new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        this.authHttp.post('http://104.236.247.3:8000/cancelaserviciosocia', creds, options)
            .subscribe(function (data) {
            _this.navCtrl.popToRoot();
            // this._servicio.detalleservicio(this.navParams.get("servicio"))
            //       .subscribe(data => {
            //       this.estado_nombre =data[0]['estado__nombre']
            //       });
        });
    };
    AlertaPage.prototype.aceptar = function () {
        var _this = this;
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            return _this.enviaracliente(data);
        });
    };
    AlertaPage.prototype.cancelar = function () {
        var _this = this;
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            return _this.cancelasocia(data);
        });
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], AlertaPage.prototype, "mapElement", void 0);
    AlertaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-alerta',
            templateUrl: 'alerta.html',
        }),
        __metadata("design:paramtypes", [AuthHttp, ServiciosProvider, Storage, NavController,
            Geolocation,
            NgZone,
            Platform,
            Storage,
            MapProvider,
            SpinnerProvider,
            ViewController,
            NavParams,
            PerfilProvider])
    ], AlertaPage);
    return AlertaPage;
}());
export { AlertaPage };
//# sourceMappingURL=alerta.js.map