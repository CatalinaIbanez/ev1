function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(6);
  noStroke();
}

function draw() {
  colorMode(HSB, 100, 100, 100);
  for (var x = 0; x < 100; x++) {
    var a = random(0, 100);
    fill(a, 100, 100);
    pelota(a);
  }
}

function pelota(diametro) {
  square(random(0, width), random(0, height), diametro, diametro);
}
