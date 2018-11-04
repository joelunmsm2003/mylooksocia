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
import { App, IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { Http, RequestOptions, Headers } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { ReservaPage } from '../reserva/reserva';
import { UbicacionPage } from '../ubicacion/ubicacion';
import { Storage } from '@ionic/storage';
import { AuthHttp } from 'angular2-jwt';
/**
 * Generated class for the VentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VentaPage = /** @class */ (function () {
    function VentaPage(authHttp, toastCtrl, appCtrl, formBuilder, alertCtrl, storage, _categoria, navCtrl, http, navParams) {
        var _this = this;
        this.authHttp = authHttp;
        this.toastCtrl = toastCtrl;
        this.appCtrl = appCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this._categoria = _categoria;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.myVar = true;
        this.host = 'http://138.68.230.137:8000/';
        this.book = 0;
        this.precio = 0;
        this.pedido = new Array();
        this.muestradescripcion = true;
        this.user = {};
        this.storage.get('token').then(function (val) {
            console.log('...TOKEN...', val);
        });
        this.togglecategoria = false;
        this.host = 'http://estokealo.com:8000';
        this.reservaPage = ReservaPage;
        this.ubicacionPage = UbicacionPage;
        this.cate = this.navParams.get("categoria");
        console.log('cate...', this.cate);
        this._categoria.getcategorias()
            .subscribe(function (data) { return _this.categoria = data; });
        this._categoria.getsubcategorias(this.cate.id)
            .subscribe(function (data) {
            return _this.subcategoria = data;
        });
        this._categoria.getsubcategorias(1)
            .subscribe(function (data) {
            return _this.mano = data;
        });
        this._categoria.getsubcategorias(2)
            .subscribe(function (data) { return _this.pies = data; });
        this._categoria.getsubcategorias(3)
            .subscribe(function (data) { return _this.maquillaje = data; });
        this._categoria.getsubcategorias(4)
            .subscribe(function (data) { return _this.podologia = data; });
        this._categoria.getsubcategorias(5)
            .subscribe(function (data) { return _this.masajes = data; });
        this._categoria.getsubcategorias(6)
            .subscribe(function (data) { return _this.manicureninas = data; });
        this._categoria.getsubcategorias(7)
            .subscribe(function (data) { return _this.baber = data; });
        this._categoria.getsubcategorias(8)
            .subscribe(function (data) { return _this.extras = data; });
        this._categoria.getsubcategorias(9)
            .subscribe(function (data) { return _this.cabello = data; });
        this.todo = this.formBuilder.group({
            experiencia: [''],
            comentario: [''],
            referencia: ['']
        });
    }
    VentaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VentaPage');
    };
    VentaPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'User was added successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    VentaPage.prototype.showAlert = function (data) {
        console.log(data);
        var alert = this.alertCtrl.create({
            title: data.nombre,
            subTitle: data.descripcion,
            buttons: ['OK']
        });
        alert.present();
    };
    VentaPage.prototype.traesubcategorias = function (data) {
        console.log(data.id);
        // this._categoria.getsubcategorias(data.id)
        //     .subscribe(data => this.subcategoria = data);
        if (data.id == 1) {
            this.subcategoria = this.mano;
        }
        if (data.id == 2) {
            this.subcategoria = this.pies;
        }
        if (data.id == 3) {
            this.subcategoria = this.maquillaje;
        }
        if (data.id == 4) {
            this.subcategoria = this.podologia;
        }
        if (data.id == 5) {
            this.subcategoria = this.masajes;
        }
        if (data.id == 6) {
            this.subcategoria = this.manicureninas;
        }
        if (data.id == 7) {
            this.subcategoria = this.baber;
        }
        if (data.id == 8) {
            this.subcategoria = this.extras;
        }
        if (data.id == 9) {
            this.subcategoria = this.cabello;
        }
    };
    VentaPage.prototype.agregacarrito = function (data) {
        console.log('indexof', this.pedido.indexOf(data));
        this.pedido.push(data);
        console.log('pedido', this.pedido);
        this.precio = this.precio + data.precio;
        this.book = this.book + 1;
    };
    VentaPage.prototype.quitacarrito = function (data) {
        var index = this.pedido.indexOf(data);
        if (index !== -1) {
            this.pedido.splice(index, 1);
        }
        this.book = this.book - 1;
        this.precio = this.precio - data.precio;
        console.log('pedido', this.pedido);
    };
    VentaPage.prototype.continuar = function () {
        console.log('avanza', this.pedido);
        this.storage.set('pedido', this.pedido);
        this.storage.set('precio', this.precio);
    };
    //   guardacategoria(data){
    // this.storage.get('token').then((val) => {
    //         console.log(val)
    //          this.presentToast()
    //            if(val==null){
    //                      this.navCtrl.push(RegistrosociaPage, {
    //                         subcategoria: this.subcategoria,
    //                       })
    //            }
    //            else{
    //              this.enviasocia(data)
    //            }
    //       });
    //   }
    VentaPage.prototype.enviasocia = function (data) {
        console.log('detalle..', data);
        var creds = JSON.stringify({ categoria: this.subcategoria, socia: null, detalle: null });
        console.log('uuu', creds);
        var options = new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        this.authHttp.post('http://138.68.230.137:8000/asignasocia/', creds, options)
            .subscribe(function (data) {
        });
    };
    VentaPage.prototype.reset = function (data) {
        console.log('resetando...', this.categoria);
        for (var i = 0; i < this.categoria.length; i++) {
            this.categoria[i]['check'] = true;
        }
        data.check = false;
    };
    VentaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-venta',
            templateUrl: 'venta.html',
            providers: [CategoriasProvider]
        }),
        __metadata("design:paramtypes", [AuthHttp, ToastController, App, FormBuilder, AlertController, Storage, CategoriasProvider, NavController, Http, NavParams])
    ], VentaPage);
    return VentaPage;
}());
export { VentaPage };
//# sourceMappingURL=venta.js.map