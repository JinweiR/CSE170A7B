/**
 * Conducts an experiment for use with Google Analytics. Logs the time that
 * the user clicks the login button, then logs the time the user clicks
 * the "view messages" button in the Conference Center and sends the
 * difference to Google Analytics.
 * @author Oliver Kelton
 * @date Nov 27, 2017
 */

console.log('Script "experiment.js" loaded');
var storageItem = 'timestamp';//logs milliseconds since beginning of Unix epoch (Jan 1, 1970 at 0:00)
var storageItem2 = 'sendToGA';

/**For login page*/
function gaLogin() {
	var d = new Date();
	var timestamp = d.getTime();
	localStorage.setItem(storageItem, timestamp);
	localStorage.setItem(storageItem2, 'true');
	console.log('Timestamp ' + timestamp + ' stored at ' + storageItem);
}//end function gaLogin

/**For conference page*/
function gaConference() {
	var d2 = new Date();
	var timestamp = localStorage.getItem(storageItem);
	var timer = d2.getTime() - parseInt(timestamp, 10);
	var toLog = localStorage.getItem(storageItem2);
	if (toLog == 'true') {
		ga('send', 'timing', 'Teacher Responses', 'find', timer);//---send info to Google Analytics
		console.log("Timer " + timer + " sent to Google Analytics.");//---tester
	}
	localStorage.setItem(storageItem2, 'false');
}//end function gaConference
