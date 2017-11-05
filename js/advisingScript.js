var main = function () {
	var slideSpeed = 200;
	var dropped = false;
	var category = "";
	var feedbackHeight = $('#feedback-posts').height();
	var postHeight = $('.feedback-post:nth-of-type(1)').height();
	
	//alerts
	var alert1 = "Please choose a category for your question.\n";
	var alert2 = "Please enter your comment in the text area.\n";
	var alert3 = "Please leave your phone number or email address.";
	
	//select item from dropdown menu
	$(document).on('click','#select',function() {
		$('.dropdown-content').slideDown(slideSpeed,function() {
			dropped = true;
		});
	});
	
	//select item from dropdown menu
	$(document).on('click','.dropdown-option',function() {
		var newText = $(this).text();
		category = newText;
		$('input[name="category"]').val(category);
		$('#select').children('p').text(newText);
		$('.dropdown-content').slideUp(slideSpeed,function() {
			dropped = false;
		});
		if (category == 'Other') {//slide Custom Category down
			$('#custom-cat-holder').addClass('shown');
			$('#custom-cat-holder').slideDown(slideSpeed);
		}
		else if ($('#custom-cat-holder').hasClass('shown')) {//slide Custom Category back up
			$('#custom-cat-holder').removeClass('shown');
			$('#custom-category').val('');
			$('#custom-cat-holder').slideUp(slideSpeed);
		}
	});
	
	//see more
	function showMore() {
		$('#feedback-posts').height('auto');
		$('#see-more-button').text('See Less');
		$('#feedback-posts').addClass('show-more');
	}
	
	function showLess() {
		//$('#feedback-posts').height('90px');
		$('#feedback-posts').css('height',feedbackHeight);
		$('#see-more-button').text('See More');
		$('#feedback-posts').removeClass('show-more');
	}
	
	$(document).on('click','#see-more-button',function() {
		if ($('#feedback-posts').hasClass('show-more')) {
			showLess();
		}
		else showMore();
	});
	
	//slideUp from wherever
	$(document).on('click','body',function() {
		if (dropped) {
			$('.dropdown-content').slideUp(slideSpeed,function() {
				dropped = false;
			});
		}
	});
	
	/*Toggle notification method*/
	$(document).on('click','.notif',function() {
		$(this).toggleClass("selected");
		$(this).toggleClass("unselected");
				
		if ($('#email').hasClass('selected') && $('#text').hasClass('selected'))
			$('input[name="notification-type"]').val('both');
		else if ($('#email').hasClass('selected'))
			$('input[name="notification-type"]').val('email');
		else if ($('#text').hasClass('selected'))
			$('input[name="notification-type"]').val('text');
		else $('input[name="notification-type"]').val('none');
	});
	
	/*Toggle feedback post expanded/contracted*/
	$(document).on('click','.feedback-post',function() {
		if ($(this).hasClass('expanded')) {
			//alert(postHeight);
			$(this).height($(this).attr('value'));
			$(this).removeClass('expanded');
		} else {
			$(this).attr('value',$(this).height());
			$(this).css('height','auto');
			$(this).addClass('expanded');
		}
	});
	
	//submit button redirect
	$(document).on('click','#submit',function() {
		window.location = "./question-submitted.html";
		return false;
	});
};

$(document).ready(main);
