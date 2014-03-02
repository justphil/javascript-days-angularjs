'use strict';

describe('Directive: colorPicker', function () {
    var colorsUrl = 'data/colors.json';

    var $compile,
        $rootScope,
        $httpBackend,
        element,
        scope;

    var colors = [
        {
            name: 'smack-red',
            baseColor: 'red',
            color: {
                r: 255,
                g: 0,
                b: 0,
                a: 1.0
            }
        },
        {
            name: 'bilious-green',
            baseColor: 'green',
            color: {
                r: 0,
                g: 255,
                b: 0,
                a: 1.0
            }
        },
        {
            name: 'royal-blue',
            baseColor: 'blue',
            color: {
                r: 0,
                g: 0,
                b: 255,
                a: 1.0
            }
        }
    ];

    // load the application module
    beforeEach(module('colorPickerApp'));

    // load the templates module (ng-html2js)
    beforeEach(module('templates'));

    // get a reference to all used services
    beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
        $compile    = _$compile_;
        $rootScope  = _$rootScope_;
        $httpBackend= _$httpBackend_;
    }));

    // define trained responses
    beforeEach(function() {
        $httpBackend.when('GET', colorsUrl).respond(colors);
    });

    it('should get a new scope', function() {
        scope = $rootScope.$new();

        element = $compile(
            '<color-picker init-r="1" init-g="2" init-b="3" init-a="0.5">' +
            '</color-picker>'
        )(scope);

        scope.$apply();

        var colorPickerScope = angular.element(element.children()[0]).scope();

        expect(colorPickerScope.$id).not.toBe(scope.$id);
    });

    it('should get an isolated scope', function() {
        scope = $rootScope.$new();

        scope.test = 'test';

        element = $compile(
            '<color-picker init-r="1" init-g="2" init-b="3" init-a="0.5">' +
            '</color-picker>'
        )(scope);

        scope.$apply();

        var colorPickerScope = angular.element(element.children()[0]).scope();

        expect(colorPickerScope.test).toBeUndefined();
    });

    it('should properly set input values on initialization', function () {
        scope = $rootScope.$new();

        element = $compile(
            '<color-picker init-r="1" init-g="2" init-b="3" init-a="0.5">' +
            '</color-picker>'
        )(scope);

        scope.$apply();

        var inputs = element.find('input'),
            i, e;
        for (i = 0; i < inputs.length; i++) {
            e = angular.element(inputs[i]);

            if (e.attr('name') === 'color_r') {
                expect(e.val()).toEqual('1');
            }
            else if (e.attr('name') === 'color_g') {
                expect(e.val()).toEqual('2');
            }
            else if (e.attr('name') === 'color_b') {
                expect(e.val()).toEqual('3');
            }
            else if (e.attr('name') === 'color_a') {
                expect(e.val()).toEqual('0.5');
            }
        }
    });

    it('should properly set the background color of the preview div on initialization', function () {
        scope = $rootScope.$new();

        element = $compile(
            '<color-picker init-r="1" init-g="2" init-b="3" init-a="0.5">' +
            '</color-picker>'
        )(scope);

        scope.$apply();

        var divs = element.find('div'),
            i, e;
        for (i = 0; i < divs.length; i++) {
            e = angular.element(divs[i]);

            if (e.hasClass('preview')) {
                // some browser interpret 0.5 as 0.4976763726726...
                var rgbaRegEx = /rgba\((\d+),\s+(\d+),\s+(\d+),\s+(\d{1}.\d+)\)/;
                var rgbaArray = rgbaRegEx.exec(e.css('background-color'));
                expect(rgbaArray[1]).toEqual('1');
                expect(rgbaArray[2]).toEqual('2');
                expect(rgbaArray[3]).toEqual('3');
                expect(parseFloat(rgbaArray[4])).toBeCloseTo(0.5);
            }
        }
    });

    it('should properly invoke the passed callback function on color change', function() {
        var newR = 0, newG = 0, newB = 0, newA = 0;

        scope = $rootScope.$new();
        scope.onColorChange = function(r, g, b, a) {
            newR = r;
            newG = g;
            newB = b;
            newA = a;
        };

        element = $compile(
            '<color-picker init-r="1" init-g="2" init-b="3" init-a="0.5" on-change="onColorChange(r,g,b,a)">' +
            '</color-picker>'
        )(scope);

        scope.$apply();

        var colorPickerScope = angular.element(element.children()[0]).scope();
        colorPickerScope.r = 10;
        colorPickerScope.g = 20;
        colorPickerScope.b = 30;
        colorPickerScope.a = 1.0;
        scope.$apply();

        expect(newR).toBe(10);
        expect(newG).toBe(20);
        expect(newB).toBe(30);
        expect(newA).toBe(1.0);
    });
});
