'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('SearchCtrl', function ($scope, $rootScope, $routeParams, serviceDownload) {
    var loadFourmis = function(){
      $scope.loading = true;
      serviceDownload.search($routeParams.query).success(function(response) {
        $scope.fourmis = response;
        $scope.loading = false;
      });
    };

    $scope.pageChanged = function(){
      loadFourmis();
    };
    loadFourmis();
  });

