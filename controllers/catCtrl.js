angular.module("rainingCatzAndDogz").controller("catCtrl", function($scope, catServ) {
  $scope.allCats = catServ.allCats;
});
