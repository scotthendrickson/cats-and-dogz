angular.module('rainingCatzAndDogz').controller('dogzCtrl', function($scope, $stateParams, dogServ, $state){
/*
  if($stateParams.id === 'shoes'){
    $scope.productData = productService.shoeData;
  }else if($stateParams.id === 'socks'){
    $scope.productData = productService.sockData;


  }*/
  $scope.getDoggies = function() {
    $scope.dogs = dogServ.getDogs();
  }
  $scope.getDoggies();

  $scope.dog = '';
  $scope.dogIdent = function() {
    for(var i = 0; i < $scope.dogs.length; i++){
      if($scope.dogs[i].breed == $state.params.dogId){
        $scope.dog = $scope.dogs[i];
      }
    }
  };
  $scope.dogIdent();
});
