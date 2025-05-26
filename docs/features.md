# Features

## Core Gameplay
- **Stick-figure skateboarder** rides along a smooth, undulating ground.
- **Jump** (spacebar) and **kickflip** (K key, in air) controls.
- **Ground** uses Perlin noise for gentle, tweakable undulations.
- **Cityscape background** with multi-layer parallax, animated clouds, and a day-night cycle.
- **Smooth scrolling** for both ground and city, creating a sense of forward movement.

## Visuals
- Gentle, relaxing color palette and movement.
- Parallax effect for depth.
- Animated clouds drift across the sky.
- Day-night cycle smoothly transitions sky color.

## Controls
- **Spacebar**: Jump
- **K**: Kickflip (while in air)

## Tweakable Parameters
- `Ground` class exposes:
  - `amplitude`: Height of ground undulations
  - `frequency`: How often hills/valleys occur
  - `speed`: How fast the ground scrolls

## Extensibility
- Code is modular for easy addition of:
  - Obstacles (e.g. cones, rails)
  - Collectibles (e.g. coins, stars)
  - More tricks or skater animations

## No Sound
- The game is intentionally silent for a chill, focused experience. 