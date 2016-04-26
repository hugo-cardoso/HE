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

            .when('/internet', {
                templateUrl : 'pages/menu/internet.html'
            })

            .when('/resets', {
                templateUrl : 'pages/menu/resets.html',
                controller  : 'resetsController'
            })

            // route for the contact page
            .when('/ligar', {
                templateUrl : 'pages/teste.html'
            });
        });

        // create the controller and inject Angular's $scope
        scotchApp.controller('mainController', function($scope) {



        });

        // create the controller and inject Angular's $scope
        scotchApp.controller('resetsController', function($scope) {

            $('select.dropdown')
            .dropdown()
            ;
            
            $("#resets").change(function(){

            var input = $("#resets").val();

                if(input === "5_0"){
                    $("#5_0").show();
                    $("#5_1").hide();
                    $("#6_0").hide();
                }
                if(input === "5_1"){
                    $("#5_0").hide();
                    $("#5_1").show();
                    $("#6_0").hide();
                }
                if(input === "6_0"){
                    $("#5_0").hide();
                    $("#5_1").hide();
                    $("#6_0").show();
                }


            })

        });