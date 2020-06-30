var audioVolumeControl = document.getElementById("audio-vol-control");
var song = document.getElementById("song");
var audioPlayPause = document.getElementById("audio-play-pause");
var backgroundVideo = document.getElementById("background-video");
var audioProgress = document.getElementById("audio-progress");

let playing = false;

// Song Play and Pause

audioPlayPause.addEventListener('click', function () {
    if (playing) {
        playing = false;
        song.pause();
        backgroundVideo.pause();
        audioPlayPause.setAttribute('name', 'play');
    } else {
        playing = true;
        song.play();
        backgroundVideo.play();
        audioPlayPause.setAttribute('name', 'pause');
    }
});


// Audio Volume Controls

audioVolumeControl.addEventListener('change', function () { 
    song.volume = this.value / 100;
});

audioVolumeControl.addEventListener('input', function() {
    song.volume = this.value / 100;
});

// Audio Slider Controls

audioProgress.addEventListener('change', function () {  
    song.currentTime = (this.value / 100) * song.duration;
});

audioProgress.addEventListener("input", function () {
    song.currentTime = (this.value / 100) * song.duration;
});

// Audio Slider

song.addEventListener('timeupdate', function () {
    var sliderPosition = song.currentTime / song.duration;
    audioProgress.value = sliderPosition * 100;

    if (song.ended) {
      playing = false;
      backgroundVideo.pause();
      audioPlayPause.setAttribute("name", "play");
      playing = false;
    }
})