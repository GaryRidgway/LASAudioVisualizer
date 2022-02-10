// Help from: https://stackoverflow.com/questions/33446206/how-to-load-a-file-into-a-html5-audio-tag .
let audioElement;

document.addEventListener("DOMContentLoaded", function() {
    // Check for BlobURL support
    var blob = window.URL || window.webkitURL;
    if (!blob) {
        console.log('Your browser does not support Blob URLs :(');
        return;           
    }

    document.getElementById('choose-audio').addEventListener('change', function(event){

        // console.log('change on input#file triggered');
        var file = this.files[0],
        fileURL = blob.createObjectURL(file);
        // console.log(file);
        // console.log('File name: '+file.name);
        // console.log('File type: '+file.type);
        // console.log('File BlobURL: '+ fileURL);
        audioElement = loadSound(fileURL);
    });
});

function mousePressed() {
    if (audioElement.isPlaying()) {
        // .isPlaying() returns a boolean
        audioElement.pause();
      } else {
        audioElement.play();
      }
}