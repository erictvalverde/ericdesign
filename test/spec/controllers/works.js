'use strict';

describe('Controller: WorksCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var WorksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorksCtrl = $controller('WorksCtrl', {
      $scope: scope
    });
  }));

  it('at first items should be empty', function () {
    expect(scope.works.items.length).toBe(0);
  });

  it('then lenght should be > 0', function () {
    expect(scope.works.items.length).toBe(0);
  });

});
