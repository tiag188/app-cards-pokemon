"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/common/http/testing");
var details_service_1 = require("./services/details.service");
describe('DetailsService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        imports: [testing_2.HttpClientTestingModule],
        providers: [details_service_1.DetailsService]
    }); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(details_service_1.DetailsService);
        expect(service).toBeTruthy();
    });
    it('should have getCard function', function () {
        var service = testing_1.TestBed.get(details_service_1.DetailsService);
        expect(service.getCard).toBeTruthy();
    });
});
