    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                controller  : 'mainController'
            })

            // route for the contact page
            .when('/ligar', {
                templateUrl : 'pages/teste.html'
            });
    });

        // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        alert("teste");
    });