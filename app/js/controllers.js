'use strict';

/* Controllers */

var dependencyControllers = angular.module('dependencyControllers',[]);

dependencyControllers.controller('controller1',['$scope','$location','$firebase',function($scope,$location,$firebase){
	
	var currentRef = new Firebase('https://djwadichat.firebaseio.com');
	var loginStatus = false;
	$scope.auth = new FirebaseSimpleLogin(currentRef,function(error,user,$location){
		alert('called firebase simple login');
		if(error){
			console.log('Error not able to login');
		}
		else if(user){			
			console.log('userid: '+ user.id+ "  "+ "provider: "+ user.provider);	
			loginStatus = true;		
		}else{
			console.log('user is logged out');
		}

});
	$scope.authenticate =function($auth){
  		console.log('abhijeet');
  		$scope.auth.login('google',{debug:'true'});
  		alert('after auth function');

	}
}]);

