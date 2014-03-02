'use strict';

describe('Service: colorService', function () {

    var colorsUrl = 'data/colors.json'

    var colorService,
        $httpBackend;

    // load the application module
    beforeEach(module('colorPickerApp'));

    // get a reference to the service
    beforeEach(inject(function (_colorService_, _$httpBackend_) {
        colorService = _colorService_;
        $httpBackend = _$httpBackend_;
    }));

    // define trained responses
    beforeEach(function() {
        $httpBackend.when('GET', colorsUrl).respond({});
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('Public API', function() {
        it('should include a getColors() function', function () {
            expect(colorService.getColors).toBeDefined();
        });
    });

    describe('Public API usage', function() {
        describe('getColors()', function() {
            it('should perform a corresponding HTTP request to retrieve the colors', function() {
                $httpBackend.expectGET(colorsUrl);
                colorService.getColors();
                $httpBackend.flush();
            });
        });
    });

});
