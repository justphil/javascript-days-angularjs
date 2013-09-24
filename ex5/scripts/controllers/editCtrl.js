"use strict";

app.controller('editCtrl', [ '$scope', 'dataHolder', '$location',  function ( $scope, dataHolder, $location) {
        $scope.name = '';
        $scope.email = '';
        
        $scope.add = function () {
			dataHolder.add($scope.name,$scope.email);
			$location.path('/');
        };
}]);