var currStudent = localStorage.getItem('curr-student');
var currData = responsesRef[currStudent];
var ref = parseInt(localStorage.getItem('curr-response'),10);
var currResponse = currData[ref];
var replyItem = "replies-" + currStudent + "-" + ref;//for localStorage

/*Initialize page using handlebars*/
function initialize() {
	$('#message-name').text("RE: " + currResponse['subject']);
	var currClass = classes[currResponse['class']];//get hashmap for current class
	var teacherName = currClass['teacher'];//get teacher's name
	var className = currClass['name'];//get class name
	var date = currResponse['date'];
	$('#teacher-name').text("From: " + teacherName + ", " + className);//fill in teacher's name, class
	$('#message').text(currResponse['msg']);//insert message text
	document.getElementById('date').innerHTML += date;
	
	/*Get replies*/
	try {
		appendList(replyItem, 'template-1', 'reply-list', true);//could cause errors
	} catch(err) {console.log("Failed to get data from " + replyItem)}
	
	/*Record responses (no actual functionality right now)*/
	var submitButton = document.getElementById('submit');
	submitButton.addEventListener('click', recordReply);
	
	/*Reset notifications when textarea clicked*/
	document.getElementById('reply-textarea').addEventListener('click', resetNotifs);
}//end function initialize

/*Record responses (no actual functionality right now)*/
function recordReply() {
	/*Append reply to reply list*/
	var subject = currResponse['subject'];
	var d = new Date();
	var date = d.toDateString() + "";
	var content = document.getElementById('reply-textarea').value;
	var info = {
		'subject': subject,
		'sender': 'You',
		'date': date,
		'content': content
	};
	var source = document.getElementById('template-1').innerHTML;
	var template = Handlebars.compile(source);
	var newReply = template(info);
	var target = document.getElementById('reply-list').innerHTML;
	document.getElementById('reply-list').innerHTML = newReply + target;
	
	/*Push information to localStorage*/
	pushToItem(replyItem, info);
	
	/*Notify user that reply has been made*/
	$('#response-recorded-p').css('display','inline');
	document.getElementById('reply-textarea').value = '';
}//end function recordReply

/**
 * Resets "Your response has been recorded" to display: none. Should be called
 * when the user clicks on the textarea.
 */
function resetNotifs() {
	$('#response-recorded-p').css('display','none');
	console.log("resetNotifs");
}//end function resetNotifs

var main = function() {
	initialize();
};//end var main

window.onload = main;