let pattern;
let capture;

function setup() {
  createCanvas(1280, 720); 
  capture = createCapture(VIDEO);
  capture.size(width, height);
  //capture.hide();
  pattern = createPattern();
}

function draw() {
  background(255);
  pattern();
}

function createPattern() {
  return function() {
    capture.loadPixels();
    let gridSize = 20;
    for (let x = 0; x < width; x += gridSize) {
      for (let y = 0; y < height; y += gridSize) {
        let loc = (x + y * capture.width) * 4;
        let r = capture.pixels[loc];
        let g = capture.pixels[loc + 1];
        let b = capture.pixels[loc + 2];
        fill(r, g, b);
        rect(x, y, gridSize, gridSize); 
      }
    }
  };
}
