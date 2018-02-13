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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { CategoriasProvider } from '../../providers/categorias/categorias';
/**
 * Generated class for the VentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VentaPage = /** @class */ (function () {
    function VentaPage(_categoria, navCtrl, http, navParams) {
        var _this = this;
        this._categoria = _categoria;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.myVar = true;
        this._categoria.getcategorias()
            .subscribe(function (data) { return _this.categoria = data; });
    }
    VentaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VentaPage');
    };
    VentaPage.prototype.traesubcategorias = function (data) {
        var _this = this;
        console.log(data.id);
        this._categoria.getsubcategorias(data.id)
            .subscribe(function (data) { return _this.subcategoria = data; });
    };
    VentaPage.prototype.agrega = function (data) {
        console.log(data);
    };
    VentaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-venta',
            templateUrl: 'venta.html',
            providers: [CategoriasProvider]
        }),
        __metadata("design:paramtypes", [CategoriasProvider, NavController, Http, NavParams])
    ], VentaPage);
    return VentaPage;
}());
export { VentaPage };
//# sourceMappingURL=venta.js.map