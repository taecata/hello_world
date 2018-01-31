var sound, amplitude, cnv;

// function to load sound 
function preload(){
  sound = loadSound('libraries/Hülya_Süer-Şeker_Oğlan_Kozmonot_Rework.mp3');
}

function setup() {
  cnv = createCanvas(800,800);
  amplitude = new p5.Amplitude(); 
  fft = new p5.FFT();
  sound.amp(0.2);

// play and pause depending on mouse click 
  cnv.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
  });
}

function draw() {

// triangle that will expand according to amplitude 

background(0);
fill(53,167,156);
var level = amplitude.getLevel();
var size = map(level, 0, 1, 0, 200);
triangle(400, 260-size, 240-size, 520+size, 560+size, 520+size);
  
    stroke(190,41,236);
    strokeWeight(1);

    fill(104,196,175);
    triangle(400, 275, 255, 510, 545, 510);

    fill(53,167,156);
    triangle(400, 290, 270, 500, 530, 500);

    fill(104,196,175);
    triangle(400, 305, 285, 490, 515, 490);

    fill(53,167,156);
    triangle(400, 320, 300, 480, 500, 480);

    fill(104,196,175);
    triangle(400, 335, 315, 470, 485, 470);

    fill(53,167,156);
    triangle(400, 350, 330, 460, 470, 460);

    fill(104,196,175);
    triangle(400, 380, 360, 445, 440, 445);

    // drawing wave shape according to the amplitude of the sound 

    var waveform = fft.waveform();
    noFill();
    beginShape();
    stroke(191, 139, 255); 
    strokeWeight(2);
    for (var i = 0; i< waveform.length; i++){
      var x = map(i, 0, waveform.length, 0, width);
      var y = map( waveform[i], -1, 1, 0, height);
      vertex(x,y);
    }
    endShape();
  
    // TEXT 

    // text to pause play 
    strokeWeight(1);
    text('click to play/pause', 4, 10);

    // text follow mouse 
    textSize(10);
    text('tae', mouseX, mouseY);

    // title-like text 
    textSize(10);
    text('hello world', 380, 200);
}

