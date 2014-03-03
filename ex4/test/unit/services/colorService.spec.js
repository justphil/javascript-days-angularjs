'use strict';

describe('Service: colorService', function () {

    var colorsUrl = 'data/colors.json';

    var colorService,
        testColors,
        $httpBackend,
        testString = 'TEST';

    // load the test data
    beforeEach(module('testCommons'));

    // load the application module
    beforeEach(module('colorPickerApp'));

    // just to show how to mock dependencies
    beforeEach(module(function($provide) {
        $provide.factory('dataEnhancer', function() {
            return {
                enhance: function(res) {
                    if (angular.isArray(res.data)) {
                        var i = res.data.length;
                        while (i--) {
                            res.data[i].author = testString;
                        }
                    }

                    return res;
                }
            }
        });
    }));

    // get a reference to the service
    beforeEach(inject(function (_colorService_, _$httpBackend_, _testColors_) {
        colorService = _colorService_;
        $httpBackend = _$httpBackend_;
        testColors   = _testColors_;
    }));

    // define trained responses
    beforeEach(function() {
        $httpBackend.when('GET', colorsUrl).respond(testColors);
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

            // just to show how to mock dependencies
            it('shows how we can mock dependencies', function() {
                var data, i;

                $httpBackend.expectGET(colorsUrl);
                colorService.getColors().then(function(res) {
                    data = res.data;
                });
                $httpBackend.flush();

                i = data.length;
                while (i--) {
                    expect(data[i].author).toBe(testString);
                }
            });
        });
    });

});
