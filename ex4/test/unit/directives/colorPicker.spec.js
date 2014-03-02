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

    it('should properly set input values on initialization', function () {
        scope = $rootScope.$new();

        element = $compile(
            '<color-picker init-r="1" init-g="2" init-b="3" init-a="0.5" on-change="onColorChange(r,g,b,a)">' +
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
            '<color-picker init-r="1" init-g="2" init-b="3" init-a="0.5" on-change="onColorChange(r,g,b,a)">' +
                '</color-picker>'
        )(scope);

        scope.$apply();

        var divs = element.find('div'),
            i, e;
        for (i = 0; i < divs.length; i++) {
            e = angular.element(divs[i]);

            if (e.hasClass('preview')) {
                // TODO: some browser's interpretation of 0.5 is 0.4976763726726...
                expect(e.css('background-color')).toEqual('rgba(1, 2, 3, 0.5)');
            }
        }
    });
});
