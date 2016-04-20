angular.module('rainingCatzAndDogz', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',{
    url:'/',
    templateUrl: "./templates/homeTemp.html"
  })
  .state('catz',{
    url:'/catz',
    controller: 'catCtrl',
    templateUrl: "./templates/catzTemp.html"
  })
  .state('dogz',{
    url:'/dogz',
    controller: 'dogCtrl',
    templateUrl: "./templates/dogzTemp.html"
  })
  .state('catbyid',{
    url:'/catz/:catId',
    controller: 'catCtrl',
    templateUrl: "./templates/thatCatTemp.html"
  })
  .state('dogbyid',{
    url:'/dogz/:dogId',
    controller: 'dogCtrl',
    templateUrl: "./templates/thatDogTemp.html"
  });

  $urlRouterProvider
  .otherwise('/');
});
