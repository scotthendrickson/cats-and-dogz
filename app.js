angular.module('rainingCatzAndDogz', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',{
    url:'/',
    templateUrl: "./templates/homeTemp.html"
  })

  .state('catz',{
    url:'/catz',
    templateUrl: "./templates/catzTemp.html",
    controller:'catzCtrl'
  })

  .state('catzbyid',{
    url:'/catz/:catId',
    templateUrl: "./templates/thatCatTemp.html",
    controller: 'catzCtrl'
  })

  .state('dogz',{
    url:'/dogz',
    templateUrl: "./templates/dogzTemp.html",
    controller:'dogzCtrl'
  })

  .state('dogzbyid',{
    url:'/dogz/:dogId',
    templateUrl: "./templates/thatDogTemp.html",
    controller: 'dogzCtrl'
  });

  $urlRouterProvider
  .otherwise('/');
});
