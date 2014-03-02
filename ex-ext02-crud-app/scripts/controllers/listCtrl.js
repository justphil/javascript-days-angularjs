angular.module('myApp')
    .controller('listCtrl', function ($scope, dataHolder) {
        $scope.participants = dataHolder.participants();
        $scope.remove = dataHolder.removeById;
    });