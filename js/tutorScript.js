/**
 * @file tutorScript.js
 * @project Gradetime App, CSE 170
 * @author Jialiang (Eric) Zhou
 * @author Oliver Kelton
 * @date Nov. 8, 2017
 * @for find_tutor.html
 * @description Loads list of tutors to find_tutors.html on load. Allows user to book an
 * appointment with each tutor in a popup box. Data for tutors contained in this script,
 * not in a database. Simulates server-side script (app currently lacks server).
 */

/* Toggles whether to show dropdown menu
 * TODO: rename function, make descriptive*/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");//toggle whether to show dropdown menu
}//end myFunction

/**
 * inserts a list of appt times into a given element
 * @param element: the element to insert the list into. Does not need to be
 * enclosed in $()
 * @param appts: 2d array containing appt times in form [val, txt]. val is 24-hr time,
 * txt is the 12-hr time to display
 * @return none
 */
function insertApptTimes(element, appts) {
	if (appts == null || appts.length < 1) return;
	element = $(element);
	for (var i = 0; i < appts.length; i++) {
		if (appts[i].length != 2) return;//edge case
		var val = appts[i][0]; var txt = appts[i][1];
		var option = '<option value="' + val + '">' + txt + '</option>';
		//console.log(option);
		element.append(option);
	}//end for loop i
}//end insertApptTimes
/**
 * fills "make appointment" menu with possible times for appointment. Values in 24 hr time,
 * text in 12 hr time + am/pm.
 * @param firstTime: first available time; string in format "hh:mm". 24 hr time
 * @param lastTime: last available time; string in format "hh:mm". 24 hr time
 * @param interval: number of minutes between each available appointment. int
 * @return 2d array containing arrays of 24-hr values and 12-hr times [val, txt]
 */
function createOptions(firstTime, lastTime, interval) {
	var firstInfo = firstTime.split(':');//splits firstTime into ["hour", "minutes"]
	var lastInfo = lastTime.split(':');//splits lastTime into ["hour", "minutes"]
	var firstNums = [parseInt(firstInfo[0],10), parseInt(firstInfo[1],10)];//firstInfo to ints
	var lastNums = [parseInt(lastInfo[0],10), parseInt(lastInfo[1],10)];//firstInfo to ints
	
	var apptTimes = [];//values and text for appointment times, each in an array of length 2
	var i = 0, safety = 999999;//iterators
	var hr = firstNums[0], mins = firstNums[1];//initial hours and minutes
	var limit = (lastNums[0] * 60) + lastNums[1]; var time = (hr * 60) + mins;//total time in minutes
	
	/*Iterate through all possible appt times at interval between firstTime and lastTime,
	 create new array holding them.*/
	while (time <= limit && i < safety) {
		//txt = text between tags, val = value attribute
		var txt = "", val = "", AmPm = ' am';
		if (mins < 10) val += hr + ":0" + mins;//ex: "10:06" instead of "10:6"
		else val = "" + hr + ":" + mins;
		var hrDisp = hr;
		if (hrDisp >= 12) {//sets time in am/pm
			hrDisp = hr % 12;
			if (hrDisp == 0) hrDisp = 12;
			AmPm = ' pm';
		}
		if (mins < 10) txt += hrDisp + ":0" + mins + AmPm;//ex: "10:06" instead of "10:6"
		else txt += hrDisp + ":" + mins + AmPm;
		mins += interval;
		while (mins >= 60) {
			mins -= 60;
			hr++;
		}
		apptTimes.push([val, txt]);
		i++; time = (hr * 60) + mins;//time in minutes
	}//end while loop
	return apptTimes;
}//end function createOptions

//Close the dropdown if the user clicks outside of it
function closeDropdown(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}//end closeDropdown

/* loads list of tutors. List of tutors contained in tutors.js
 * TODO: move tutor data to Database.js*/
function loadtutors() {
	var node = document.getElementById('tutor-table');
	var source = document.getElementById('template-1').innerHTML;
	var template = Handlebars.compile(source);
	
	for (var i in tutors) {
		var currHTML = template(tutors[i]);
		node.innerHTML += currHTML;
	}
}//end loadtutors

/************************Begin Main Method**********************/
var main = function() {
	loadtutors();
	console.log(tutors);
	window.addEventListener('click',closeDropdown);//close dropdown when user clicks outside menu
	/*Create appointment times at 15 minute intervals from 9:00 am to 8:00 pm*/
	var appointments = createOptions('9:00', '20:00', 15);
	insertApptTimes('#time', appointments);
};//end main method

window.onload = main;//executes main function on load
