// create a variable for the sound file
// var soundFile, fft;

// function setup() {
//    createCanvas(710,400);
//    noFill();
//    if ( soundFile.isPlaying() ) { // .isPlaying() returns a boolean
//     soundFile.pause(); // .play() will resume from .pause() position
//    } else {
//     soundFile.play();
//     fft = new p5.FFT();
//     fft.setInput(soundFile);
//    }

// }

// function draw() {
//    background(200);

//    var spectrum = fft.analyze();

//    beginShape();
//    for (i = 0; i<spectrum.length; i++) {
//     vertex(i, map(spectrum[i], 0, 255, height, 0) );
//    }
//    endShape();
// }

// function preload() {
//   soundFile = loadSound('./assets/piano.mp3');
// }


var song, analyzer;

function preload() {
  song = loadSound('./assets/piano.mp3');
}

function setup() {
  createCanvas(710, 200);
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude(0.5);

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background(255);

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, 10+rms*200, 10+rms*200);
}
