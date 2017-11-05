/**
 *NOTE: Requires jQuery.
 *Google jQuery API: https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
 */

var main = function () {
	var slide = 200;
	/**
	* if menu is hidden, drop down, add class 'dropped'
	* if menu has class dropped, slide up, remove class 'dropped'
	*/
	$(document).on('click','.selector', function () {
		if (!$(this).hasClass('dropped')) {
			$($(this).siblings('.drop-menu')).slideDown(slide, function() {
				$(this).addClass('dropped');
			});
		}
	});
	$(document).on('click', 'body', function() {
		$('.dropped').slideUp(slide, function() {
			$('.dropped').removeClass('dropped');
		});
	});
};

$(document).ready(main);
