angular.module('myApp')
    .controller('detailCtrl', function ($scope, dataHolder, $routeParams) {
        $scope.participant = dataHolder
            .getParticipantById($routeParams.id);
    });