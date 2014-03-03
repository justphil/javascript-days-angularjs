"use strict";

describe('E2E: main route', function() {

    beforeEach(function() {
        browser().navigateTo('/');
        browser().reload();
    });

    it('should show a corresponding preview on slider change', function() {
        input('r').enter('1');
        input('g').enter('2');
        input('b').enter('3');
        expect(element('div.preview').css('background-color')).toEqual('rgb(1, 2, 3)');
    });

    it('should allow filtering of predefined colors', function() {
        expect(repeater('div.color-selector span').count()).toBe(9);
        input('colorFilterString').enter('red');
        expect(repeater('div span').count()).toBe(3);
    })

    it('should allow selecting a predefined color', function() {
        expect(element('div.preview').css('background-color')).toEqual('rgb(0, 0, 0)');
        element('div.color-selector span:first-child').click();
        expect(element('div.preview').css('background-color')).toEqual('rgb(255, 0, 0)');
    });

});
