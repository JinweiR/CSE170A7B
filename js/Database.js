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
	'CALC_AP' : {'name':'AP Calculus', 'teacher':'Schaffer', 'average': '88'},
	'SPAN_4' : {'name':'Spanish IV', 'teacher':'Rodriguez', 'average': '86'},
	'BIO_HON' : {'name':'Honors Biology', 'teacher':'Lynne', 'average': '92'},
	'CHEM_HON' : {'name':'Honors Chemistry', 'teacher':'Wu', 'average': '89'},
	'ENG_LIT' : {'name':'English Literature', 'teacher':'Park', 'average': '87'},
	'HIST' : {'name':'History', 'teacher':'Johnson', 'average': '84'},
	'TRIG' : {'name':'Trigonometry', 'teacher':'Miyamoto', 'average': '85'}
};

//hashmap of students by index to an array of their classes
var classList = {
	'0' : ['SPAN_4','CALC_AP','BIO_HON'],
	'1' : ['ENG_LIT','CHEM_HON','TRIG','HIST'],
	'2' : ['SPAN_4','CALC_AP','BIO_HON'],
	'3' : ['ENG_LIT','CHEM_HON','TRIG','HIST']
};

//allows you to retrieve data using the item 'curr-student' in localStorage
var ref = {
	'0' : data[0],
	'1' : data[1],
	'2' : data[2],
	'3' : data[3]
};

