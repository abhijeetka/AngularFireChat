'use strict';

/* Controllers */

var dependencyControllers = angular.module('dependencyControllers',[]);


// Controller for handling logins
dependencyControllers.controller('loginController',
	['$rootScope','$scope','$location','$firebaseSimpleLogin','$routeParams',function($routeParams,$scope,$location,$rootScope,$firebaseSimpleLogin){
		alert('app is running fine');
	var fbObj = new Firebase('https://djwadichat.firebaseio.com');
	var userInfo = {};
	//$rootScope.loginObj = $firebaseSimpleLogin(fbObj);
	$scope.uObj = new FirebaseSimpleLogin(fbObj,function(error,user){
		if(error){
			//error facing in authentication
		}else if (user){
			$rootScope.ui = user;
			$scope.ui = user;
			console.log('inner --'+user);
			$location.url('/welcome');
		}else{
			///log out 
		}
	});
	
	$scope.loginAuth= function(){
		$scope.uObj.login('google');
	}

	$scope.loginUser = function(){
		//console.log($rootScope.ui.id);
		if($rootScope.ui){
			$location.url('/welcome');	
		}else{
			$scope.loginAuth();
		}

		
	}


	
}]);

