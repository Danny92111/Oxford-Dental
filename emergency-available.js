let getPopUpContainer = document.getElementById("emergency-PopUp");
let getCloseIcon = document.getElementById("close-icon-for-emergency-PopUp");

function closePopUp() {
	getPopUpContainer.style.display = "none";
}
getCloseIcon.addEventListener("click", closePopUp);

function PopUpAppear() {
	setTimeout(function() {
		$("#emergency-PopUp").animate({opacity: "1"},"slow");
		$("#emergency-PopUp").css({display: "flex"});
	},2000)
}



window.addEventListener("load", PopUpAppear);