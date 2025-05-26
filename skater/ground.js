// Ground.js - Handles the undulating ground
class Ground {
  constructor({ amplitude = 60, frequency = 0.003, speed = 2 } = {}) {
    this.amplitude = amplitude;
    this.frequency = frequency;
    this.speed = speed;
    this.offset = 0;
    this.groundY = height * 0.7;
  }

  getY(x) {
    // Returns the y position of the ground at a given x
    return this.groundY + noise((x + this.offset) * this.frequency) * this.amplitude;
  }

  draw() {
    fill(60, 180, 90);
    noStroke();
    beginShape();
    vertex(0, height);
    for (let x = 0; x <= width; x += 5) {
      vertex(x, this.getY(x));
    }
    vertex(width, height);
    endShape(CLOSE);
    this.offset += this.speed;
  }

  handleResize() {
    this.groundY = height * 0.7;
  }
} 