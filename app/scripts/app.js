'use strict';

angular.module('app',[
'duScroll',
'ngRoute'
]);


/*
app.directive('onLastWork', function() {
  return function(scope) {

    if (scope.$last) { 

      setTimeout( function(){
        var container = document.getElementById('work-list');
        var msnry = new Masonry( container, {
          columnWidth: '.work-thumb',
          itemSelector: '.work-thumb'
        });

      }, 1);
    }
  };
});
*/
/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.

angular
  .module('angularApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
 */