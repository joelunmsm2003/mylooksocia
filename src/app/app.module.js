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
import { ReservaPage } from '../pages/reserva/reserva';
import { VentaPage } from '../pages/venta/venta';
import { IntroPage } from '../pages/intro/intro';
import { AlertaPage } from '../pages/alerta/alerta';
import { CalificacionPage } from '../pages/calificacion/calificacion';
import { BalancePage } from '../pages/balance/balance';
import { UbicacionPage } from '../pages/ubicacion/ubicacion';
import { LoginPage } from '../pages/login/login';
import { ServicioPage } from '../pages/servicio/servicio';
import { TabsPage } from '../pages/tabs/tabs';
import { RegistroPage } from '../pages/registro/registro';
import { DetalleservicioPage } from '../pages/detalleservicio/detalleservicio';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { InicioPage } from '../pages/inicio/inicio';
import { RegistrosociaPage } from '../pages/registrosocia/registrosocia';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PerfilPage } from '../pages/perfil/perfil';
import { HistorialPage } from '../pages/historial/historial';
import { HistorialsociaPage } from '../pages/historialsocia/historialsocia';
import { RegistroprincipalPage } from '../pages/registroprincipal/registroprincipal';
import { LoginprincipalPage } from '../pages/loginprincipal/loginprincipal';
import { SplashPage } from '../pages/splash/splash';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriasComponent } from '../components/categorias/categorias';
import { MytabsComponent } from '../components/mytabs/mytabs';
import { MytabsnologinComponent } from '../components/mytabsnologin/mytabsnologin';
import { MytabssociaComponent } from '../components/mytabssocia/mytabssocia';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMaps } from '@ionic-native/google-maps';
import { CategoriasProvider } from '../providers/categorias/categorias';
import { MapProvider } from '../providers/map/map';
import { SpinnerProvider } from '../providers/spinner/spinner';
import { ServiciosProvider } from '../providers/servicios/servicios';
import { PerfilProvider } from '../providers/perfil/perfil';
import { OneSignal } from '@ionic-native/onesignal';
import { ServicioProvider } from '../providers/servicio/servicio';
import { NotificacionProvider } from '../providers/notificacion/notificacion';
import { Device } from '@ionic-native/device';
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
                DetalleservicioPage,
                ReservaPage,
                VentaPage,
                IntroPage,
                HistorialPage,
                RegistrosociaPage,
                LoginprincipalPage,
                CalificacionPage,
                LoginPage,
                ServicioPage,
                PerfilPage,
                RegistroprincipalPage,
                AlertaPage,
                BalancePage,
                TabsPage,
                AyudaPage,
                SplashPage,
                HistorialsociaPage,
                UbicacionPage,
                InicioPage,
                RegistroPage,
                CategoriasComponent,
                MytabsComponent,
                MytabssociaComponent,
                MytabsnologinComponent
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
                ReservaPage,
                VentaPage,
                AlertaPage,
                DetalleservicioPage,
                HistorialPage,
                LoginPage,
                UbicacionPage,
                IntroPage,
                ServicioPage,
                LoginprincipalPage,
                RegistroprincipalPage,
                CalificacionPage,
                BalancePage,
                SplashPage,
                RegistroPage,
                TabsPage,
                InicioPage,
                PerfilPage,
                RegistrosociaPage,
                HistorialsociaPage,
                AyudaPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                GoogleMaps,
                Geolocation,
                SocialSharing,
                OneSignal,
                Device,
                {
                    provide: AuthHttp,
                    useFactory: getAuthHttp,
                    deps: [Http]
                },
                CategoriasProvider,
                MapProvider,
                SpinnerProvider,
                ServiciosProvider,
                PerfilProvider,
                ServicioProvider,
                NotificacionProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map