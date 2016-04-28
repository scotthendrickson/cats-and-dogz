angular.module("rainingCatzAndDogz").controller("dogCtrl", function($scope, dogServ, $state) {
  $scope.allDogs = dogServ.allDogs;
  $scope.Dog = "";
  $scope.getDog = function() {
    for (var i = 0; i < $scope.allDogs.length; i++) {
      if ($scope.allDogs[i].breed == $state.params.dogId) {
        $scope.Dog = $scope.allDogs[i];
      }
    }
  };
  $scope.getDog();
});
