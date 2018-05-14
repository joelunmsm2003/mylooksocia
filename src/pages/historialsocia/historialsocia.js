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
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { Device } from '@ionic-native/device';
import { AlertaPage } from '../../pages/alerta/alerta';
import { RequestOptions, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
/**
 * Generated class for the HistorialsociaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistorialsociaPage = /** @class */ (function () {
    function HistorialsociaPage(authHttp, device, _servicio, navCtrl, navParams) {
        this.authHttp = authHttp;
        this.device = device;
        this._servicio = _servicio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistorialsociaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad HistorialsociaPage');
        this._servicio.serviciosdesocias()
            .subscribe(function (data) {
            console.log('serv socias', data);
            _this.servicios = data;
        });
        var creds = JSON.stringify({ model: this.device.model, tipo: this.device.version });
        var options = new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        this.authHttp.post('http://104.236.247.3:8000/guardadatosmovil/', creds, options)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    HistorialsociaPage.prototype.iradetalle = function (data) {
        this.navCtrl.push(AlertaPage, {
            servicio: data.id,
        });
    };
    HistorialsociaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-historialsocia',
            templateUrl: 'historialsocia.html',
            providers: [ServiciosProvider]
        }),
        __metadata("design:paramtypes", [AuthHttp, Device, ServiciosProvider, NavController, NavParams])
    ], HistorialsociaPage);
    return HistorialsociaPage;
}());
export { HistorialsociaPage };
//# sourceMappingURL=historialsocia.js.map