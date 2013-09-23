"use strict";

app.controller('detailCtrl', [ '$scope', 'dataHolder', '$routeParams', function ( $scope, dataHolder,$routeParams) {
        $scope.participant = dataHolder.getParticipants()[$routeParams.id];
}]);