'use strict';
//Define module
angular.module('myApp.view2', ['ngRoute'])

    //Define route
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])
    //Define controller
    .controller('View2Ctrl', ['$scope', function ($scope) {
        //Variables for this scope
        $scope.title = 'About';
        $scope.username = 'World';
        //This function will be called when the button is clicked
        $scope.sayHello = function () {
           /* This is the variable that will be displayed when the
            * button is clicked */
            $scope.greeting = 'Hello ' + $scope.username + '!';
        }
    }]);