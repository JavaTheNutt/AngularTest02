'use strict';
/*This defines the module as being the first view of "myApp".
 * It declares a dependency on "ngRoute"*/
angular.module('myApp.view1', ['ngRoute'])
    /*This will configure the routing for this view. It must be
     * annotated to ensure that it still functions when minified*/
    .config(['$routeProvider', function($routeProvider) {
        /*This waits for the user to navigate to view1*/
        $routeProvider.when('/view1', {
            /*The template to be used*/
            templateUrl: 'view1/view1.html',
            /*Controller to be used*/
            controller: 'MainCtrl'
        });
    }])
    /*Define controller MainCtrl. Two parameters are added*/
    .controller('MainCtrl', ['$scope', '$rootScope',function($scope, $rootScope) {
        /*Assign variables
        * The top two are only assigned within the scope of this controller*/
        $scope.title = 'Home';
        $scope.name = 'World';
        /*This variable assignment will be throughout this module (myApp.view1)*/
        $rootScope.department = 'Waterford';
    }])
    /*This controller will be added to a div that is a sibling of the div with the first controller added.*/
    .controller('SecondCtrl', ['$scope', function($scope){
        /*This is the array that will be printed in the html*/
        $scope.names = ['Joe', 'Michelle', 'Joseph'];
    }]);
