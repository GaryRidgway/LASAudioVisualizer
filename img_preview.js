// Help from: https://w3collective.com/preview-selected-img-file-input-js/ .
let p5Image;
let visualizerBody;
let colorSelector;

document.addEventListener("DOMContentLoaded", function() {
    visualizerBody = document.getElementById("visualizer-body");
    colorSelector  = document.getElementById("choose-background-color");

    const chooseFile = document.getElementById("choose-image");
    const imgPreview = document.getElementById("img-visualizer--preview");
    chooseFile.addEventListener("change", function () {
        getImgData();
    });

    function getImgData() {
        const files = chooseFile.files[0];
        if (files) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(files);
            fileReader.addEventListener("load", function () {
            imgPreview.style.display = "block";
            imgPreview.innerHTML = '<img src="' + this.result + '" />';
            });    
        }
    }

    setBackgroundColor();
});

function setBackgroundColor() {
    visualizerBody.style.backgroundColor = colorSelector.value;
}