function pushMessage() {
	var itemRef = "unanswered-" + localStorage.getItem('curr-student');
	var header = document.getElementById('subject').value;//message header
	var classRef = document.getElementById('teacher-select').value;//teacher's name
	var currClass = classes[classRef];
	var teacher = currClass['teacher'];
	var d = new Date();
	var date = d.toDateString();//date at sending
	var content = document.getElementById('problem').value;//content of the message
	var newItem = {
		'header': header,
		'teacher': teacher,
		'date': date,
		'content': content
	};
	pushToItem(itemRef, newItem);
}//end function pushMessage

/**
 * displays all feedback posts (<div class="feedback-post">). Changes all posts'
 * style to "display: block"
 * @param None
 * @return None
 */
function show_feedback() {
	$('div.feedback-post').css('display','block');
};//end function show_feedback

/**
 * hides all feedback posts ('div.feedback-post') beyond a certain number.
 * @param showNum == number of posts to show after hiding other posts
 * @return None
 */
function hide_feedback(showNum) {
	if (showNum < 0) showNum *= -1;
	var posts = $('body').find('div.feedback-post');
	for (var i = 0; i < posts.length; i++) {
		if (i > showNum - 1) $(posts[i]).css('display','none');
	}//end for loop i
};//end function hide_feedback

var hideFeedback = hide_feedback(3);

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
	
	$(document).ready(function() {
		hide_feedback(3);
	});
	
	/*For GA*/
	var gaTarget = document.getElementById('show_unread_btn');
	gaTarget.addEventListener('click', function() {
		gaConference();
	});
	
	$(document).on('click','#see-more-button',function() {
		if ($('#feedback-posts').hasClass('expanded')) {
			hide_feedback(3);
			$('#see-more-button').text('See More');
			$('#feedback-posts').removeClass('expanded');
		} else {
			show_feedback();
			$('#see-more-button').text('See Less');
			$('#feedback-posts').addClass('expanded');
		}
	});
	
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
		$('#feedback-posts').css('height',feedbackHeight);
		$('#see-more-button').text('See More');
		$('#feedback-posts').removeClass('show-more');
	}
	
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
		pushMessage();//adds message to localStorage
		var currClass = document.getElementById('teacher-select').value;
		localStorage.setItem('curr-class',currClass);
		window.location = "./question-submitted.html";
		return false;
	});
};

$(document).ready(main);
