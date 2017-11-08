var main = function() {
	//initialize page according to data
		var source = $('#template-1').html();
		var template = Handlebars.compile(source);
	
		var destination = $('#drop-menu');
		
		var currStudent = localStorage.getItem('curr-student');
		var student = ref[currStudent];
		var firstName = student['first-name'];
		$('#student-name').text(firstName);
		
		//add dropdown menu
		for (var i = 0; i < data.length; i++) {
			var currData = data[i];
			var currHtml = template(currData);
			if (currData['index'] != localStorage.getItem('curr-student'))
				destination.append(currHtml);
		}//end for loop i
	
		//set current student when the user clicks on a student
		$(document).on('click','.student-option',function() {
			var currStudent = $(this).attr('value');
			localStorage.setItem('curr-student',currStudent);
			window.location = "./features.html";
		});
};

$(document).ready(main);
