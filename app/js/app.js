'use strict';


/* Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/

var djWadiApp = angular.module('djWadiApp',['dependencyControllers','ngRoute','firebase']);

djWadiApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/login',{
		templateUrl:'partials/login.html',
		controller:'controller1'
		
	})
	.when('/welcome',{
		templateUrl: 'partials/welcome.html',
		controller: 'controller1'
	})
	.otherwise({redirectTo: '/login'});

}]);
