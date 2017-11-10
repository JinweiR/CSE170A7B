var main = function() {
	var redirect = localStorage.getItem('saved-page');
	$('#back-link').attr('href', redirect);
	
	$(document).on('click','#submit',function() {
		$('#submit-alert-p').css('display','inline');
		$('#problem-textarea').val('');
	});
};

$(document).ready(main);
