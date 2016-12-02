var app = angular.module('word-cloud', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/cloud', {
        templateUrl: 'partials/results.html',
        controller: 'CloudController'
      })
      .otherwise('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'

      })
});
