

var counter = false;
var counter2 = false;
var counter4 = false;
var counter5 = false;
var counter6 = false;

//Change menu button

document.addEventListener("click", () => {
	let getMenuCont = document.querySelector("#Picture-of-Menu-Logo");

	if (isMenuOn == false) {
		getMenuCont.setAttribute("src", "icons/Menu-50-100px/icons8-menu-50.png");
		getMenuCont.src = "icons/Menu-50-100px/icons8-menu-50.png";
	}
	else if (isMenuOn == true) {
		getMenuCont.setAttribute("src", "icons/Menu-50-100px/icons8-close-window-40.png");
		getMenuCont.src = "icons/Menu-50-100px/icons8-close-window-40.png";
	}
})

 // Toggle Menu 
let isMenuOn = false
$("#Picture-of-Menu-Logo").click(function() {
	$("#Toggle-menu").fadeToggle("slow");
	isMenuOn = !isMenuOn;
	console.log(isMenuOn)
})




// Media query 830px  // Link for footer
$(document).ready(function(){     
	$("#Link-from-footer-to-treatments,.Unordered-list-footer-container:nth-child(2) a:first()").click(() => {
    
	if ($(window).width() < 830){

		isMenuOn == false ? $("#Toggle-menu").fadeIn("slow") : $("#Toggle-menu").fadeOut("slow");
		isMenuOn = !isMenuOn;
		let getMenuCont = document.querySelector("#Picture-of-Menu-Logo");
    console.log("isclicked")
	if (isMenuOn == false) {
		getMenuCont.setAttribute("src", "icons/Menu-50-100px/icons8-menu-50.png");
		getMenuCont.src = "icons/Menu-50-100px/icons8-menu-50.png";
	}
	else if (isMenuOn == true) {
		getMenuCont.setAttribute("src", "icons/Menu-50-100px/icons8-close-window-40.png");
		getMenuCont.src = "icons/Menu-50-100px/icons8-close-window-40.png";
	}
	}
	else {
		console.log("desktop");
	}
});
});

// Treatments-Submenu

$("#Treatments-Submenu").click(function() {
	$("#Submenu-container").slideToggle("slow");
})
$("#Link-for-whitespace").click(function() {
	$("#Submenu-container").slideUp("slow");
})

 
 // Faq-Submenu
 $("#Faq-Submenu").click(function() {
	 $("#Faq-Submenu-container").slideToggle("slow");
 })
 $("#Link-for-whitespace").click(function() {
	$("#Faq-Submenu-container").slideUp("slow");
})
 
 // Dental-Implants-Submenu
  
 $("#Dental-Implants-submenu-title").click(function() {
	 $("#Dental-Implants-container").slideToggle("slow");
 })
  // Orthodontic-Submenu
  
$("#Submenu-Orthodontic-title").click(function() {
	$("#Orthodontic-container").slideToggle("slow");
})	 
  
 
  
 //toggle opening hours 
 
$("#Opening-hours-title").click( function(){$("#Opening-hours").toggle("slow");});

let clicked = true;

$("#Opening-hours-title").click(function() {
	if(clicked){
	$(this).css({"background-color":"#cc912e","color":"white"});
	clicked = false;
	} else {
		$(this).css({"background-color":"white","color":"#cc912e"});
		clicked = true;
	}
});



// Smooth scrolling

$('a[href^="#"]').click(function(){

var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 'slow');

return false;});



// toggle Nervous patients Page


$("#FAQ1-Root-canal").click(function() {
	$("#content-FAQ1-Root-canal").slideToggle("slow");
});

$("#FAQ2-Root-canal").click(function() {
	$("#content-FAQ2-Root-canal").slideToggle("slow");
});

$("#FAQ3-Root-canal").click(function() {
	$("#content-FAQ3-Root-canal").slideToggle("slow");
});

$("#FAQ4-Root-canal").click(function() {
	$("#content-FAQ4-Root-canal").slideToggle("slow");
});

$("#FAQ5-Root-canal").click(function() {
	$("#content-FAQ5-Root-canal").slideToggle("slow");
});

$("#FAQ6-Root-canal").click(function() {
	$("#content-FAQ6-Root-canal").slideToggle("slow");
});

$("#FAQ7-Root-canal").click(function() {
	$("#content-FAQ7-Root-canal").slideToggle("slow");
});

$("#FAQ8-Root-canal").click(function() {
	$("#content-FAQ8-Root-canal").slideToggle("slow");
});

$("#FAQ9-Root-canal").click(function() {
	$("#content-FAQ9-Root-canal").slideToggle("slow");
});




 
  

// Toggle Online Form

$(".Book-online-button").click(function() {
	$("#book-online-form").toggle("slow");
})

$("#Book-online-form1-main-page").click(function() {
	getBookOnlineForm = document.getElementById("book-online-form");
	if(getBookOnlineForm.style.display == "block") {
		getBookOnlineForm.style.display = "block";
	} else {
		getBookOnlineForm.style.display = "block";
	}
})
//reload from server
window.onbeforeunload = function(e) {
  window.location.reload(true);
};


	
	
	
	