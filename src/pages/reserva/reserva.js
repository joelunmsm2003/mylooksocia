var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ModalController, App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';
import { Storage } from '@ionic/storage';
import { AuthHttp } from 'angular2-jwt';
import { ServicioPage } from '../servicio/servicio';
import { GoogleMaps } from '@ionic-native/google-maps';
/**
 * Generated class for the ReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservaPage = /** @class */ (function () {
    function ReservaPage(modalCtrl, appCtrl, authHttp, storage, http, navCtrl, navParams, googleMaps) {
        this.modalCtrl = modalCtrl;
        this.appCtrl = appCtrl;
        this.authHttp = authHttp;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.rootPage = HomePage;
        this.API_URL = 'http://138.68.230.137:8000';
    }
    ReservaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('pedido').then(function (val) {
            _this.pedidos = val;
        });
        this.storage.get('ubicacion').then(function (val) {
            _this.ubicacion = val;
        });
        this.storage.get('precio').then(function (val) {
            _this.precio = val;
        });
        this.storage.get('dia').then(function (val) {
            _this.dia = val;
        });
        this.storage.get('hora').then(function (val) {
            _this.hora = val;
        });
        this.storage.get('referencia').then(function (val) {
            _this.referencia = val;
        });
    };
    ReservaPage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create(RegistroPage, { userId: 8675309 });
        profileModal.present();
    };
    ReservaPage.prototype.quitacarrito = function (data) {
        console.log('jsjs', data);
        var index = this.pedidos.indexOf(data);
        if (index !== -1) {
            console.log('isisi', this.pedidos[index]);
            this.precio = this.precio - this.pedidos[index].precio;
            this.pedidos.splice(index, 1);
        }
    };
    ReservaPage.prototype.confirma = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            console.log('token', val);
            if (val == null) {
                console.log('nullll');
                _this.presentProfileModal();
            }
            else {
                var myHeader = new Headers();
                myHeader.append('Content-Type', 'application/json');
                _this.data = {
                    'pedido': _this.pedidos,
                    'ubicacion': _this.ubicacion,
                    'dia': _this.dia,
                    'hora': _this.hora,
                    'referencia': _this.referencia
                };
                _this.authHttp.post(_this.API_URL + '/buscasocia/1', _this.data)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.appCtrl.getRootNav().push(ServicioPage);
                });
            }
        });
    };
    ReservaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-reserva',
            templateUrl: 'reserva.html',
        }),
        __metadata("design:paramtypes", [ModalController, App, AuthHttp, Storage, Http, NavController, NavParams, GoogleMaps])
    ], ReservaPage);
    return ReservaPage;
}());
export { ReservaPage };
//# sourceMappingURL=reserva.js.map