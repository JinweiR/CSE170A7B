/**
 * Requires jQuery library and Database.js
 */
function updateInfo() {
	if ($('#newName').val() != '') accountData['username'] = $('#newName').val();
	if ($('#newEmail').val() != '') accountData['email'] = $('#newEmail').val();
	if ($('#newPhone').val() != '') accountData['phone'] = $('#newPhone').val();
	if ($('#newPassword').val() != '') accountData['password'] = $('#newPassword').val();
	if ($('#newHint').val() != '') accountData['hint'] = $('#newHint').val();
}

function loadInfo() {
	//username
	var currData = accountData['username'];
	$('#username').text("Current Username: " + currData);
	//email
	currData = accountData['email'];
	$('#email').text("Current Email: " + currData);
	//phone number
	currData = accountData['phone'];
	$('#phone').text("Current Phone Number: " + currData);
	//password hint
	currData = accountData['hint'];
	$('#hint').text("Password Hint: " + currData);
}

var main = function() {
	/*Initialize page using Database.js*/
	loadInfo();
	var redirect = localStorage.getItem('saved-page');
	$('#back-link').attr('href', redirect);
	
	/*Update info*/
	$(document).on('click','#submit',function() {
		updateInfo();
		loadInfo();
		$('#change-alert-p').css('display','inline');
		/*Reset input text boxes to empty*/
		$('#newName').val('');
		$('#newEmail').val('');
		$('#newPhone').val('');
		$('#newPassword').val('');
		$('#confirmPassword').val('');
		$('#newHint').val('');
	});
};

$(document).ready(main);
