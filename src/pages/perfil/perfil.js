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
import { PerfilProvider } from '../../providers/perfil/perfil';
import { CalificacionPage } from '../../pages/calificacion/calificacion';
import { BalancePage } from '../../pages/balance/balance';
import { Device } from '@ionic-native/device';
import { RequestOptions, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(authHttp, device, navCtrl, _perfil, navParams) {
        var _this = this;
        this.authHttp = authHttp;
        this.device = device;
        this.navCtrl = navCtrl;
        this._perfil = _perfil;
        this.navParams = navParams;
        this.host = 'http://104.236.247.3:8000';
        this._perfil.miperfil()
            .subscribe(function (data) {
            _this.email = data[0]['email'];
            _this.telefono = data[0]['telefono'];
            _this.photo = data[0]['photo'];
            _this.user_grupo = data[0]['user__groups__name'];
            _this.nombre = data[0]['nombre'];
            _this.correo = data[0]['email'];
            _this.telefono = data[0]['telefono'];
        });
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
        var creds = JSON.stringify({ model: this.device.model, tipo: this.device.version });
        var options = new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        this.authHttp.post('http://104.236.247.3:8000/guardadatosmovil/', creds, options)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    PerfilPage.prototype.calificacion = function () {
        this.navCtrl.push(CalificacionPage, {
            categoria: 9,
        });
    };
    PerfilPage.prototype.balance = function () {
        this.navCtrl.push(BalancePage, {
            categoria: 9,
        });
    };
    PerfilPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-perfil',
            templateUrl: 'perfil.html',
        }),
        __metadata("design:paramtypes", [AuthHttp, Device, NavController, PerfilProvider, NavParams])
    ], PerfilPage);
    return PerfilPage;
}());
export { PerfilPage };
//# sourceMappingURL=perfil.js.map