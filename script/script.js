
// Popup window code
function login(showhide){
	if(showhide == "show"){
		document.getElementById('popupbox').style.visibility="visible";
	}else if(showhide == "hide"){
		document.getElementById('popupbox').style.visibility="hidden"; 
	}
	}
	function login1(showhide){
	if(showhide == "show"){
		document.getElementById('popupbox1').style.visibility="visible";
	}else if(showhide == "hide"){
		document.getElementById('popupbox1').style.visibility="hidden"; 
	}
	}
//time cutdown
// Set the date we're counting down to
var countDownDate = new Date("Jan 21, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);	