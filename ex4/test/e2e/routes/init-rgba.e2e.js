"use strict";

describe('E2E: init-rgba route', function() {

    beforeEach(function() {
        browser().navigateTo('/#/10/20/30/1.0');
        browser().reload();
    });

    it('should properly process the url path parameters', function() {
        expect(element('div.preview').css('background-color')).toEqual('rgb(10, 20, 30)');
        expect(element('ul li:nth-child(1)').text()).toEqual('R: 10');
        expect(element('ul li:nth-child(2)').text()).toEqual('G: 20');
        expect(element('ul li:nth-child(3)').text()).toEqual('B: 30');
        expect(element('ul li:nth-child(4)').text()).toEqual('A: 1.0');
    });

});
