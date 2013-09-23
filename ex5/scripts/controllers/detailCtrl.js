"use strict";

function DetailCtrl($scope, dataHolder,$routeParams) {
        $scope.participant = dataHolder.getParticipants()[$routeParams.id];
};