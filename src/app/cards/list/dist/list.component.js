"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListComponent = void 0;
var core_1 = require("@angular/core");
var ListComponent = /** @class */ (function () {
    function ListComponent(detailService) {
        this.detailService = detailService;
        this.listCardFilter = { name: '' };
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getCards();
    };
    ListComponent.prototype.ngOnDestroy = function () {
        this.getCards();
    };
    ListComponent.prototype.getCards = function () {
        var _this = this;
        this.detailService.getCards().subscribe(function (data) {
            _this.listCard = data.cards;
            console.log("Pokémons Array: ", data.cards);
        }, function (error) {
            _this.error = error;
            console.error("Errors: ", error);
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.scss']
        })
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
