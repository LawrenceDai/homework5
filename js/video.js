// Add js here.
var vid = document.getElementById("videoplayer");
vid.autoplay = false;
vid.loop = false;
vid.load();

var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var slowButton = document.getElementById("slower");
var fastButton = document.getElementById("faster");
var skipButton = document.getElementById("skip");
var muteButton = document.getElementById("mute");
var volumeSlider = document.getElementById("slider");

playButton.addEventListener("click", playVid);
pauseButton.addEventListener("click", pauseVid);

slowButton.addEventListener("click", slowdown);
fastButton.addEventListener("click", speedup);
skipButton.addEventListener("click", skip);

muteButton.addEventListener("click", mute);

volumeSlider.addEventListener("change",changeVolume);

function playVid() {
	vid.play();
}

function pauseVid() {
	vid.pause()
}

function slowdown() {
	var speed = vid.playbackRate;
	if (speed == 2) {
		vid.playbackRate = 1;
	}
	else if (speed == 1){
		vid.playbackRate = 0.5;
	}
	else {
		alert("Video is at slowest speed!");
	}
}

function speedup() {
	var speed = vid.playbackRate;
	if (speed == 0.5) {
		vid.playbackRate = 1;
	}
	else if (speed == 1){
		vid.playbackRate = 2;
	}
	else {
		alert("Video is at fastest speed!");
	}
}

function skip() {
	var nextTime = vid.currentTime + 15;
	if (nextTime > vid.duration) {
		vid.currentTime = 0;
	}
	else {
		vid.currentTime = nextTime;
	}
}

function mute() {
	vid.muted = !vid.muted;
}


function changeVolume() {
	vid.volume = this.value/100;
}