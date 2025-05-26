// Skater.js - Handles the stick-figure skateboarder
class Skater {
  constructor(ground) {
    this.ground = ground;
    this.x = width * 0.25;
    this.y = 0;
    this.vy = 0;
    this.onGround = false;
    this.kickflipping = false;
    this.kickflipFrame = 0;
    this.gravity = 0.7;
    this.jumpStrength = 15;
    this.radius = 22;
  }

  update() {
    let groundY = this.ground.getY(this.x);
    if (!this.onGround) {
      this.vy += this.gravity;
      this.y += this.vy;
      if (this.y >= groundY - this.radius) {
        this.y = groundY - this.radius;
        this.vy = 0;
        this.onGround = true;
        this.kickflipping = false;
        this.kickflipFrame = 0;
      }
    } else {
      this.y = groundY - this.radius;
    }
    if (this.kickflipping) {
      this.kickflipFrame++;
      if (this.kickflipFrame > 20) {
        this.kickflipping = false;
        this.kickflipFrame = 0;
      }
    }
  }

  draw() {
    push();
    translate(this.x, this.y);
    // Board
    push();
    if (this.kickflipping) {
      rotate(map(this.kickflipFrame, 0, 20, 0, TWO_PI));
    }
    fill(80);
    rectMode(CENTER);
    rect(0, this.radius, 50, 8, 6);
    pop();
    // Stick figure (move up so feet are on the board)
    stroke(30);
    strokeWeight(3);
    const footOffset = this.radius + 1; // Move feet just to touch the board
    // Body
    line(0, -footOffset, 0, this.radius - footOffset);
    // Arms
    line(0, 10 - footOffset, -15, 20 - footOffset);
    line(0, 10 - footOffset, 15, 20 - footOffset);
    // Legs
    line(0, this.radius - footOffset, -10, this.radius + 18 - footOffset);
    line(0, this.radius - footOffset, 10, this.radius + 18 - footOffset);
    // Head
    fill(255);
    ellipse(0, -13 - footOffset, 20, 20);
    pop();
  }

  handleKeyPressed(k) {
    if ((k === ' ' || k === 'Spacebar') && this.onGround) {
      this.vy = -this.jumpStrength;
      this.onGround = false;
    } else if ((k === 'k' || k === 'K') && !this.onGround && !this.kickflipping) {
      this.kickflipping = true;
      this.kickflipFrame = 0;
    }
  }
} 