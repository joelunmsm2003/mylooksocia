var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { VentaPage } from '../venta/venta';
import { GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, authHttp, googleMaps) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.authHttp = authHttp;
        this.googleMaps = googleMaps;
        this.API_URL = 'http://xiencias.com:3000';
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        //this.nav.push(ListPage);
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802 // default location
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = this.googleMaps.create('map_canvas', mapOptions);
        this.http.get('http://codigito.com:8000/categoria')
            .subscribe(function (data) { });
        // Wait the MAP_READY before using any methods.
        this.map.one(GoogleMapsEvent.MAP_READY)
            .then(function () {
            // Now you can use all methods safely.
            _this.getPosition();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.getPosition = function () {
        var _this = this;
        this.map.getMyLocation()
            .then(function (response) {
            _this.map.moveCamera({
                target: response.latLng
            });
            _this.map.addMarker({
                title: 'My Position',
                icon: 'blue',
                animation: 'DROP',
                position: response.latLng
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.teta = function (data) {
        console.log('000', data);
        this.nav.push(VentaPage);
    };
    HomePage.prototype.securedPing = function (data) {
        var myHeader = new Headers();
        myHeader.append('Content-Type', 'application/json');
        this.authHttp.get(this.API_URL + "/agente/")
            .subscribe(function (data) {
            console.log('user', data);
        });
    };
    __decorate([
        ViewChild('myNav'),
        __metadata("design:type", NavController)
    ], HomePage.prototype, "nav", void 0);
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, Http, AuthHttp, GoogleMaps])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map