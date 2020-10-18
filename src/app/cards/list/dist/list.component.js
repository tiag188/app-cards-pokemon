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
var package_json_1 = require("../../../../package.json");
var ListComponent = /** @class */ (function () {
    function ListComponent(_router, _listService, _spinner) {
        this._router = _router;
        this._listService = _listService;
        this._spinner = _spinner;
        this.version = package_json_1.version;
        this.listCardFilter = { name: '' };
        this.version = "10.1.4";
        this._spinner.show();
        this.getCards();
    }
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent.prototype.ngOnDestroy = function () {
        this.getCards();
        this._spinner;
    };
    ListComponent.prototype.getCards = function () {
        var _this = this;
        this._listService.getCards().subscribe(function (data) {
            _this.listCard = data.cards;
            _this._spinner.hide();
        }, function (error) {
            _this.error = error;
        });
    };
    ListComponent.prototype.gotoCardDetails = function (url, id) {
        this._router.navigate([url, id]).then(function (e) {
            if (e) {
                console.log("Navigation is successful!" + e);
            }
            else {
                console.log("Navigation has failed!" + e);
            }
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
