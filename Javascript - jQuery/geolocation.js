/* Video Javascript File */
/* Author : Igor Filipović */

window.onload = function() {
	var x=document.getElementById("error");
	(function () {
		document.getElementById("demoGeolocation").style.visibility="hidden";
		document.getElementById("markerInfo").style.visibility="hidden";
		if (navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition(showPosition,showError);
		}
		else 
		{
			x.innerHTML="Geolocation is not supported by this browser.";
		}
	})();
		
	function showPosition(position)
	  {
	  var latlon=position.coords.latitude+","+position.coords.longitude;

	  var img_url="http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=500x300&sensor=false";
	  document.getElementById("demoGeolocation").innerHTML="<img src='"+img_url+"'>";
	  document.getElementById("demoGeolocation").style.visibility="visible";
	  document.getElementById("markerInfo").style.visibility="visible";
	  }

	function showError(error)
	  {
	  switch(error.code) 
		{
		case error.PERMISSION_DENIED:
		  x.innerHTML="Korisnik odbija zahtjev za geolokacijom."
		  break;
		case error.POSITION_UNAVAILABLE:
		  x.innerHTML="Nedostuna je informacija o geolokaciji."
		  break;
		case error.TIMEOUT:
		  x.innerHTML="Isteklo je vrijeme korisnikovog zahtjeva za geolokacijom."
		  break;
		case error.UNKNOWN_ERROR:
		  x.innerHTML="Dogodila se nepoznata greška."
		  break;
		}
		document.getElementById("navigationArrows").style.bottom="40px";
		document.getElementById("demoGeolocation").style.visibility="hidden";
		document.getElementById("markerInfo").style.visibility="hidden";
	  }
};
$(document).ready(function() {
	$("#continue").click( function() {
		window.location = 'css3.html';
	});
	$("#back").click( function() {
		window.location = 'audio.html';
	});
});