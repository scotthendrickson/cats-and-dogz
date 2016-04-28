angular.module("rainingCatzAndDogz").controller("catCtrl", function($scope, catServ, $state) {
  $scope.allCats = catServ.allCats;
  $scope.Cat = "";
  $scope.getCat = function() {
    for (var i = 0; i < $scope.allCats.length; i++) {
      if ($scope.allCats[i].breed == $state.params.catId) {
        $scope.Cat = $scope.allCats[i];
      }
    }
  };
  $scope.getCat();
});
