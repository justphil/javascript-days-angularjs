"use strict";

angular.module('myApp').controller('dateCtrl', function ($scope, $timeout) {
      $scope.now = 'Loading...';
      var updateTime = function() {
            $timeout(function() {
                  $scope.now = new Date();
                  updateTime();
            }, 1000);
	 };
     updateTime();
});