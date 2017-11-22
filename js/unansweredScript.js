var itemRef = "unanswered-" + localStorage.getItem('curr-student');
var currItem = localStorage.getItem('curr-response');

var main = function() {
	console.log("currItem: " + currItem);
	var source = document.getElementById('template-1').innerHTML;
	var template = Handlebars.compile(source);
	
	var messages = localStorage.getItem(itemRef);
	var currMessage = JSON.parse(messages);
	console.log(messages);
	var currObj = currMessage[currItem];
	var currHTML = template(currObj);
	document.getElementById('message').innerHTML += currHTML;
};

window.onload = main;
