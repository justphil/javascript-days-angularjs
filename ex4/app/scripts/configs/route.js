"use strict";

angular.module('colorPickerApp').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/routes/main.html',
        controller: 'mainCtrl'
    }).when('/:r/:g/:b/:a', {
        templateUrl: 'templates/routes/init-rgba.html',
        controller: 'initRgbaCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});
