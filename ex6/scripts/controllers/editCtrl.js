angular.module('myApp')
    .controller('editCtrl', function ($scope, dataHolder, $location, $routeParams) {

        $scope.participant = dataHolder
            .getParticipantById($routeParams.id);

        $scope.action = function () {
            dataHolder.edit($scope.participant);
            $location.path('/');
        };
    });