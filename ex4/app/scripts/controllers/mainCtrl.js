"use strict";

angular.module('colorPickerApp').controller('mainCtrl', function ($scope) {
    $scope.r = 0;
    $scope.g = 0;
    $scope.b = 0;
    $scope.a = 1.0;

    $scope.onColorChange = function(r,g,b,a) {
        console.log('onColorChange', r, g, b, a);
        $scope.r = r;
        $scope.g = g;
        $scope.b = b;
        $scope.a = a;
    };
});
