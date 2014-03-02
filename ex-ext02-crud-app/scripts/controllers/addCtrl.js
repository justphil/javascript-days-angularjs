angular.module("myApp")
    .controller('addCtrl', function ($scope, dataHolder, $location) {
        $scope.participant = {
            name : '',
            email: ''
        };

        $scope.action = function () {
            dataHolder
                .add($scope.participant);
            $location.path('/');
        };
    });