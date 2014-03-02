"use strict";

angular.module('colorPickerApp').factory('colorService', function($http) {
    var srv = {};

    srv.getColors = function() {
        return $http.get('scripts/data/colors.json');
    };

    return {
        getColors: function() {
            return srv.getColors();
        }
    };
});