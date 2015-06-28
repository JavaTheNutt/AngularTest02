angular.
    module('myApp.view3', [
        'ngRoute'
    ])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'MyController'
        })
    }])
    .controller('MyController', ['$scope', function($scope){
        /*This object is what the data will be placed in*/
        $scope.input = {
            "name" : "",
            "email": "",
            "usrName": "",
            "pswrd1" : "",
            "pswrd2" : "",
            "address": "",
            "gender": ""
        };
        /*This is the master object that the input data will be copied to*/
        $scope.master = {};
        //This is the array that will hold tne objects
        $scope.list = [];
        //This function will be called when the submit button is pressed
        $scope.update = function (user) {
            //Copy the parameter into the master object
            $scope.master = angular.copy(user);
            //Push the master object to the list array
            $scope.list.push($scope.master);
        };
        //Wipe text boxes when reset button is pushed
        $scope.reset = function () {
            $scope.input.name = "";
            $scope.input.email = "";
            $scope.input.usrName = "";
            $scope.input.pswrd1 = "";
            $scope.input.pswrd2 = "";
            $scope.input.address = "";
            $scope.input.gender = "";

        };
        //ensure boxes are empty on refresh
        $scope.reset();
    }]);