var assignments0 = [
	{'class': 'SPAN_4', 'name': 'Skit 1', 'grade': '88', 'weight': '140', 'pdf': './GradePDF/JulianSpaskit1.pdf'},
	{'class': 'SPAN_4', 'name': 'Quiz 1', 'grade': '82', 'weight': '60', 'pdf': './GradePDF/JulianSpaQuiz1.pdf'},
	{'class': 'CALC_AP', 'name': 'Review Quiz 1', 'grade': '92', 'weight': '60', 'pdf': './GradePDF/JulianCalReview.pdf'},
	{'class': 'CALC_AP', 'name': 'Homework 1', 'grade': '94', 'weight': '100', 'pdf': './GradePDF/JulianCalHW1.pdf'},
	{'class': 'CALC_AP', 'name': 'Pop Quiz 1', 'grade': '78', 'weight': '60', 'pdf': './GradePDF/JulianCalPop .pdf'},
	{'class': 'BIO_HON', 'name': 'Lab 1', 'grade': '87', 'weight': '120', 'pdf': './GradePDF/JulianBioLab1.pdf'},
	{'class': 'BIO_HON', 'name': 'Lab 2', 'grade': '88', 'weight': '120', 'pdf': './GradePDF/JulianBioLab2.pdf'}
];
var assignments1 = [
	{'class': 'ENG_LIT', 'name': 'Essay 1', 'grade': '91', 'weight': '140', 'pdf': './GradePDF/EmilyLitEssay1.pdf'},
	{'class': 'CHEM_HON', 'name': 'Lab 1', 'grade': '86', 'weight': '120', 'pdf': './GradePDF/EmilyChemLab1.pdf'},
	{'class': 'TRIG', 'name': 'Pop Quiz', 'grade': '88', 'weight': '80', 'pdf': './GradePDF/EmilyTriQuiz.pdf'},
	{'class': 'HIST', 'name': 'Presentation 1', 'grade': '92', 'weight': '140', 'pdf': './GradePDF/EmilyPresentation.pdf'},
	{'class': 'CHEM_HON', 'name': 'Lab Report 1', 'grade': '96', 'weight': '140', 'pdf': './GradePDF/EmilyChemLabReport.pdf'},
	{'class': 'ENG_LIT', 'name': 'Essay 2', 'grade': '94', 'weight': '140', 'pdf': './GradePDF/EmilyLitEssay2.pdf'}
];
var assignments2 = [
	{'class': 'SPAN_4', 'name': 'Skit 1', 'grade': '88', 'weight': '140', 'pdf': './GradePDF/EdwardSpaskit1.pdf'},
	{'class': 'SPAN_4', 'name': 'Quiz 1', 'grade': '82', 'weight': '60', 'pdf': './GradePDF/EdwardSpaQuizq.pdf'},
	{'class': 'CALC_AP', 'name': 'Review Quiz 1', 'grade': '92', 'weight': '60', 'pdf': './GradePDF/EdwardCalQuiz.pdf'},
	{'class': 'CALC_AP', 'name': 'Homework 1', 'grade': '94', 'weight': '100', 'pdf': './GradePDF/EdwardCalHomework1.pdf'},
	{'class': 'BIO_HON', 'name': 'Lab 1', 'grade': '87', 'weight': '120', 'pdf': './GradePDF/EdwardBioLab1.pdf'},
	{'class': 'BIO_HON', 'name': 'Lab 2', 'grade': '88', 'weight': '120', 'pdf': './GradePDF/EdwardBioLab2.pdf'}
];
var assignments3 = [
	{'class': 'ENG_LIT', 'name': 'Essay 1', 'grade': '91', 'weight': '140', 'pdf': './GradePDF/AliceLitEssay1.pdf'},
	{'class': 'CHEM_HON', 'name': 'Lab 1', 'grade': '86', 'weight': '120', 'pdf': './GradePDF/AliceChemLab1.pdf'},
	{'class': 'TRIG', 'name': 'Pop Quiz', 'grade': '88', 'weight': '80', 'pdf': './GradePDF/AliceTriQuiz.pdf'},
	{'class': 'HIST', 'name': 'Presentation 1', 'grade': '92', 'weight': '140', 'pdf': './GradePDF/AlicePresentation.pdf'},
	{'class': 'CHEM_HON', 'name': 'Lab Report 1', 'grade': '96', 'weight': '140', 'pdf': './GradePDF/AliceChemLabReport.pdf'},
	{'class': 'ENG_LIT', 'name': 'Essay 2', 'grade': '94', 'weight': '140', 'pdf': './GradePDF/AliceLitEssay2.pdf'}
];
/*Maps 'curr-student' to array of their assignments*/
var assignmentsRef = {
	'0': assignments0,
	'1': assignments1,
	'2': assignments2,
	'3': assignments3,
};
/*Responses to questions by parent*/
var responses0 = [
	{'class': 'CALC_AP','subject': 'Sick Day','msg': 'It will be just fine. He can take the quiz on the first day of class' +
	'after he comes back. \nRegards, Schaffer.', 'date': 'Mon Nov 6 2017'},
	{'class': 'SPAN_4','subject': 'Regrading Homework 1','msg': 'I\'m sorry, the deadline for regrading has passed. I hope ' +
	'he does better on the next assignment. \n-Rodriguez', 'date': 'Mon Nov 6 2017'}
];
var responses1 = [
	{'class': 'ENG_LIT','subject': 'Regrading Homework 1','msg': 'I\'m sorry, the deadline for regrading has passed. I hope ' +
	'she does better on the next assignment. \n-Park', 'date': 'Mon Nov 6 2017'},
	{'class': 'TRIG','subject': 'Sick Day','msg': 'It will be just fine. She can take the quiz on the first day of class ' +
	'after she comes back. \nRegards, Miyamoto.', 'date': 'Mon Nov 6 2017'}
];
var responses2 = [
	{'class': 'CALC_AP','subject': 'Sick Day','msg': 'It will be just fine. He can take the quiz on the first day of class ' +
	'after he comes back. \nRegards, Schaffer.', 'date': 'Mon Nov 6 2017'},
	{'class': 'SPAN_4','subject': 'Regrading Homework 1','msg': 'I\'m sorry, the deadline for regrading has passed. I hope ' +
	'he does better on the next assignment. \n-Rodriguez', 'date': 'Mon Nov 6 2017'}
];
var responses3 = [
	{'class': 'ENG_LIT','subject': 'Regrading Homework 1','msg': 'I\'m sorry, the deadline for regrading has passed. I hope ' +
	'she does better on the next assignment. \n-Park', 'date': 'Mon Nov 6 2017'},
	{'class': 'TRIG','subject': 'Sick Day','msg': 'It will be just fine. She can take the quiz on the first day of class ' +
	'after he comes back. \nRegards, Miyamoto.', 'date': 'Mon Nov 6 2017'}
];
/*Maps 'curr-student' to array of teacher responses'*/
var responsesRef = {
	'0': responses0,
	'1': responses1,
	'2': responses2,
	'3': responses3
};

var defaultThreshold = 80;//for grade alerts

/*Records current page, unless page is Settings, Help, or Different Students*/
function setSavedPage() {
	var pageRef = $('#pageId').attr('value');
	//if not one of special pages
	if (pageRef != 'help' && pageRef != 'settings' && pageRef != 'students' && pageRef != 'response')
		localStorage.setItem('saved-page', window.location);
}//end function setSavedPage

window.onload = setSavedPage();//saves url to redirect back
