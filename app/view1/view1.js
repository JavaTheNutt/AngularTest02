'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ['$scope', '$rootScope',function($scope, $rootScope) {
	$scope.title = 'Home';
	$scope.name = 'World';
	$rootScope.department = 'angular';
}])
.controller('SecondCtrl', ['$scope', function($scope){
	$scope.names = ['Joe', 'Michelle', 'Joseph'];
}])
