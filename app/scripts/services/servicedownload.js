'use strict';

/**
 * @ngdoc service
 * @name coursExoApp.serviceDownload
 * @description
 * # serviceDownload
 * Factory in the coursExoApp.
 */
var myApp = angular.module('coursExoApp')
  .factory('serviceDownload', function serviceDownload($http) {
    return{
      ants: function(){
        return $http.get('http://localhost/Fourmis/web/app_dev.php/api/fourmis');
      },
      login: function($param){
        return $http.post('http://localhost/Fourmis/web/app_dev.php/api/token', $param);
      },
      register: function($param){
        return $http.post('http://localhost/Fourmis/web/app_dev.php/api/register', $param);
      },
      update: function($param, $head){
        return $http.put('http://localhost/Fourmis/web/app_dev.php/api/update', $param,{
          headers: {'Authorization': 'Bearer '+$head}
        });
      },
      ant: function($id, $head){
        return $http.get('http://localhost/Fourmis/web/app_dev.php/api/fourmi/'+$id, {
          headers: {'Authorization': 'Bearer '+$head}
        });
      },
      verif: function($head){
        return $http.get('http://localhost/Fourmis/web/app_dev.php/api/verif', {
          headers: {'Authorization': 'Bearer '+$head}
        });
      },
      add: function($id, $head){
        return $http.get('http://localhost/Fourmis/web/app_dev.php/api/add/'+$id, {
          headers: {'Authorization': 'Bearer '+$head}
        });
      },
      remove: function($id, $head){
        return $http.get('http://localhost/Fourmis/web/app_dev.php/api/remove/'+$id, {
          headers: {'Authorization': 'Bearer '+$head}
        });
      },
      search: function($query){
        return $http.get('http://localhost/Fourmis/web/app_dev.php/api/search/'+$query);
      }
    };
  });
