var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { SidebarComponent } from './sidebar/sidebar';
import { HttpModule } from '@angular/http';
import { SliderComponent } from './slider/slider';
import { CategoriasComponent } from './categorias/categorias';
import { ReservaComponent } from './reserva/reserva';
import { SociaComponent } from './socia/socia';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        NgModule({
            declarations: [
                LoginComponent,
                SidebarComponent,
                SliderComponent,
                CategoriasComponent,
                ReservaComponent,
                SociaComponent,
            ],
            imports: [HttpModule],
            exports: [,
                LoginComponent,
                SidebarComponent,
                SliderComponent,
                CategoriasComponent,
                ReservaComponent,
                SociaComponent,
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map