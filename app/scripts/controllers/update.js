'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:UpdateCtrl
 * @description
 * # UpdateCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('UpdateCtrl', function ($scope, $rootScope, serviceDownload) {
    $scope.loading = true;
    $scope.valuser = $rootScope.user.username;
    $scope.valage = $rootScope.user.age;
    $scope.valemail = $rootScope.user.email;
    $scope.loading = false;
    $scope.register = function(){
      var param = '{"username":"' + $scope.username +
        '", "plainPassword":"' + $scope.plainPassword+
        '", "email":"' + $scope.email +
        '", "age":"' + $scope.age +
        '", "race":"' + $scope.race +
        '"}';


      serviceDownload.update(param).success(function (response) {
        $scope.user = 'User created';
        var param2 = '{"username":"' + $scope.username +
          '", "password":"' + $scope.plainPassword+'"}';
        serviceDownload.login(param2).success(function (response) {
          $rootScope.token = response.token;
          $rootScope.id = response.id;
          serviceDownload.ant(response.id,response.token).success(function (response) {
            $rootScope.family = response.famille;
          });
        });
      }).error(function(response) {
        $rootScope.user = response.status;
      });
    };
  });
