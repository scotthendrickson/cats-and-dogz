angular.module('rainingCatzAndDogz').controller('catzCtrl', function($scope, catServ, $state){
/*
  if($stateParams.id === 'shoes'){
    $scope.productData = productService.shoeData;
  }else if($stateParams.id === 'socks'){
    $scope.productData = productService.sockData;
  }*/

  $scope.getCats = function() {
    $scope.cats = catServ.getCats();
  }
  $scope.getCats();

  $scope.cat = '';

  $scope.catIdent = function() {
    for(var i = 0; i < $scope.cats.length; i++){
      if($scope.cats[i].breed == $state.params.catId){
        $scope.cat = $scope.cats[i];
      }
    }
  };
  $scope.catIdent();
});
