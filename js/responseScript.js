var main = function() {
	var currData = responsesRef[localStorage.getItem('curr-student')];
	var ref = parseInt(localStorage.getItem('curr-response'),10);
	//alert("Ref: " + ref);//---tester
	var currResponse = currData[ref];
	
	$('#message-name').text("RE: " + currResponse['subject']);
	var currClass = classes[currResponse['class']];
	var teacherName = currClass['teacher'];
	var className = currClass['name'];
	$('#teacher-name').text("From: " + teacherName + ", " + className);
	$('#message').text(currResponse['msg']);
};//end var main

 $(document).ready(main);