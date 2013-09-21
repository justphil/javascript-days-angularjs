"use strict";

colorPickerApp.directive('colorPicker', function($http) {
    return {
        scope: {
            r:          '@initR',
            g:          '@initG',
            b:          '@initB',
            a:          '@initA',
            onChange:   '&'
        },
        restrict: 'E',
        templateUrl: 'colorPickerTemplate.html',
        link: function(scope) {
            var COLORS = ['r', 'g', 'b', 'a'];

            COLORS.forEach(function(value) {
                scope.$watch(value, function(newValue, oldValue) {
                    if (newValue !== oldValue) {
                        if (angular.isFunction(scope.onChange)) {
                            scope.onChange(generateColorChangeObject());
                        }
                    }
                });
            });

            var generateColorChangeObject = function() {
                var obj = {};

                COLORS.forEach(function(value) {
                    obj[value] = scope[value];
                });

                return obj;
            };

            // Aufg. 3
            $http.get('scripts/colors.json').then(function(res) {
                scope.colors = res.data;
                scope.selectColor = function(c) {
                    console.log('Color ' + c.name + ' selected!');
                    COLORS.forEach(function(value) {
                        scope[value] = c.color[value];
                    });
                };
            }, function(error) {
                console.log('error', error);
            });
        }
    };
});
