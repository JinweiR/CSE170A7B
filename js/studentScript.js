/**
 * @file studentScript.js
 * @author Oliver Kelton
 * @date Nov. 4, 2017
 * @description Simulates server-side script for students.html using localstorage.
 * Requires handlebars.js
 * 
 * IMPORTANT -- Protocol for creating/adding html pages:
 * 1. add the tag <meta id="pageId" value="<page identifier>"> to the head of the html doc
 * 2. in this script, create var <page identifier>_script = function() {code to execute for page}
 * 3. in the switch statement at the end of var main, add the following:
 * 	 case <page identifier>:
 * 		$(document).ready(<page identifier>_script);
 * 		break;
 * 4. add the following to the head of the html doc:
 * 		<script src="./js/handlebars-v4.0.11.js"></script>
		<script src="./js/studentScript.js"></script>
		
	Other Notes:
	- Index of current student is held in localstorage as 'curr-student'.
	- To access data for the current student, use the following protocol:
		var currStudent = localStorage.getItem('curr-student');
		var currData = ref[currStudent];
		var item = currData['item'];
 */

/**
 * replaces value of key 'on' in 'subject' with value in 'source' with key
 * equivalent to original value of 'on'
 * @param Hashmap subject: Hashmap containing key 'on'
 * @param Hashmap source: Hashmap from which replacement values are drawn
 * @param string on: key value on which to merge Hashmaps
 * @return Hashmap with merged data
 */
function applyValues(parentDiv, className) {
	var parent = $(parentDiv);
	var children = parent.find(className);
	for (var i = 0; i < children.length; i++) {
		$(children[i]).attr('value',i);
	}//end for loop i
};
//contains student first name, last name, and index number
//index begins at zero
var data = [
	{'index': '0', 'first-name': 'Julian', 'last-name':'Jones', 'gpa': '3.89'},
	{'index': '1', 'first-name': 'Emily', 'last-name':'Jones', 'gpa': '3.94'},
	{'index': '2', 'first-name': 'Edward', 'last-name':'Jones', 'gpa': '3.91'},
	{'index': '3', 'first-name': 'Alice', 'last-name':'Jones', 'gpa': '3.87'}
];

//contains teachers' feedback on students
//fields: class, date, msg, status(good/bad)
//stored as a hashmap so data can be referenced using 'curr-student'
var feedback = {
	'0' : [{'class': 'SPAN_4', 'status': 'good', 'date': '11-3-2017', 'msg': 'Great job on the skit!'},
		{'class': 'Calculus', 'status': 'bad', 'date': '10-31-2017', 'msg': 'Not spooky enough 4me'},
		{'class': 'Biology', 'status': 'bad', 'date': '10-27-2017', 'msg': 'Don\'t play with bunsen burners.'},
		{'class': 'Spanish', 'status': 'good', 'date': '', 'msg': 'Muy bien!'}
	],//Julian
	'1' : [{'class': 'English', 'status': 'good', 'date': '11-3-2017', 'msg': 'Great job on Shakespeare!'},
		{'class': 'Trigonometry', 'status': 'bad', 'date': '10-31-2017', 'msg': '2spooky4me'},
		{'class': 'Chemistry', 'status': 'bad', 'date': '10-27-2017', 'msg': 'Breaking Bad is not a documentary.'},
		{'class': 'History', 'status': 'good', 'date': '', 'msg': 'Excellent defense of federalism!'}
	],//Emily
	'2' : [{'class': 'Spanish', 'status': 'good', 'date': '11-3-2017', 'msg': 'Great job on the skit!'},
		{'class': 'Calculus', 'status': 'bad', 'date': '10-31-2017', 'msg': 'Not spooky enough 4me'},
		{'class': 'Biology', 'status': 'bad', 'date': '10-27-2017', 'msg': 'Don\'t play with bunsen burners.'},
		{'class': 'Spanish', 'status': 'good', 'date': '', 'msg': 'Muy bien!'}
	],//Edward
	'3' : [{'class': 'English', 'status': 'good', 'date': '11-3-2017', 'msg': 'Great job on Shakespeare!'},
		{'class': 'Trigonometry', 'status': 'bad', 'date': '10-31-2017', 'msg': '2spooky4me'},
		{'class': 'Chemistry', 'status': 'bad', 'date': '10-27-2017', 'msg': 'Breaking Bad is not a documentary.'},
		{'class': 'History', 'status': 'good', 'date': '', 'msg': 'Excellent defense of federalism!'}
	],//Alice
};//end var feedback

