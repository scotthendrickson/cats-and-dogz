angular.module("rainingCatzAndDogz").controller("dogCtrl", function($scope, dogServ) {
  $scope.allDogs = dogServ.allDogs;
});
