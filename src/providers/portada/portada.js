var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
var PortadaProvider = /** @class */ (function () {
    function PortadaProvider(_http) {
        this._http = _http;
        console.log('Hello PortadaProvider Provider');
    }
    PortadaProvider.prototype.getfotosdeportada = function () {
        return this._http.get('http://codigito.com:8000/portadaphoto')
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('uuuuu', JSON.stringify(data)); });
    };
    PortadaProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], PortadaProvider);
    return PortadaProvider;
}());
export { PortadaProvider };
//# sourceMappingURL=portada.js.map