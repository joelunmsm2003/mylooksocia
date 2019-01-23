import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule,NavController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ReservaPage } from '../pages/reserva/reserva';
import { VentaPage } from '../pages/venta/venta';
import { CallNumber } from '@ionic-native/call-number';
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
import { FelicidadesPage } from '../pages/felicidades/felicidades';
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
import { Http, RequestOptions, HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';
import {IonicStorageModule} from '@ionic/storage';
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


let storage = new Storage({});

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('token').then((token: string) => token)),
  }), http);
}


@NgModule({
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
    FelicidadesPage,
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
    FelicidadesPage,
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
    CallNumber,
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
export class AppModule {}
