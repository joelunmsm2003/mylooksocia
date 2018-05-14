var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginprincipalPage } from '../../pages/loginprincipal/loginprincipal';
import { RegistrosociaPage } from '../../pages/registrosocia/registrosocia';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.addressElement = null;
        this.address = '';
        console.log('entre mierdaaaaaaaaaaaaaaaaa');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePge');
    };
    HomePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter HomePage');
    };
    HomePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter HomePage');
    };
    HomePage.prototype.iradetalle = function (data) {
        this.navCtrl.push(RegistrosociaPage, {
            servicio: data.id,
        });
    };
    HomePage.prototype.irlogin = function () {
        this.navCtrl.push(LoginprincipalPage, {
            servicio: '9',
        });
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], HomePage.prototype, "mapElement", void 0);
    __decorate([
        ViewChild('searchbar', { read: ElementRef }),
        __metadata("design:type", ElementRef)
    ], HomePage.prototype, "searchbar", void 0);
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map