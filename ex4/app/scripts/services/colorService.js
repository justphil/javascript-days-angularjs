"use strict";

angular.module('colorPickerApp').factory('colorService', function($http) {
    var srv = {};

    srv.getColors = function() {
        return $http.get('data/colors.json');
    };

    return {
        getColors: function() {
            return srv.getColors();
        }
    };
});