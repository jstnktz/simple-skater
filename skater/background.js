// Background.js - Handles parallax cityscape, day-night cycle, and clouds
class Background {
  constructor() {
    this.layers = [
      { color: [60, 60, 90], speed: 0.2, buildings: [] },
      { color: [100, 100, 140], speed: 0.4, buildings: [] },
      { color: [180, 180, 220], speed: 0.7, buildings: [] }
    ];
    this.clouds = [];
    this.time = 0;
    this.initBuildings();
    this.initClouds();
  }

  initBuildings() {
    for (let l = 0; l < this.layers.length; l++) {
      let layer = this.layers[l];
      layer.buildings = [];
      let x = 0;
      while (x < width * 1.5) {
        let w = random(40, 80);
        let h = random(60, 180) * (1 + l * 0.2);
        layer.buildings.push({ x, w, h });
        x += w + random(10, 30);
      }
    }
  }

  initClouds() {
    this.clouds = [];
    for (let i = 0; i < 6; i++) {
      this.clouds.push({
        x: random(width),
        y: random(40, height * 0.3),
        speed: random(0.3, 0.7),
        size: random(60, 120)
      });
    }
  }

  drawSky() {
    // Day-night cycle: color lerp based on time
    let t = (sin(this.time * 0.0002) + 1) / 2;
    let day = color(135, 206, 250);
    let night = color(30, 30, 60);
    background(lerpColor(night, day, t));
  }

  drawClouds() {
    noStroke();
    fill(255, 255, 255, 180);
    for (let c of this.clouds) {
      ellipse(c.x, c.y, c.size, c.size * 0.6);
      ellipse(c.x + c.size * 0.3, c.y + 10, c.size * 0.6, c.size * 0.4);
      ellipse(c.x - c.size * 0.3, c.y + 8, c.size * 0.5, c.size * 0.3);
      c.x -= c.speed;
      if (c.x < -c.size) c.x = width + c.size;
    }
  }

  drawCity() {
    for (let l = 0; l < this.layers.length; l++) {
      let layer = this.layers[l];
      fill(...layer.color, 200);
      noStroke();
      beginShape();
      vertex(0, height);
      for (let b of layer.buildings) {
        vertex(b.x, height * 0.7 - b.h + l * 30);
        vertex(b.x + b.w, height * 0.7 - b.h + l * 30);
      }
      vertex(width, height);
      endShape(CLOSE);
      // Scroll buildings
      for (let b of layer.buildings) {
        b.x -= layer.speed;
      }
      // Recycle buildings
      if (layer.buildings.length && layer.buildings[0].x + layer.buildings[0].w < 0) {
        let last = layer.buildings[layer.buildings.length - 1];
        let w = random(40, 80);
        let h = random(60, 180) * (1 + l * 0.2);
        layer.buildings.push({ x: last.x + last.w + random(10, 30), w, h });
        layer.buildings.shift();
      }
    }
  }

  draw() {
    this.time += 1;
    this.drawSky();
    this.drawClouds();
    this.drawCity();
  }

  handleResize() {
    this.initBuildings();
    this.initClouds();
  }
} 