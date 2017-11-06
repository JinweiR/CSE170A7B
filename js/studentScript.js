/**
 * @file studentScript.js
 * @author Oliver Kelton
 * @date Nov. 4, 2017
 * @description Simulates server-side script for students.html using localstorage.
 * Requires handlebars.js
 * 
 * IMPORTANT -- Protocol for creating/adding html pages:
 * 1. add the tag <meta property="id" value="<page identifier>"> to the head of the html doc
 * 2. in this script, in var main, create var <page identifier>_script = function() {code to execute for page}
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

//contains student first name, last name, and index number
//index begins at zero
var data = [
	{'index': '0', 'first-name': 'Julian', 'last-name':'Jones'},
	{'index': '1', 'first-name': 'Emily', 'last-name':'Jones'},
	{'index': '2', 'first-name': 'Edward', 'last-name':'Jones'},
	{'index': '3', 'first-name': 'Alice', 'last-name':'Jones'}
];

//contains teachers' feedback on students
//fields: class, date, msg, status(good/bad)
//stored as a hashmap so data can be referenced using 'curr-student'
var feedback = {
	'0' : [{'class': 'Spanish', 'status': 'good', 'date': '11-3-2017', 'msg': 'Great job on the skit!'},
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
	};//end var conference_script


//this is the code that will execute when the page is loaded
var main = function() {
	/*choose which script to execute, based on the page*/
	var currPage = $('meta[property="id"]').attr('value');
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
	}//end switch
};//end var main

$(document).ready(main);//executes script when page loads
