/* Audio Javascript File */
/* Author : Igor Filipoviæ */
$(document).ready(function() {
var vol = 0;
var audioBass = $("#audioBass").get(0);
var audioDrum = $("#audioDrum").get(0);
var audioGuitar = $("#audioGuitar").get(0);
var audioCrunch = $("#audioCrunch").get(0);
var audioPizzicato = $("#audioPizzicato").get(0);
audioBass.volume = 0.5;
audioDrum.volume = 0.5;
audioGuitar.volume = 0.5;
audioCrunch.volume = 0.5;
audioPizzicato.volume = 0.5;
var is_play = true;
    $('#play').click(function () {
        if (is_play){
            is_play  = false;
			audioBass.play();
			audioDrum.play();
			audioGuitar.play();
			audioCrunch.play();
			audioPizzicato.play();
            $(this).attr("src", "images/pause.png");
			$(this).attr("title", "Pauziraj");
        }
        else{
            $(this).attr("src", "images/play.png");
			audioBass.pause();
			audioDrum.pause();
			audioGuitar.pause();
			audioCrunch.pause();
			audioPizzicato.pause();
			$(this).attr("title", "Pokreni");
			is_play = true;
            }
    });	
$("#pause").click(function() {
	audioBass.pause();
	audioDrum.pause();
	audioGuitar.pause();
	audioCrunch.pause();
	audioPizzicato.pause();
	audioBass.currentTime=0;
	audioDrum.currentTime=0;
	audioGuitar.currentTime=0;
	audioCrunch.currentTime=0;
	audioPizzicato.currentTime=0;
	$("#play").attr("src", "images/play.png");
	$("#play").attr("title", "Pokreni");
	is_play = true;
});
$("#backward").click(function() {
	audioBass.currentTime -= 1;
	audioDrum.currentTime -= 1;
	audioGuitar.currentTime -= 1;
	audioCrunch.currentTime -= 1;
	audioPizzicato.currentTime -= 1;
});
$("#forward").click(function() {
	audioBass.currentTime += 1;
	audioDrum.currentTime += 1;
	audioGuitar.currentTime += 1;
	audioCrunch.currentTime += 1;
	audioPizzicato.currentTime += 1;
});
$("#volumeDown").click(function() {
	audioBass.volume-=0.1;
	audioDrum.volume-=0.1;
	audioGuitar.volume-=0.1;
	audioCrunch.volume-=0.1;
	audioPizzicato.volume-=0.1;
	$("#volumeShow").css("display","inline-block");
	vol = $("#volume").text()*1;
	$("#volume").html(vol-1);
});
$("#volumeUp").click(function() {
	audioBass.volume+=0.1;
	audioDrum.volume+=0.1;
	audioGuitar.volume+=0.1;
	audioCrunch.volume+=0.1;
	audioPizzicato.volume+=0.1;
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
	window.location = 'geolocation.html';
});
$("#back").click( function() {
	window.location = 'video.html';
});
});

