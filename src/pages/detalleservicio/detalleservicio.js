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
/**
 * Generated class for the DetalleservicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleservicioPage = /** @class */ (function () {
    function DetalleservicioPage(_servicio, navCtrl, navParams) {
        this._servicio = _servicio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.host = 'http://104.236.247.3:8000';
        this.serv = navParams.get("servicio");
        console.log('sericmsmss...', this.serv);
    }
    DetalleservicioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DetalleservicioPage');
        console.log('llslslsl', this.navParams.get("servicio"));
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            console.log('detalle servicio...', data);
            _this.ped = data[0]['pedidos'];
            _this.socia__photo = data[0]['socia__photo'];
            _this.fecha = data[0]['fecha'];
            _this.fecha_inicio = data[0]['fecha_inicio'];
            _this.reference = data[0]['referencia'];
            _this.cliente__photo_facebook = data[0]['cliente__photo_facebook'];
            _this.cliente__photo = data[0]['cliente__photo'];
        });
    };
    DetalleservicioPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-detalleservicio',
            templateUrl: 'detalleservicio.html',
        }),
        __metadata("design:paramtypes", [ServiciosProvider, NavController, NavParams])
    ], DetalleservicioPage);
    return DetalleservicioPage;
}());
export { DetalleservicioPage };
//# sourceMappingURL=detalleservicio.js.map