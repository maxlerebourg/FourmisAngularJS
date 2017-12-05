'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $routeParams, serviceDownload) {
    serviceDownload.verif($rootScope.token).success(function () {
      $scope.user = 'You are already connect';
    });
    $scope.submit = function(){
      var param = '{"username":"' + $scope.username + '", "password":"' + $scope.password+ '"}';
      serviceDownload.login(param).success(function (response) {
        $scope.user = 'You are connect as '+response.username;
        $rootScope.token = response.token;
        $rootScope.id = response.id;
        serviceDownload.ant(response.id,response.token).success(function (response) {
          $rootScope.user = response;
        });
      }).error(function(response) {
        $rootScope.user = response.status;
      });
    };
  });
