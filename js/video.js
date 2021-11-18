var video = document.getElementById("assets/marchingband.mov");;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#playbackRate").addEventListener("click", function() {
	video.playbackRate -= 0.05;
	console.log("Slow Down Video");
});

document.querySelector("#playbackRate").addEventListener("click", function() {
	video.playbackRate += 0.05;
	console.log("Speed Up Video");
});

document.querySelector("#currentTime").addEventListener("click", function() {
	video.currentTime += 15;
	console.log("Skip Ahead Video");
});

document.querySelector("#muted").addEventListener("click", function() {
	video.muted = !video.muted;
	console.log("Mute Video");
});

document.querySelector("#volumeSlider").addEventListener("input", function() {
	video.volume = volumeSlider.value;
	console.log("Volume Slider");
});

document.querySelector("#classList").addEventListener("click", function() {
	video.classList.toggle("oldSchool");
	console.log("Styled Video");
});

document.querySelector("#classList").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original Video");
});


