angular.module('myApp')
    .controller('listCtrl', function ($scope, dataHolder) {
        $scope.participants = dataHolder.participants();
    });