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
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { HistorialsociaPage } from '../../pages/historialsocia/historialsocia';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { App, IonicPage, NavController, ViewController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RegistroprincipalPage } from '../registroprincipal/registroprincipal';
import { RegistrosociaPage } from '../registrosocia/registrosocia';
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());
export { User };
var LoginprincipalPage = /** @class */ (function () {
    function LoginprincipalPage(nav, alertCtrl, view, _perfil, appCtrl, http, authHttp, storage) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.view = view;
        this._perfil = _perfil;
        this.appCtrl = appCtrl;
        this.http = http;
        this.authHttp = authHttp;
        this.storage = storage;
        this.rootPage = HistorialsociaPage;
        this.logeado = false;
        //@ViewChild(Nav) nav: Nav;
        this.model = new User(null, null);
        this.registroprincipalPage = RegistroprincipalPage;
        this.registrosociaPage = RegistrosociaPage;
    }
    LoginprincipalPage.prototype.ionViewWillEnter = function () {
        console.log('loginprincipal,ionViewWillEnter');
    };
    LoginprincipalPage.prototype.nologin = function () {
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Usuario o contraseña incorrecta',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    LoginprincipalPage.prototype.authenticate = function (username, password) {
        var _this = this;
        console.log('ingresando...');
        var creds = JSON.stringify({ username: username, password: password });
        var jwtHelper = new JwtHelper();
        var options = new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        // sleep time expects milliseconds
        function sleep(time) {
            return new Promise(function (resolve) { return setTimeout(resolve, time); });
        }
        this.http.post('http://104.236.247.3:8000/api-token-auth/', creds, options)
            .subscribe(function (data) {
            console.log('status', data.status);
            _this.storage.set('token', JSON.parse(data["_body"]).token);
            if (data.status == 200) {
                console.log('Redirigiendo...');
                sleep(200).then(function () {
                    // Do something after the sleep!
                    _this.storage.get('token').then(function (val) {
                        if (val) {
                            _this.logeado = true;
                            //this.nav.setRoot(HistorialsociaPage);
                            //this.appCtrl.getRootNav().push(HistorialsociaPage);
                            //this.nav.popToRoot();
                            _this.nav.setRoot(HistorialsociaPage);
                            //this.nav.popToRoot()
                        }
                    });
                });
            }
        }, function (error) {
            _this.nologin();
        });
    };
    LoginprincipalPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    LoginprincipalPage.prototype.tetas = function () {
    };
    LoginprincipalPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-loginprincipal',
            templateUrl: 'loginprincipal.html',
        }),
        __metadata("design:paramtypes", [NavController, AlertController, ViewController, PerfilProvider, App, Http, AuthHttp, Storage])
    ], LoginprincipalPage);
    return LoginprincipalPage;
}());
export { LoginprincipalPage };
//# sourceMappingURL=loginprincipal.js.map