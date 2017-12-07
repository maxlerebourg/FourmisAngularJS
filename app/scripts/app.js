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
      .when('/search/:query', {
        templateUrl: 'views/fourmis.html',
        controller: 'SearchCtrl'
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
        templateUrl: 'views/update.html',
        controller: 'UpdateCtrl',
        controllerAs: 'update'
      })
      .when('/profile', {
        templateUrl: 'views/fourmi.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .otherwise({
        redirectTo: '/fourmis'
      });
  });
