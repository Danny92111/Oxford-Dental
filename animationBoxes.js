let getBoxes = document.querySelectorAll("#treatment-boxes-container a");
// Get anchor containers
let getFirstBox = getBoxes[0];
let getSecondBox = getBoxes[1];
let getThirdBox = getBoxes[2];

// get boxes within the anchor container

let box1 = document.getElementById("Picture-Dental-Implants");
let box2 = document.getElementById("Picture-Dental-Crowns");
let box3 = document.getElementById("Picture-Dental-Check-up");



// addEventListeners
getFirstBox.addEventListener("click", FirstBoxAnimationAndLink);
getSecondBox.addEventListener("click", SecondBoxAnimationAndLink);
getThirdBox.addEventListener("click", ThirdBoxAnimationAndLink);

function FirstBoxAnimationAndLink() {
	$('#Picture-Dental-Implants').addClass("rotateBox");
	
	let addHref = setTimeout(function() {
		window.location.href = 'Dental_implants_treatment.html';
	}, 1500); 
	
} 

function SecondBoxAnimationAndLink() {
	$('#Picture-Dental-Crowns').addClass("rotateBox");
	
	let addHref = setTimeout(function() {
		window.location.href = 'crowns_treatment.html';
	}, 1500); 
	
} 

function ThirdBoxAnimationAndLink() {
	$('#Picture-Dental-Check-up').addClass("rotateBox");
	
	let addHref = setTimeout(function() {
		window.location.href = 'cleaning_and_prevention_treatment.html';
	}, 1500); 
	
} 