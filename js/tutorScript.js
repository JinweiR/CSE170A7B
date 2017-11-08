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
//console.log(tutors);

var block = '<div class="row">\n';//new row
var infoblock = '<div class="info row_block">\n';//new info block
var btn_block = '<div class="btn_block">\n';//new button block

/* loads list of tutors. List of tutors contained in tutors.js
 * TODO: move tutor data to Database.js*/
function loadtutors() {
	var node = document.getElementsByClassName('container')[0];
	var html = '';
	for(var i in tutors){
		var div = document.createElement('div');
  		
		var tutor = tutors[i];
		var name = tutor['name'];
		var age = tutor['age'];
		var rate = tutor['rating'];
		var subject = tutor['subject'];
		var pic = tutor['pic'];

		html += block + '<img class="row_block" '+ 'src="./'+pic+'">'+'\n';
		html = html + infoblock + 'name:  '+name+'<br>\n';
		html = html + 'age:  '+age + '<br>\n' + 'rating:  '+rate+'<br>\n';
		html = html + 'subject:  '+subject+'<br>\n';
		html = html + '</div>\n' + btn_block + '<button class="appt_btn" onclick="';
		html = html + 'appoint(\'' + name + '\')">make<br>appointment</button>\n';
		html = html + '</div>\n</div>\n';
	}
	console.log(html);
	div.innerHTML = html;

	while(div.children.length > 0){
		node.appendChild(div.children[0]);
	}
	
}//end loadtutors

/************************Begin Main Method**********************/
var main = function() {
	loadtutors();
	console.log(tutors);
	window.addEventListener('click',closeDropdown);//close dropdown when user clicks outside menu
};//end main method

window.onload = main;//executes main function on load
