var main = function() {
	//initialize student name
		var currStudent = localStorage.getItem('curr-student');
		var currData = ref[currStudent];
		var name = currData['first-name'];
		
		var header = $('#feedback-header').text();
		header += name + ":";
		$('#feedback-header').text(header);
		
		//fill in feedback
		var destination = $('#feedback-posts');
		var feedbackData = feedback[currStudent];
		
		var source = $('#template-1').html();
		var template = Handlebars.compile(source);
		
		for (var i = 0; i < feedbackData.length; i++) {
			var data = feedbackData[i];
			var currHtml = template(data);
			destination.append(currHtml);
		}//end for loop i
		
		//fill in teachers and classes dropdown menu
		destination = $('#teacher-select');
		currData = classList[currStudent];
		
		source = $('#template-2').html();
		template = Handlebars.compile(source);
		
		for (var j = 0; j < currData.length; j++) {
			var currClass = currData[j];
			var data = classes[currClass];
			var currHtml = template(data);
			destination.append(currHtml);
		}//end for loop j
		
		var options = document.getElementById('teacher-select').getElementsByTagName('option');
		for (var m = 0; m < options.length; m++) {
			options[m + 1].value = currData[m];
		}
		
		destination = $('#teacher-response-div');
		currData = responsesRef[currStudent];
		
		source = $('#template-3').html();
		template = Handlebars.compile(source);
		
		for (var k = 0; k < currData.length; k++) {
			var currResp = currData[k];
			var currHtml = template(currResp);
			destination.append(currHtml);
		}//end for loop k
		
		/*Apply value to each teacher response, update localStorage based on value*/
		applyValues('#teacher-response-div','.response-msg');
		$(document).on('click','.response-msg',function() {
			var val = $(this).attr('value');
			//alert("Val: " + val);//---tester
			localStorage.setItem('curr-response',val);
		});
};//end main function

$(document).ready(main);
