"use strict";

function ListCtrl($scope, dataHolder) {
        $scope.participants   = dataHolder.getParticipants();
};