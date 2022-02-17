// Help from: https://stackoverflow.com/questions/33446206/how-to-load-a-file-into-a-html5-audio-tag .
let wave;
let canvas;
let vertical;

document.addEventListener("DOMContentLoaded", function() {
    canvas   = document.getElementById("img-visualizer--visualizer--canvas");
    vertical = document.getElementById("img-visualizer--controls--vertical");
    // Check for BlobURL support
    var blob = window.URL || window.webkitURL;
    if (!blob) {
        console.log('Your browser does not support Blob URLs :(');
        return;           
    }

    document.getElementById('choose-audio').addEventListener('change', function(event){

        var file = this.files[0],
        fileURL = blob.createObjectURL(file);
        document.getElementById('img-visualizer--controls--audio').src = fileURL;
        wave = new Wave();
        let options = {
            stroke: 2,
            type: "shockwave",
            // type: "shine",
            colors: ["#ffffff", "#ffffffbd", "#ffffff66"]
            // colors: ["#ffffffde", "#00000000"]
        }
        wave.fromElement(
            "img-visualizer--controls--audio",
            "img-visualizer--visualizer--canvas",
            options
        );
    });

    visualizerSetHeight();
});

function visualizerSetHeight() {
    canvas.style.top = (vertical.value - 100) + 'px';
}
