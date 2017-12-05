'use strict';

/**
 * @ngdoc overview
 * @name coursExoApp
 * @description
 * # coursExoApp
 *
 * Main module of the application.
 */
angular
  .module('coursExoApp', [
    'ngRoute', 'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/popular', {
        templateUrl: 'views/movies.html',
        controller: 'PopularCtrl'
      })
      .when('/search/:query', {
        templateUrl: 'views/fourmis.html',
        controller: 'SearchCtrl'
      })
      .when('/info/:id', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
      .when('/fourmis', {
        templateUrl: 'views/fourmis.html',
        controller: 'FourmisCtrl',
        controllerAs: 'fourmis'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/fourmi/:id', {
        templateUrl: 'views/fourmi.html',
        controller: 'FourmiCtrl',
        controllerAs: 'fourmi'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/update', {
        templateUrl: 'views/register.html',
        controller: 'UpdateCtrl',
        controllerAs: 'update'
      })
      .otherwise({
        redirectTo: '/fourmis'
      });
  });
