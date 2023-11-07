function showTime(){
	var date = new Date();
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59
	var s = date.getSeconds(); // 0 - 59
	var session = "AM";
	
	if(h == 0){
		h = 12;  // shows above as am hours
	}
	
	if(h > 12){
		h = h - 12;
		session = "PM";  // shows above as pm hours
	}
	
	h = (h < 10) ? "0" + h : h; 
	m = (m < 10) ? "0" + m : m; 
	s = (s < 10) ? "0" + s : s; 
	
	var time = h + ":" + m + ":" + s +" " + session;  // format on screen
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay"). textContent = time;
	
	setTimeout(showTime, 1000);
	
}

showTime();


// Countdown till julafton

// Set the date we're counting down to
var countDownDate = new Date("Dec 24, 2023 15:00:00").getTime();

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
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);