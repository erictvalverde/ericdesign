'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:WorksCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('app')
  .controller('WorksCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.works = this;
  $scope.works.items = [];
  $http.get('json/works.json')
     .success(function(data){
      $scope.works.items = data.items;
     })
     .error(function(){
      
     }); 
}]).directive('workThumb', [function () {
  return {
    restrict: 'E',
    templateUrl: 'views/work-thumb.html',
    replace: true,
    controller: 'WorksCtrl',
    controllerAs: 'works'
  };
}]).directive('onLastWork', function() {
  return function(scope) {

    if (scope.$last) { 

      setTimeout( function(){
        var container = document.getElementById('work-list');
        new Masonry( container, {
          columnWidth: '.work-thumb',
          itemSelector: '.work-thumb'
        });

      }, 1);
    }
  };
});
