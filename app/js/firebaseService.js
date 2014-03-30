// firebase service for creating firebase Ref.
angular.module('djWadiApp.firebaseService',['firebase'])
//factory method which will create me a firebase ref
.factory('firebaseRef',['Firebase','FBURL',function($firebase,FBURL){
	return function(path) {
         return new Firebase(pathRef([FBURL].concat(Array.prototype.slice.call(arguments))));
      }
}]);