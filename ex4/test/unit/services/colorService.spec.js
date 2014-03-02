'use strict';

describe('Service: colorService', function () {

    var colorService;

    // load the application module
    beforeEach(module('colorPickerApp'));

    // get a reference to the service
    beforeEach(inject(function (_colorService_) {
        colorService = _colorService_;
    }));

    describe('Public API', function() {
        it('should include a getColors() function', function () {
            expect(colorService.getColors).toBeDefined();
        });
    });

    describe('Public API usage', function() {
        describe('getColors()', function() {
            it('should perform a corresponding HTTP request', function() {
                // TODO: use $httpBackend to state the assertion
            });
        });
    });

});
