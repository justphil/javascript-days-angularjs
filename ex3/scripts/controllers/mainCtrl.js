"use strict";

colorPickerApp.controller('mainCtrl', function ($scope) {
    $scope.onColorChange = function(r,g,b,a) {
        console.log('onColorChange', r, g, b, a);
    };
});
