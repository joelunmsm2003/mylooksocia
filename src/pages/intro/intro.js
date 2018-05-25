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
import { IonicPage, NavController, NavParams, Platform, Nav, MenuController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { Storage } from '@ionic/storage';
import { VentaPage } from '../venta/venta';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { PerfilPage } from '../perfil/perfil';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ServicioPage } from '../../pages/servicio/servicio';
import { HistorialPage } from '../historial/historial';
import { HistorialsociaPage } from '../historialsocia/historialsocia';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AyudaPage } from '../ayuda/ayuda';
import { InicioPage } from '../inicio/inicio';
import { LoginprincipalPage } from '../loginprincipal/loginprincipal';
import { BalancePage } from '../balance/balance';
import { CalificacionPage } from '../calificacion/calificacion';
import { AuthHttp } from 'angular2-jwt';
var IntroPage = /** @class */ (function () {
    function IntroPage(menuCtrl, authHttp, platform, modalCtrl, socialSharing, storage, _perfil, _categoria, navCtrl, navParams) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.authHttp = authHttp;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.storage = storage;
        this._perfil = _perfil;
        this._categoria = _categoria;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.host = 'http://104.236.247.3:8000/';
        this.logeado = false;
        this._categoria.getcategorias()
            .subscribe(function (data) { return _this.categoria = data; });
        this.perfilPage = PerfilPage;
        this.introPage = IntroPage_1;
        this.inicioPage = InicioPage;
        this.servicioPage = ServicioPage;
        this.calificacionPage = CalificacionPage;
        this.historialPage = HistorialPage;
        this.historialsociaPage = HistorialsociaPage;
        this.loginPage = LoginPage;
        this.loginprincipalPage = LoginprincipalPage;
        this.ventaPage = VentaPage;
        this.ayudaPage = AyudaPage;
        this.xxxPage = HomePage;
        this.balancePage = BalancePage;
        this.storage.get('token').then(function (val) {
            if (val) {
                _this.xxxPage = HistorialsociaPage;
            }
        });
    }
    IntroPage_1 = IntroPage;
    IntroPage.prototype.loginModal = function () {
        var profileModal = this.modalCtrl.create(LoginprincipalPage, { userId: 8675309 });
        profileModal.present();
    };
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('intro page-intro....', 'ionViewDidLoad');
    };
    IntroPage.prototype.ionViewDidEnter = function () {
        console.log('intro page-intro....', 'ionViewDidEnter');
    };
    IntroPage.prototype.ionViewWillEnter = function () {
        console.log('Intro ionViewWillEnter');
        // this.storage.get('grupo').then((val) => {
        //                        console.log('Historiamskksls',val)
        //                        if(val=='Socia'){
        //                          this.navCtrl.push(HistorialsociaPage);
        //                        }
        //                      });
    };
    IntroPage.prototype.iraventas = function (data) {
        this.navCtrl.push(VentaPage, {
            categoria: data,
        });
    };
    IntroPage.prototype.tetas = function () {
        console.log('tetas');
    };
    IntroPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    IntroPage.prototype.salir = function () {
        console.log('saliendo..');
        // this.storage.remove('token')
        //this.navCtrl.push(IntroPage);
        this.platform.exitApp();
    };
    IntroPage.prototype.shareSheetShare = function () {
        this.socialSharing.share("Registrate", "Atreveteeetee sal del closeet", "https://st2.depositphotos.com/5328332/12205/v/950/depositphotos_122057578-stock-illustration-express-delivery-of-fashion-and.jpg", "https://play.google.com/store/apps/details?id=io.codigito.mylookexpress&hl=es").then(function () {
            console.log("shareSheetShare: Success");
        }).catch(function () {
            console.error("shareSheetShare: failed");
        });
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], IntroPage.prototype, "nav", void 0);
    IntroPage = IntroPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-intro',
            templateUrl: 'intro.html',
            providers: [CategoriasProvider]
        }),
        __metadata("design:paramtypes", [MenuController, AuthHttp, Platform, ModalController, SocialSharing, Storage, PerfilProvider, CategoriasProvider, NavController, NavParams])
    ], IntroPage);
    return IntroPage;
    var IntroPage_1;
}());
export { IntroPage };
//# sourceMappingURL=intro.js.map