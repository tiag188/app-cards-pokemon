"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var card_1 = require("@angular/material/card");
var grid_list_1 = require("@angular/material/grid-list");
var list_component_1 = require("./list/list.component");
var list_service_1 = require("./list/services/list.service");
var sort_pipe_1 = require("../pipes/sort.pipe");
var ngx_filter_pipe_1 = require("ngx-filter-pipe");
var details_component_1 = require("./details/details.component");
var ngx_spinner_1 = require("ngx-spinner");
var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    CardsModule = __decorate([
        core_1.NgModule({
            declarations: [list_component_1.ListComponent, list_component_1.ListComponent, sort_pipe_1.SortPipe, details_component_1.DetailsComponent],
            exports: [list_component_1.ListComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ngx_filter_pipe_1.FilterPipeModule,
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                ngx_spinner_1.NgxSpinnerModule
            ],
            providers: [
                list_service_1.ListService
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], CardsModule);
    return CardsModule;
}());
exports.CardsModule = CardsModule;
