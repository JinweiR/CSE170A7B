/**
 * @file link.js
 * @author Oliver Kelton
 * @date Nov. 4, 2017
 * @description Redirects user to another page after clicking an element with class 'link'.
 * URL of new page contained in the element attribute 'href'.
 */

var main = function() {
	$(document).on('click','.link',function() {
		//alert($(this).attr('href'));//tester
		window.location = $(this).attr('href');
	});
};

$(document).ready(main);