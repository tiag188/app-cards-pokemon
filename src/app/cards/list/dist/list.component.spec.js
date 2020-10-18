"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/common/http/testing");
var list_service_1 = require("./services/list.service");
describe('ListService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        imports: [testing_2.HttpClientTestingModule],
        providers: [list_service_1.ListService]
    }); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(list_service_1.ListService);
        expect(service).toBeTruthy();
    });
    it('should have getCards function', function () {
        var service = testing_1.TestBed.get(list_service_1.ListService);
        expect(service.getCards).toBeTruthy();
    });
    it('should have handleError function', function () {
        var service = testing_1.TestBed.get(list_service_1.ListService);
        expect(service.handleError).toBeTruthy();
    });
});
