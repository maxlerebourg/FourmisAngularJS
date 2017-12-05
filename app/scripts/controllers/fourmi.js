'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:FourmiCtrl
 * @description
 * # FourmiCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('FourmiCtrl', function ($scope, $rootScope, $routeParams, serviceDownload) {
    console.log('famille = ' + $rootScope.user);
    $scope.loading = true;
    var load = function () {
      var id = $routeParams.id;
      var oauth = $rootScope.token;
      serviceDownload.ant(id, oauth).success(function (response) {
        $scope.fourmi = response;
        $scope.loading = false;
      });
    }
    $scope.add = function () {
      var id = $routeParams.id;
      var oauth = $rootScope.token;
      serviceDownload.add(id, oauth).success(function (response) {
        $rootScope.user = response;
      });
    };
    $scope.remove = function () {
      var id = $routeParams.id;
      var oauth = $rootScope.token;
      serviceDownload.remove(id, oauth).success(function (response) {
        $rootScope.user = response;
      });
    };

    if ($routeParams.id == $rootScope.id) {
      $scope.style1 = 'display: none';
      $scope.style2 = 'display: none';
    }
    else {
      $scope.style1 = 'display: inline';
      $scope.style2 = 'display: none';
      var bool = true;
      $rootScope.user.famille.forEach(function (ant) {
        console.log(ant.id);
        if ($routeParams.id == ant.id) {
          $scope.style1 = 'display: none';
          $scope.style2 = 'display: inline';
          bool = false;
        }
        else if (bool) {
          $scope.style1 = 'display: inline';
          $scope.style2 = 'display: none';
        }
      });
    }

    load();
  });
