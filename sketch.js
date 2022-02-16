// let myCanvas;
// let fft;

// function setup() {
//     myCanvas = createCanvas(600, 600);
//     myCanvas.parent("p5-visualizer");
//     fft = new p5.FFT();
// }

// function draw() {
//     if (p5Image != null) {
//         background(p5Image);
//     }
//     else {
//         background(0);
//     }
//     stroke(255);
//     strokeWeight(3.5);
//     noFill();
//     let wave = fft.waveform();

//     beginShape();
//     for (let i = 0; i < width; i++) {
//         var index = floor(map(i,0,width,0,wave.length));

//         let x = i;
//         let y = wave[index] * 300 + height;
//         vertex(x, y);
//     }
//     endShape();
// }