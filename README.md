# TzavelasEllena_IMD3901_A2

## Assignment Instructions

The goal of this assignment is to create a web application using [A-Frame]('https://aframe.io/docs/1.5.0/introduction/') components that allows user to create, manipulate and destroy elements in a virtual space. The elements must additionally create sounds and application must be usable on at least two different platforms (mobile, desktop, VR HMD).

## My Approach

 For this assignment, I decided to create a serene environment with snow. The natural thought progression from this was to be able to manipulate snowballs. I wanted the user to pick up a snowball from a snowpile and manipulate it in some way to then throw the snowball. I wanted the controls to be simple so that they would work on both desktop and mobile with much adjustment. In the end, I decided that a UI would be best for controlling the manipulations, so I added a slider for the radius size and a color picker. I also added the aframe-physics-system library (using the cannon.js version) for being able to throw the snowballs and detect when they collided with the ground in order to destroy them.

 The project is usable on both desktop and mobile.

## Controls

### Desktop
| Control | Description |
| ------------- | ------------- |
| `w a s d` | player movement (forward, left, backwards, right) |
| `left-mouse-click + drag` | look around with camera |
| `left-mouse-click` on snowpile | pick up snowball |
| `left-mouse-click + drag` on radius slider | adjust snowball radius |
| `left-mouse-click + drag` on color picker | adjust snowball color |
| `left-mouse-click` on snowball while holding snowball | throw snowball |

### Mobile
| Control | Description |
| ------------- | ------------- |
| phone orientation | look around with camera |
| `tap` on snowpile | pick up snowball |
| `tap + drag` on radius slider | adjust snowball radius |
| `tap + drag` on color picker | adjust snowball color |
| `tap` on snowball while holding snowball | throw snowball |