"use strict";

angular.module('testCommons', []);

angular.module('testCommons').value('testColors', [
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
]);
