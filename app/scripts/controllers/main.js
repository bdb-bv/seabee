'use strict';

/**
 * @ngdoc function
 * @name seabeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seabeeApp
 */
angular.module('seabeeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
