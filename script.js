    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the contact page
            .when('/ligar', {
                templateUrl : 'pages/teste.html'
            });
    });