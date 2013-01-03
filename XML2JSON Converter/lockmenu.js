
	var message="Zabranjen je pristup izborniku!";
	if (navigator.appName == 'Microsoft Internet Explorer'){
		function norightclick(e) {
			if (event.button == 2 || event.button == 3) {
				alert(message);
				return false;
			}
		return true;
	}
	document.onmousedown=norightclick;
	document.onmouseup=norightclick;
	window.onmousedown=norightclick;
	window.onmouseup=norightclick;
	}
	else {
		function norightclick(e){
			if (document.layers||document.getElementById&&!document.all){
				if (e.which==2||e.which==3){
					alert(message);
					return false;
				}
			}
		}
		if (document.layers){
			document.captureEvents(Event.MOUSEDOWN);
			document.onmousedown=NOclickNN; 
		}
		document.oncontextmenu=new Function("alert(message);return false")
	}	    