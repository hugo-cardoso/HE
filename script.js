    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/teste.html',
                controller  : 'mainController'
            })

            .when('/volume', {
                templateUrl : 'pages/teste1.html'
            })

            .when('/inicial', {
                templateUrl : 'pages/tela_inicial.html'
            })


            // route for the contact page
            .when('/ligar', {
                templateUrl : 'pages/teste.html'
            });
    });

        // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        


    });