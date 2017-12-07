'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('RegisterCtrl', function ($window, $scope, $rootScope, serviceDownload) {
    $scope.bool = true;
    $scope.button = 'Create account';
    $scope.registers = function () {
      console.log('coucou');
      var param = '{"username":"' + $scope.username +
        '", "plainPassword":"' + $scope.plainPassword +
        '", "email":"' + $scope.email +
        '", "age":"' + $scope.age +
        '", "race":"' + $scope.race +
        '"}';
      serviceDownload.register(param).success(function () {
        $scope.user = 'User created';
        var param2 = '{"username":"' + $scope.username +
          '", "password":"' + $scope.plainPassword + '"}';
        serviceDownload.login(param2).success(function (response) {
          $rootScope.token = response.token;
          $rootScope.id = response.id;
          serviceDownload.ant(response.id, response.token).success(function (response) {
            $rootScope.user = response;
            $rootScope.connect = response.username;
            $window.location.href = '#/fourmis';
          });
        });
      }).error(function (response) {
        $rootScope.user = response.status;
      });
    };
  });
