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
import { PortadaProvider } from '../../providers/portada/portada';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the CategoriasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CategoriasComponent = /** @class */ (function () {
    function CategoriasComponent(_photo) {
        var _this = this;
        this._photo = _photo;
        this.host = 'http://104.236.247.3:8000/';
        this._photo.getfotosdeportada()
            .subscribe(function (data) {
            _this.photo1 = data[0].photo;
            _this.photo2 = data[1].photo;
            _this.photo3 = data[2].photo;
            _this.photo4 = data[3].photo;
        });
    }
    // ngAfterViewInit() {
    //   this.slides.autoplay = true;
    // }
    CategoriasComponent.prototype.ionViewDidLoad = function () {
        //setTimeout(()=>this.slides.startAutoplay())
    };
    __decorate([
        ViewChild(Slides),
        __metadata("design:type", Slides)
    ], CategoriasComponent.prototype, "slides", void 0);
    CategoriasComponent = __decorate([
        Component({
            selector: 'categoriaspue',
            templateUrl: 'categorias.html',
            providers: [PortadaProvider]
        }),
        __metadata("design:paramtypes", [PortadaProvider])
    ], CategoriasComponent);
    return CategoriasComponent;
}());
export { CategoriasComponent };
//# sourceMappingURL=categorias.js.map