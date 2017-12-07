'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:UpdateCtrl
 * @description
 * # UpdateCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('UpdateCtrl', function ($window, $update, $scope, $rootScope, serviceDownload) {
    $scope.bool=false;
    if ($rootScope.boollog){$scope.bool=true;}

    //$scope.loading = true;
    $scope.valuser = $rootScope.user.username;
    console.log($scope.valuser);
    $scope.valage = $rootScope.user.age;
    console.log($rootScope.user.age);
    $scope.valemail = $rootScope.user.email;
    console.log($rootScope.user.email);
    //$scope.loading = false;

    $scope.registers = function () {
      var param = '{"username":"' + $scope.username +
        '", "plainPassword":"' + $scope.plainPassword +
        '", "email":"' + $scope.email +
        '", "age":"' + $scope.age +
        '", "race":"' + $scope.race +
        '"}';


      serviceDownload.update(param).success(function () {
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
