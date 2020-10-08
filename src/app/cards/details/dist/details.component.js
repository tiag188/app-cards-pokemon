"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailsComponent = void 0;
var core_1 = require("@angular/core");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_location, _route, _detailService, _spinner) {
        this._location = _location;
        this._route = _route;
        this._detailService = _detailService;
        this._spinner = _spinner;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this.getCard(params.get('id'));
        });
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        this.getCard(this.id);
    };
    DetailsComponent.prototype.backPage = function () {
        this._location.back();
    };
    //get card pokemon by id
    DetailsComponent.prototype.getCard = function (id) {
        var _this = this;
        this._spinner.show();
        this.id = id;
        this._detailService.getCard(id).subscribe(function (data) {
            _this.card = data.card;
            _this.imageUrlHi = data.card.imageUrlHiRes;
            _this.imageUrl = data.card.imageUrl;
            _this.name = data.card.name;
            _this.type = data.card.types;
            _this.attacks = data.card.attacks;
            _this.resistance = data.card.resistances;
            _this.weakness = data.card.weaknesses;
            _this._spinner.hide();
        }, function (error) {
            _this.error = error;
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.scss']
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
