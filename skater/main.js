let ground, bg, skater;

function setup() {
  createCanvas(windowWidth - 48, windowHeight * 0.8 - 48);
  ground = new Ground();
  bg = new Background();
  skater = new Skater(ground);
}

function draw() {
  bg.draw();
  ground.draw();
  skater.update();
  skater.draw();
}

function keyPressed() {
  skater.handleKeyPressed(key);
}

function windowResized() {
  resizeCanvas(windowWidth - 48, windowHeight * 0.8 - 48);
  ground.handleResize();
  bg.handleResize();
} 