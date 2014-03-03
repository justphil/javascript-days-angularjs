"use strict";

angular.module('colorPickerApp').factory('dataEnhancer', function() {
    return {
        enhance: function(res) {
            if (angular.isArray(res.data)) {
                var i = res.data.length;
                while (i--) {
                    res.data[i].author = 'foobar';
                }
            }

            return res;
        }
    };
});
