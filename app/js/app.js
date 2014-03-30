

// intiating  app
var djWadiApp = angular.module('djWadiApp',['firebase','dependencyControllers','ngRoute'])

.run(['$rootScope','$location',function($firebase,$location,$rootScope){
	
	
}]);

djWadiApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/login',{templateUrl: 'partials/login.html',controller: 'loginController'});
	$routeProvider.when('/welcome',{templateUrl: 'partials/welcome.html',controller: 'loginController'});
	$routeProvider.otherwise({redirectTo: '/login'});
}]);