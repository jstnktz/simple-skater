# Architecture Overview

## Structure
- `index.html`: Loads p5.js and the main game script.
- `skater/ground.js`: Handles the undulating ground (Perlin noise, tweakable parameters).
- `skater/background.js`: Handles the parallax cityscape, day-night cycle, and clouds.
- `skater/skater.js`: Handles the stick-figure skateboarder, physics, and controls.
- `skater/main.js`: Entry point, wires up modules and p5.js lifecycle.

## Main Classes
- **Ground**: Generates and draws the scrolling, undulating ground. Exposes parameters for amplitude, frequency, and speed.
- **Background**: Draws multi-layer parallax cityscape, manages day-night cycle and animated clouds.
- **Skater**: Manages the player character, physics, jump, and kickflip.

## Game Loop
- `setup()`: Initializes canvas and game objects.
- `draw()`: Called every frame. Draws background, ground, and skater. Updates physics and animation.
- `keyPressed()`: Handles jump and kickflip controls.
- `windowResized()`: Resizes canvas and updates layout.

## Extensibility
- The code is modular. New features (obstacles, collectibles) can be added as new classes/modules and integrated in `main.js`.
- Ground undulation parameters can be tweaked in `Ground`'s constructor. 