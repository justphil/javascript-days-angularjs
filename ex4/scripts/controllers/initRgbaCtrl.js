"use strict";

angular.module('colorPickerApp').controller('initRgbaCtrl', function($scope, $routeParams) {
    $scope.r = $routeParams.r;
    $scope.g = $routeParams.g;
    $scope.b = $routeParams.b;
    $scope.a = $routeParams.a;

    $scope.onColorChange = function(r,g,b,a) {
        console.log('onColorChange', r, g, b, a);
    };
});
