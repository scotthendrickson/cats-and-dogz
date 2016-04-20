angular.module('rainingCatzAndDogz', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',{
    url:'/',
    templateUrl: "./templates/homeTemp.html"
  })
  .state('catz',{
    url:'/catz',
    template: "<h2>Catz!</h2>"
  })
  .state('dogz',{
    url:'/dogz',
    template: "<h2>Dogz!</h2>"
  })
  .state('catbyid',{
    url:'/catz/:catId',
    template: "<h2>That Cat</h2>"
  })
  .state('dogbyid',{
    url:'/dogz/:dogId',
    template: "<h2>That Dog</h2>"
  });

  $urlRouterProvider
  .otherwise('/');
});
