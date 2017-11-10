var main = function() {
	var currStudent = localStorage.getItem('curr-student');
	var currIndex = localStorage.getItem('curr-class');
	var currClass = classes[currIndex];
	var className = currClass['name'];
	$('#class-name').text(className + " Assignments");
	
	/*Insert assignments into table*/
	var destination = $('#center-table');
	var source = $('#template-1').html();
	var template = Handlebars.compile(source);
	var assignmentList = assignmentsRef[currStudent];
	var redirect = true;
	for (var i = 0; i < assignmentList.length; i++) {
		var currAssgn = assignmentList[i];
		if (currAssgn['class'] == currIndex) {
			var currHtml = template(currAssgn);
			destination.append(currHtml);
			redirect = false;
		}
	}//end for loop i
	if (redirect) window.location = './grade.html';
};//end main function

$(document).ready(main);
