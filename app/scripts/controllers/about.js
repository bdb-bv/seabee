'use strict';

/**
 * @ngdoc function
 * @name seabeeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the seabeeApp
 */
angular.module('seabeeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
