"use strict";

app.controller('listCtrl', [ '$scope', 'dataHolder', function ( $scope, dataHolder) {
        $scope.participants   = dataHolder.participants();
}]);