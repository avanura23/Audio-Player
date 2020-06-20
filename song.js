var audioVolumeControl = document.getElementById("audio-vol-control");
var song = document.getElementById("song");
var audioPlayPause = document.getElementById("audio-play-pause");
var backgroundVideo = document.getElementById("background-video");

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