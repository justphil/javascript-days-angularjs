"use strict";

angular.module('colorPickerApp').factory('colorService', function($http, dataEnhancer) {
    var srv = {};

    srv.getColors = function() {
        return $http.get('data/colors.json').then(dataEnhancer.enhance);
    };

    return {
        getColors: function() {
            return srv.getColors();
        }
    };
});
