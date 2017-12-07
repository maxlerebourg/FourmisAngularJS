'use strict';

/**
 * @ngdoc service
 * @name coursExoApp.serviceDownload
 * @description
 * # serviceDownload
 * Factory in the coursExoApp.
 */
angular.module('coursExoApp')
  .factory('serviceDownload', function serviceDownload($http) {
    var url = 'http://localhost/Fourmis/web/api';
    return{
      ants: function(){
        return $http.get(url + '/fourmis');
      },
      login: function($param){
        return $http.post(url + '/token', $param);
      },
      register: function($param){
        return $http.post(url + '/register', $param);
      },
      search: function($query){
        return $http.get(url + '/search/'+$query);
      },
      update: function($param, $head){
        return $http.put(url + '/update', $param,{
          headers: {'Authorization': 'Bearer '+$head}
        });
      },
      ant: function($id, $head){
        return $http.get(url + '/fourmi/'+$id, {
          headers: {'Authorization': 'Bearer '+$head}
        });
      },
      verif: function($head){
        return $http.get(url + '/verif', {
          headers: {'Authorization': 'Bearer '+$head}
        });
      },
      add: function($id, $head){
        return $http.get(url + '/add/'+$id, {
          headers: {'Authorization': 'Bearer '+$head}
        });
      },
      remove: function($id, $head){
        return $http.get(url + '/remove/'+$id, {
          headers: {'Authorization': 'Bearer '+$head}
        });
      }
    };
  });
