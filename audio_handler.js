// Help from: https://stackoverflow.com/questions/33446206/how-to-load-a-file-into-a-html5-audio-tag .
let wave;

document.addEventListener("DOMContentLoaded", function() {
    // Check for BlobURL support
    var blob = window.URL || window.webkitURL;
    if (!blob) {
        console.log('Your browser does not support Blob URLs :(');
        return;           
    }

    document.getElementById('choose-audio').addEventListener('change', function(event){

        var file = this.files[0],
        fileURL = blob.createObjectURL(file);
        document.getElementById('img-visualizer--audio').src = fileURL;
        wave = new Wave();
        let options = {
            stroke: 2,
            type: "shockwave",
            // type: "shine",
            colors: ["#ffffffde", "#ffffffbd", "#ffffff94"]
            // colors: ["#ffffffde", "#00000000"]
        }
        wave.fromElement("img-visualizer--audio","img-visualizer--visualizer--canvas", options);
    });
});
