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
    function ListComponent(router, route, listService, spinner) {
        this.router = router;
        this.route = route;
        this.listService = listService;
        this.spinner = spinner;
        this.listCardFilter = { name: '' };
    }
    ListComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.getCards();
    };
    ListComponent.prototype.ngOnDestroy = function () {
        this.getCards();
        this.spinner;
    };
    ListComponent.prototype.getCards = function () {
        var _this = this;
        this.listService.getCards().subscribe(function (data) {
            _this.listCard = data.cards;
            _this.spinner.hide();
        }, function (error) {
            _this.error = error;
        });
    };
    ListComponent.prototype.gotoCardDetails = function (url, id) {
        this.router.navigate([url, id]).then(function (e) {
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
