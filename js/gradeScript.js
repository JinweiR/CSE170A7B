/**
 * file: gradeScript.js
 * project: GradeTime app, CSE 170
 * for: grade.html
 * description: generates a list of classes for the current student according to
 * data in Database.js. Calculates current grade in each class as a percentage,
 * displays next to the class name. Also displays student name and cum. gpa.
 * Requires the jQuery library.
 */

/**
 * Calculates the total grade in a given class by given the assignment grade
 * and weight
 * @param class: class code (i.e. "CALC_AP")
 * @param student: student's index number
 * @return score as a double
 */
function getGrade(classCode, student) {
	/* Possible errors:
	 - DATA IS IN STRINGS
	 - invalid class code
	 - invalid student index*/
	var data = assignmentsRef[student];
	var sumGrades = 0, sumWeights = 0;
	for (var i = 0; i < data.length; i++) {
		currData = data[i];
		if (currData['class'] == classCode) {
			var currWeight = parseInt(currData['weight'], 10);
			var currGrade = parseInt(currData['grade'], 10);
			console.log('CurrGrade: ' + currGrade);
			sumGrades += (currWeight * (currGrade * 0.01));
			sumWeights += currWeight;
		}
	}
	console.log('Grades: ' + sumGrades);
	var output = Math.round((sumGrades / sumWeights) * 100);
	console.log('Grade: ' + output);
	return output;
}//end function getGrade

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
		var classNodes = document.getElementsByClassName('class-option');
		var currNode = classNodes[classNodes.length - 1];
		currNode.innerHTML += getGrade(currKey, currIndex) + "%";
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
