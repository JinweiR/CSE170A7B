var main = function() {
	//initialize page according to data
	var source = $('#student-template').html();
	var template = Handlebars.compile(source);
	
	var destination = $('#students');

	for (var i = 0; i < data.length; i++) {
		var currData = data[i];
		var currHtml = template(currData);
		destination.append(currHtml);
	}//end for loop i
	
	//set current student when the user clicks on a student
	$(document).on('click','.student',function() {
		var currStudent = $(this).attr('value');
		localStorage.setItem('curr-student',currStudent);
	});
};//end main function

$(document).ready(main);
