var main = function() {
	$('body').hide();
	$('body').fadeIn(500);
	localStorage.setItem('saved-page','./index.html');
	
	var homepage = "./index.html";
	var alertA = 'Please enter your username or email address';
	var alertB = 'Please enter your password';
	var alertC = "Invalid username/email";
	var alertD = "Invalid password";
	
	var username = accountData['username'];
	var email = accountData['email'];
	var password = accountData['password'];
	var valid = false;
	
	$(document).on('submit','#entries',function() {
		var getName = $('#username').val();
		var getPass = $('#pass').val();
		if (getName == '') {
			$('#alertA').text(alertA);
		} else {
			$('#alertA').text('');
		}
		if (getPass == '') {
			$('#alertB').text(alertB);
		} else {
			$('#alertB').text('');
		}
		if ((getName == username || getName == email) && getPass == password) {
			valid = true;
		} else {
			$('#alertA').text(alertC);
			$('#alertB').text(alertD);
		}
		if (getName != '' && getPass != '' && valid) 
			window.location = homepage;
		return false;
	});
};

$(document).ready(main);