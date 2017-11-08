var tutors = {0:{'name':'Andrew',
				'age':'21',
				'rating':'4.0',
				'pic':'./ppap.jpg',
				'subject':'AP Calculus'},

			 1:{'name':'Jack',
				'age':'20',
				'rating':'3.7',
				'pic':'./ppap.jpg',
				'subject':'AP Comp Sci'},

			 2:{'name':'Alex',
				'age':'18',
				'rating':'4.5',
				'pic':'./ppap.jpg',
				'subject':'AP Physics'},
			3:{'name':'Jim',
				'age':'18',
				'rating':'4.5',
				'pic':'./ppap.jpg',
				'subject':'AP Physics'},
			4:{'name':'Garry',
				'age':'18',
				'rating':'4.5',
				'pic':'./ppap.jpg',
				'subject':'Math'},

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
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

}

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