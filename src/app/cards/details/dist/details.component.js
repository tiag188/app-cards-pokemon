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
    function DetailsComponent(route, detailService, spinner) {
        this.route = route;
        this.detailService = detailService;
        this.spinner = spinner;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.route.paramMap.subscribe(function (params) {
            _this.getCard(params.get('id'));
        });
    };
    DetailsComponent.prototype.getCard = function (id) {
        var _this = this;
        this.id = id;
        this.detailService.getCard(id).subscribe(function (data) {
            _this.card = data.card;
            console.log("DAta:" + data);
            console.log("CARD:" + _this.card);
            _this.spinner.hide();
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
