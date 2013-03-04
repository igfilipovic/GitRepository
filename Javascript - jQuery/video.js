/* Video Javascript File */
/* Author : Igor Filipoviæ */
$(document).ready(function() {
	var vol = 0;
	var is_play = true;
	var videoDemo = $("#videoDemo").get(0);
	videoDemo.volume = 0.5;
	$('#play').click(function () {
		if (is_play){
			is_play = false;
			videoDemo.play();
			$(this).attr("src", "images/pause.png");
			$(this).attr("title", "Pauziraj");
		}
		else{
			$(this).attr("src", "images/play.png");
			videoDemo.pause();
			$(this).attr("title", "Pokreni");
			is_play = true;
			}
	});	
	$("#pause").click(function() {
		videoDemo.pause();
		videoDemo.currentTime=0;
		$("#play").attr("src", "images/play.png");
		$("#play").attr("title", "Pokreni");
		is_play = true;
	});
	$("#backward").click(function() {
		videoDemo.currentTime -= 10;
		if(videoDemo.currentTime == 0)
		{
			is_play = false;
		}
	});
	$("#forward").click(function() {
		videoDemo.currentTime += 10;
	});
	$("#volumeDown").click(function() {
		videoDemo.volume-=0.1;
		$("#volumeShow").css("display","inline-block");
		vol = $("#volume").text()*1;
		$("#volume").html(vol-1);
	});
	$("#volumeUp").click(function() {
		videoDemo.volume+=0.1;
		$("#volumeShow").css("display","inline-block");
		vol = $("#volume").text()*1;
		$("#volume").text(vol+1);
	});
	$("#volumeUp").mouseleave(function() {
		$("#volumeShow").css("display","none");
	});
	$("#volumeDown").mouseleave(function() {
		$("#volumeShow").css("display","none");
	});
	$("#continue").click( function() {
		window.location = 'audio.html';
	});
	$("#back").click( function() {
		window.location = 'canvas.html';
	});
});


