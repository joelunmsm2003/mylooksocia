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
import { App, IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { SpinnerProvider } from '../../providers/spinner/spinner';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { AuthHttp } from 'angular2-jwt';
/**
 * Generated class for the RegistrosociaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrosociaPage = /** @class */ (function () {
    function RegistrosociaPage(authHttp, device, appCtrl, storage, spinner, alertCtrl, http, _categoria, formBuilder, navCtrl, navParams) {
        var _this = this;
        this.authHttp = authHttp;
        this.device = device;
        this.appCtrl = appCtrl;
        this.storage = storage;
        this.spinner = spinner;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this._categoria = _categoria;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.pedido = new Array();
        this.todo = this.formBuilder.group({
            email: ['', Validators.required],
            nombre: [''],
            apellido: [''],
            password: [''],
            telefono: [''],
            direccion: [''],
            referencia: [''],
            cuenta: [''],
            distrito: [''],
            horario: [''],
            experiencia: [''],
            comentario: ['']
        });
        this.subcate = this.navParams.get("subcategoria");
        this._categoria.getcategorias()
            .subscribe(function (data) { return _this.categoria = data; });
        this._categoria.getdistrito()
            .subscribe(function (data) { return _this.distrito = data; });
    }
    RegistrosociaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrosociaPage');
    };
    RegistrosociaPage.prototype.authenticate = function (username, password) {
        var _this = this;
        console.log('ingresando...');
        var creds = JSON.stringify({ username: username, password: password });
        console.log('Ingresando....', creds);
        var options = new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        // sleep time expects milliseconds
        function sleep(time) {
            return new Promise(function (resolve) { return setTimeout(resolve, time); });
        }
        this.http.post('http://104.236.247.3:8000/api-token-auth/', creds, options)
            .subscribe(function (data) {
            console.log('token.....', JSON.parse(data["_body"]).token);
            _this.storage.set('token', JSON.parse(data["_body"]).token);
            var creds = JSON.stringify({ model: _this.device.model, tipo: _this.device.version });
            var options = new RequestOptions({
                headers: new Headers({ 'Content-Type': 'application/json' })
            });
            _this.authHttp.post('http://104.236.247.3:8000/guardadatosmovil/', creds, options)
                .subscribe(function (data) {
                console.log(data);
            });
        }, function (error) {
            _this.nologin();
        });
    };
    RegistrosociaPage.prototype.nologin = function () {
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Usuario o contraseña incorrecta',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    RegistrosociaPage.prototype.agregacarrito = function (data) {
        this.pedido.push(data);
        console.log('pedido', this.pedido);
    };
    RegistrosociaPage.prototype.quitacarrito = function (data) {
        var index = this.pedido.indexOf(data);
        if (index !== -1) {
            this.pedido.splice(index, 1);
        }
    };
    RegistrosociaPage.prototype.enviasocia = function (data) {
        var _this = this;
        this.spinner.load();
        console.log('pedido..', this.pedido);
        var creds = JSON.stringify({ categoria: this.subcate, socia: data, detalle: null, pedido: this.pedido });
        var options = new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        this.http.post('http://104.236.247.3:8000/nuevasocia/', creds, options)
            .subscribe(function (data) {
            console.log('gsgsgsggs', data['_body'].replace('"', '').replace('"', ''));
            _this.email = data['_body'].replace('"', '').replace('"', '');
            if (_this.email == 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'My Look Xpress',
                    subTitle: 'Este correo ya existe, porfavor escoja otro',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.spinner.dismiss();
            }
            else {
                _this.authenticate(_this.email, 'rosa0000');
                var alert_2 = _this.alertCtrl.create({
                    title: 'My Look Xpress',
                    subTitle: 'Recibimos su solicitud de inscripcion en breve nos contactaremos con usted via email o whatsapp para una evaluacion',
                    buttons: ['OK']
                });
                alert_2.present();
                _this.storage.set('registrosocia', true);
                _this.spinner.dismiss();
                _this.navCtrl.popToRoot();
            }
        });
    };
    RegistrosociaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-registrosocia',
            templateUrl: 'registrosocia.html',
            providers: [CategoriasProvider]
        }),
        __metadata("design:paramtypes", [AuthHttp, Device, App, Storage, SpinnerProvider, AlertController, Http, CategoriasProvider, FormBuilder, NavController, NavParams])
    ], RegistrosociaPage);
    return RegistrosociaPage;
}());
export { RegistrosociaPage };
//# sourceMappingURL=registrosocia.js.map