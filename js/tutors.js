var tutors = {0:{'name':'Andrew Wu',
				'age':'21',
				'rating':'4.0',
				'pic':'http://www.freegreatpicture.com/files/94/28287-business-people-stock.jpg',
				'subject':'AP Calculus'},

			 1:{'name':'Jack Daniels',
				'age':'20',
				'rating':'3.7',
				'pic':'http://compforce.typepad.com/.a/6a00d83451df4569e201a73e1384da970d-pi',
				'subject':'AP Comp Sci'},

			 2:{'name':'Alex Liang',
				'age':'18',
				'rating':'4.5',
				'pic':'https://pbs.twimg.com/media/CynmmdYWgAAjky1.jpg',
				'subject':'AP Physics'},
			3:{'name':'Jim Beam',
				'age':'18',
				'rating':'4.5',
				'pic':'https://thumb1.shutterstock.com/display_pic_with_logo/238468/141327337/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg',
				'subject':'AP Physics'},
			4:{'name':'Gary Johnson',
				'age':'18',
				'rating':'4.5',
				'pic':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Gary_Johnson_campaign_portrait.jpg/1200px-Gary_Johnson_campaign_portrait.jpg',
				'subject':'Math'}

			};

function appoint(name){
	var modal = document.getElementById('pop');
	var span = document.getElementsByClassName("close")[0];
	modal.style.display = "block";
	document.getElementById('name').innerHTML = name;
	span.onclick = function() {
    	modal.style.display = "none";
	}
	window.onclick = function(event) {
    	if (event.target == modal) modal.style.display = "none";
	}

}//end function appoint

function cancel(){
	var modal = document.getElementById('pop');
	modal.style.display = "none";
}

function confirm(){
	var modal = document.getElementById('pop');
	var model = document.getElementById('msg');

	document.getElementById('cel').style.display = "block";
	model.style.display="none";

	var span = document.getElementsByClassName("close")[0];
	span.onclick = function() {
    modal.style.display = "none";
	}
	window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
	}
}


function reset(){
	var modal = document.getElementById('pop');
	var model = document.getElementById('msg');
	model.style.display="block";

    modal.style.display = "none";
    document.getElementById('cel').style.display='none';


   	var span = document.getElementsByClassName("close")[0];
	span.onclick = function() {
    modal.style.display = "none";
	}
	window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
	}


}