//hashmap of class codes to class names and teacher names
var classes = {
	'CALC_AP' : {'name':'AP Calculus', 'teacher':'Schaffer'},
	'SPAN_4' : {'name':'Spanish IV', 'teacher':'Rodriguez'},
	'BIO_HON' : {'name':'Honors Biology', 'teacher':'Lynne'},
	'CHEM_HON' : {'name':'Honors Chemistry', 'teacher':'Wu'},
	'ENG_LIT' : {'name':'English Literature', 'teacher':'Park'},
	'HIST' : {'name':'History', 'teacher':'Johnson'},
	'TRIG' : {'name':'Trigonometry', 'teacher':'Miyamoto'}
};

//hashmap of students by index to an array of their classes
var classList = {
	'0' : ['SPAN_4','CALC_AP','BIO_HON'],
	'1' : ['ENG_LIT','CHEM_HON','TRIG','HIST'],
	'2' : ['SPAN_4','CALC_AP','BIO_HON'],
	'3' : ['ENG_LIT','CHEM_HON','TRIG','HIST']
};

//allows you to retrieve data using the item 'curr-student'
var ref = {
	'0' : data[0],
	'1' : data[1],
	'2' : data[2],
	'3' : data[3]
};
/**
 * assignment arrays store assignments for each student, indexed by student number (see 'ref')
 */
var assignments0 = [
	{'class': 'SPAN_4', 'name': 'Skit 1', 'grade': '88'},
	{'class': 'SPAN_4', 'name': 'Quiz 1', 'grade': '82'},
	{'class': 'CALC_AP', 'name': 'Review Quiz 1', 'grade': '92'},
	{'class': 'CALC_AP', 'name': 'Homework 1', 'grade': '94'},
	{'class': 'BIO_HON', 'name': 'Lab 1', 'grade': '87'},
	{'class': 'BIO_HON', 'name': 'Lab 2', 'grade': '88'}
];
var assignments1 = [
	{'class': 'ENG_LIT', 'name': 'Essay 1', 'grade': '91'},
	{'class': 'CHEM_HON', 'name': 'Lab 1', 'grade': '86'},
	{'class': 'TRIG', 'name': 'Pop Quiz', 'grade': '88'},
	{'class': 'HIST', 'name': 'Presentation 1', 'grade': '92'},
	{'class': 'CHEM_HON', 'name': 'Lab Report 1', 'grade': '96'},
	{'class': 'ENG_LIT', 'name': 'Essay 2', 'grade': '94'}
];
var assignments2 = [
	{'class': 'SPAN_4', 'name': 'Skit 1', 'grade': '88'},
	{'class': 'SPAN_4', 'name': 'Quiz 1', 'grade': '82'},
	{'class': 'CALC_AP', 'name': 'Review Quiz 1', 'grade': '92'},
	{'class': 'CALC_AP', 'name': 'Homework 1', 'grade': '94'},
	{'class': 'BIO_HON', 'name': 'Lab 1', 'grade': '87'},
	{'class': 'BIO_HON', 'name': 'Lab 2', 'grade': '88'}
];
var assignments3 = [
	{'class': 'ENG_LIT', 'name': 'Essay 1', 'grade': '91'},
	{'class': 'CHEM_HON', 'name': 'Lab 1', 'grade': '86'},
	{'class': 'TRIG', 'name': 'Pop Quiz', 'grade': '88'},
	{'class': 'HIST', 'name': 'Presentation 1', 'grade': '92'},
	{'class': 'CHEM_HON', 'name': 'Lab Report 1', 'grade': '96'},
	{'class': 'ENG_LIT', 'name': 'Essay 2', 'grade': '94'}
];
var assignmentsRef = {
	'0': assignments0,
	'1': assignments1,
	'2': assignments2,
	'3': assignments3,
};
/*Responses to questions by parent*/
var responses0 = [
	{'class': 'CALC_AP','subject': 'Sick Day','msg': 'It will be just fine. He can take the quiz on the first day of class' +
	'after he comes back. \nRegards, Schaffer.'},
	{'class': 'SPAN_4','subject': 'Regrading Homework 1','msg': 'I\'m sorry, the deadline for regrading has passed. I hope' +
	'he does better on the next assignment. \n-Rodriguez'}
];
var responses1 = [
	{'class': 'ENG_LIT','subject': 'Regrading Homework 1','msg': 'I\'m sorry, the deadline for regrading has passed. I hope' +
	'he does better on the next assignment. \n-Johnson'},
	{'class': 'TRIG','subject': 'Sick Day','msg': 'It will be just fine. He can take the quiz on the first day of class' +
	'after he comes back. \nRegards, Miyamoto.'}
];
var responses2 = [
	{'class': 'CALC_AP','subject': 'Sick Day','msg': 'It will be just fine. He can take the quiz on the first day of class' +
	'after he comes back. \nRegards, Schaffer.'},
	{'class': 'SPAN_4','subject': 'Regrading Homework 1','msg': 'I\'m sorry, the deadline for regrading has passed. I hope' +
	'he does better on the next assignment. \n-Rodriguez'}
];
var responses3 = [
	{'class': 'ENG_LIT','subject': 'Regrading Homework 1','msg': 'I\'m sorry, the deadline for regrading has passed. I hope' +
	'he does better on the next assignment. \n-Johnson'},
	{'class': 'TRIG','subject': 'Sick Day','msg': 'It will be just fine. He can take the quiz on the first day of class' +
	'after he comes back. \nRegards, Miyamoto.'}
];
var responsesRef = {
	'0': responses0,
	'1': responses1,
	'2': responses2,
	'3': responses3
};
//scripts for each page
var index_script = function() {
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
	};//end var index-script
