var currentRef = new Firebase('https://djwadichat.firebaseio.com');


$( "#Submit" ).on('click',function() {
  console.log('abhijeet');

	var auth = new FirebaseSimpleLogin(currentRef,function(error,user){
		if(error){
			console.log('Error not able to login');
		}
		else if(user){
			console.log('userid: '+ user.id+ "  "+ "provider: "+ user.provider);
		}else{
			console.log('user is logged out');
		}

});
	auth.login('google',{debug:'true'});
});

