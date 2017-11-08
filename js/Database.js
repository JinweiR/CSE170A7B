/**
 * "database" containing hashmaps and arrays of students, classes, feedback, messages, etc.
 */

function applyValues(parentDiv, className) {
	var parent = $(parentDiv);
	var children = parent.find(className);
	for (var i = 0; i < children.length; i++) {
		$(children[i]).attr('value',i);
	}//end for loop i
};

/*stores basic data for the parent's account*/
var accountData = {
	'username': 'Lauren',
	'email': 'lauren@example.com',
	'phone': '(555) 555-5555',
	'password': 'P@ssw0rd555',
	'hint': 'Really obvious'
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
	{'class': 'SPAN_4','subject': 'Regrading Homework 1','msg': 'I\'m sorry, the deadline for regrading has passed. I hope ' +
	'he does better on the next assignment. \n-Rodriguez'}
];
var responses1 = [
	{'class': 'ENG_LIT','subject': 'Regrading Homework 1','msg': 'I\'m sorry, the deadline for regrading has passed. I hope ' +
	'she does better on the next assignment. \n-Johnson'},
	{'class': 'TRIG','subject': 'Sick Day','msg': 'It will be just fine. She can take the quiz on the first day of class ' +
	'after he comes back. \nRegards, Miyamoto.'}
];
var responses2 = [
	{'class': 'CALC_AP','subject': 'Sick Day','msg': 'It will be just fine. He can take the quiz on the first day of class ' +
	'after he comes back. \nRegards, Schaffer.'},
	{'class': 'SPAN_4','subject': 'Regrading Homework 1','msg': 'I\'m sorry, the deadline for regrading has passed. I hope ' +
	'he does better on the next assignment. \n-Rodriguez'}
];
var responses3 = [
	{'class': 'ENG_LIT','subject': 'Regrading Homework 1','msg': 'I\'m sorry, the deadline for regrading has passed. I hope ' +
	'she does better on the next assignment. \n-Johnson'},
	{'class': 'TRIG','subject': 'Sick Day','msg': 'It will be just fine. She can take the quiz on the first day of class ' +
	'after he comes back. \nRegards, Miyamoto.'}
];
var responsesRef = {
	'0': responses0,
	'1': responses1,
	'2': responses2,
	'3': responses3
};