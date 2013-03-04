/* Canvas Javascript File */
/* Author : Igor Filipović */

$(function () {
	var userAgent = navigator.userAgent.toLowerCase();
	var userBrowserName  = navigator.appName.toLowerCase();
	$.browser = {
		version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
		safari: /webkit/.test( userAgent ),
		opera: /opera/.test( userAgent ),
		msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
		mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ),
		name:userBrowserName
	};
	if($.browser.name == "microsoft internet explorer")
		if ($.browser.version == "7.0" || $.browser.version == "8.0")
		{
			alert($.browser.name + " " + $.browser.version + " ne podržava HTML5 elemente.")
			setTimeout ( function() {
				window.location = "index.html";
			},100);
		}
});

window.onload = function() {
	var canvas = document.getElementById("canvasDemo");
	var ctx = canvas.getContext("2d");
	ctx.font="40px Trajan Pro";
	var gradient=ctx.createRadialGradient(435,400,200,550,400,650);
	gradient.addColorStop("0","#ffa300");
	gradient.addColorStop("0.1","#000");
	gradient.addColorStop("0.2","#ffa300");
	gradient.addColorStop("0.3","#000");
	gradient.addColorStop("0.4","#ffa300");
	gradient.addColorStop("0.5","#000");
	gradient.addColorStop("0.6","#ffa300");
	gradient.addColorStop("0.7","#000");
	gradient.addColorStop("0.8","#ffa300");
	gradient.addColorStop("0.9","#000");
	gradient.addColorStop("1","#ffa300");
	ctx.fillStyle=gradient;
	ctx.strokeStyle=gradient;
	ctx.save();
	ctx.beginPath();
	ctx.scale(1, 0.5);
	ctx.arc(435,400,600,0,2*Math.PI);
	ctx.arc(435,400,580,0,2*Math.PI);
	ctx.arc(435,400,560,0,2*Math.PI);
	ctx.arc(435,400,540,0,2*Math.PI);
	ctx.arc(435,400,520,0,2*Math.PI);
	ctx.arc(435,400,500,0,2*Math.PI);
	ctx.stroke();
	ctx.restore();
	ctx.shadowBlur=3;
	ctx.shadowOffsetX=-2;
	ctx.shadowOffsetY=2;
	ctx.shadowColor="#505050";
	ctx.strokeText("HTML5 Demo",300,60);
	var img=document.getElementById("canvasImg");
	var img2=document.getElementById("canvasImg");
	ctx.drawImage(img,70,50);
	/*ctx.drawImage(img2,95,80,100,38);
	ctx.drawImage(img2,215,80,100,38);
	ctx.drawImage(img2,335,80,100,38);
	ctx.drawImage(img2,455,80,100,38);
	ctx.drawImage(img2,575,80,100,38);
	ctx.drawImage(img2,695,80,100,38);
	ctx.drawImage(img2,95,270,100,38);
	ctx.drawImage(img2,215,270,100,38);
	ctx.drawImage(img2,335,270,100,38);
	ctx.drawImage(img2,455,270,100,38);
	ctx.drawImage(img2,575,270,100,38);
	ctx.drawImage(img2,695,270,100,38);*/
	ctx.strokeText("Canvas",355,355);
};

$("#canvasDemo").click( function() {
	window.location = 'video.html';
});