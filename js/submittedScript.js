var main = function() {
	var currClass = localStorage.getItem('curr-class');
	var currData = classes[currClass];
	var teacherName = currData['teacher'];
	console.log("teacher: " + teacherName);
	var className = currData['name'];
	console.log("class: " + className);
	
	var putTeacher = document.getElementById('teacher');
	var putClass = document.getElementById('class');
	
	putTeacher.innerHTML = teacherName;
	putClass.innerHTML = className;
};//end main function

window.onload = main;
