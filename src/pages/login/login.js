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
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { RegistroPage } from '../../pages/registro/registro';
import { HistorialsociaPage } from '../../pages/historialsocia/historialsocia';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { App, IonicPage, Nav, ViewController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());
export { User };
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, view, _perfil, appCtrl, http, authHttp, storage) {
        this.alertCtrl = alertCtrl;
        this.view = view;
        this._perfil = _perfil;
        this.appCtrl = appCtrl;
        this.http = http;
        this.authHttp = authHttp;
        this.storage = storage;
        this.model = new User(null, null);
        console.log('Login Page....');
        this.registroPage = RegistroPage;
    }
    LoginPage.prototype.ionViewWillEnter = function () {
    };
    LoginPage.prototype.nologin = function () {
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Usuario o contraseña incorrecta',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    LoginPage.prototype.authenticate = function (username, password) {
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
                _this.appCtrl.getRootNav().push(HistorialsociaPage);
            }
            console.log('jwtHelper', JSON.stringify(jwtHelper.decodeToken(JSON.parse(data["_body"]).token)));
        }, function (error) {
            _this.nologin();
        });
    };
    LoginPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], LoginPage.prototype, "nav", void 0);
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [AlertController, ViewController, PerfilProvider, App, Http, AuthHttp, Storage])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map