"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var environment_1 = require("src/environments/environment");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var ListService = /** @class */ (function () {
    function ListService(http) {
        this.http = http;
        this.env = environment_1.environment.apiUrl;
        console.log("Service Construtor Cards Pokemon OK");
    }
    ListService.prototype.getCards = function () {
        var endpoint = "?supertype=pokemon&pageSize=1000";
        return this.http.get(this.env + endpoint);
    };
    ListService.prototype.getCard = function (id) {
        var url = environment_1.environment.apiUrl + "/cards/" + id;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return console.log("leu o produto id=" + id); }), operators_1.catchError(this.handleError("getProduto id=" + id)));
    };
    ListService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return rxjs_1.of(result);
        };
    };
    ListService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;
