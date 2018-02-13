var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ReservaPage } from '../pages/reserva/reserva';
import { VentaPage } from '../pages/venta/venta';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginComponent } from '../components/login/login';
import { SliderComponent } from '../components/slider/slider';
import { CategoriasComponent } from '../components/categorias/categorias';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMaps } from '@ionic-native/google-maps';
import { CategoriasProvider } from '../providers/categorias/categorias';
import { PortadaProvider } from '../providers/portada/portada';
var storage = new Storage({});
export function getAuthHttp(http) {
    return new AuthHttp(new AuthConfig({
        headerPrefix: 'Bearer',
        noJwtError: true,
        globalHeaders: [{ 'Accept': 'application/json' }],
        tokenGetter: (function () { return storage.get('token').then(function (token) { return token; }); }),
    }), http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                ListPage,
                ReservaPage,
                VentaPage,
                LoginComponent,
                SliderComponent,
                CategoriasComponent
            ],
            imports: [
                BrowserModule,
                HttpModule,
                HttpClientModule,
                IonicModule.forRoot(MyApp),
                IonicStorageModule.forRoot()
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                ListPage,
                ReservaPage,
                VentaPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                GoogleMaps,
                {
                    provide: AuthHttp,
                    useFactory: getAuthHttp,
                    deps: [Http]
                },
                CategoriasProvider,
                PortadaProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map