var features_script = function() {
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
	};//end var features-script
var conference_script = function() {
		//initialize student name
		var currStudent = localStorage.getItem('curr-student');
		var currData = ref[currStudent];
		var name = currData['first-name'];
		
		var header = $('#feedback-header').text();
		header += name + ":";
		$('#feedback-header').text(header);
		/*
		//test joinMaps
		var testFeedback = feedback['0'];
		var testData = joinMaps(testFeedback[0], classes, 'class');
		var testItem = testData['class'];
		alert(testItem.toString());//tester
		*/
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
		destination = $('#dropdown-content');
		currData = classList[currStudent];
		
		source = $('#template-2').html();
		template = Handlebars.compile(source);
		
		for (var j = 0; j < currData.length; j++) {
			var currClass = currData[j];
			var data = classes[currClass];
			var currHtml = template(data);
			destination.append(currHtml);
		}//end for loop j
		
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
	};//end var conference_script
var response_script = function() {
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
};//end var response_script
var grade_script = function() {
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
};//end grade_script
var assignments_script = function() {
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
	for (var i = 0; i < assignmentList.length; i++) {
		var currAssgn = assignmentList[i];
		if (currAssgn['class'] == currIndex) {
			var currHtml = template(currAssgn);
			destination.append(currHtml);
		}
	}//end for loop i
};

//this is the code that will execute when the page is loaded
var main = function() {
	/*choose which script to execute, based on the page*/
	var currPage = $('#pageId').attr('value');
	//alert(currPage);//tester
	
	switch(currPage) {
		case 'students':
			$(document).ready(index_script);
			break;
		case 'features':
			$(document).ready(features_script);
			break;
		case 'conference':
			$(document).ready(conference_script);
			break;
		case 'grades':
			$(document).ready(grade_script);
			break;
		case 'assignments':
			$(document).ready(assignments_script);
			break;
		case 'response':
			$(document).ready(response_script);
			break;
	}//end switch
};//end var main

$(document).ready(main);//executes script when page loads
