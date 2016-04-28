angular.module('rainingCatzAndDogz', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',{
    url:'/',
    templateUrl: "./templates/homeTemp.html"
  });
  
  $urlRouterProvider
  .otherwise('/');
});
