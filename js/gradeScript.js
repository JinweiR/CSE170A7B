var main = function() {
	var currIndex = localStorage.getItem('curr-student');
	var currStudent = ref[currIndex];
	var studentName = currStudent['first-name'];
	var studentGPA = currStudent['gpa'];
	
	$('#student-name').text(studentName + "'s Classes:");
	$('#student-gpa').text("Cumulative GPA: " + studentGPA);
	
	/*Create list of classes*/
	var destination = $('#class-list');
	var source = $('#template-1').html();
	var template = Handlebars.compile(source);
	var studentClasses = classList[currIndex];
	
	for (var i = 0; i < studentClasses.length; i++) {
		var currKey = studentClasses[i];
		var currClass = classes[currKey];
		var currHtml = template(currClass);
		destination.append(currHtml);
	}//end for loop i
	
	/*apply class code to each class-option div as value attribute*/
	var options = $('body').find('.center-option');//List of .center-option elements
	for (var j = 0; j < options.length; j++) {
		var code = studentClasses[j];
		$(options[j]).attr('value',code);
	}//end for loop j
	
	/*change value of curr-class item in localStorage*/
	$(document).on('click','.center-option',function() {
		var value = $(this).attr('value');
		localStorage.setItem('curr-class',value);
	});
};

$(document).ready(main);
