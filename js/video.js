var video = document.getElementById("player1");;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.getElementById("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});

document.getElementById("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.05;
	console.log("Slow Down Video");
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.05;
	console.log("Speed Up Video");
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	console.log("Skip Ahead Video");
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	console.log("Mute Video");
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = volumeSlider.value;
	console.log("Volume Slider");
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.toggle("oldSchool");
	console.log("Styled Video");
});

document.querySelector("#classList").addEventListener("click", function() {
	video.classList.remove("orig");
	console.log("Original Video");
});


