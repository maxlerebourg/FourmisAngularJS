'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:FourmisCtrl
 * @description
 * # FourmisCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('FourmisCtrl', function ($scope, $rootScope, serviceDownload) {
    $rootScope.log = function() {
      $rootScope.boollog = Number(parseFloat($rootScope.id)) === ($rootScope.id);
    }
    var loadFourmis = function(){

      //$scope.loading = true;
      serviceDownload.ants().success(function(response) {
        $scope.fourmis = response;
        //$scope.loading = false;
      });
    };
    $scope.pageChanged = function(){
      loadFourmis();
    };
    loadFourmis();
    $rootScope.log();
  });
