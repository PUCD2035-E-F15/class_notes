# Week 8 Class Notes

## Interactive Illustration Critique

- What do you see?
- What can you do?
- What choices are you faced with? What options can you choose from?
- Do the choices have a meaningful impact on the experience?
- Is there a beginning? An end? Should there be?
- What is the piece about?
- How do the visuals support the meaning?
- How does the interaction support the meaning?

## p5 Events
We have used `mouseX`, `mouseY`, and `mouseIsPressed` to make our sketches interactive. These variables are created and set by p5, and let us **poll** to find out the state of the mouse every frame. Often we want to perform a specific action when the state changes. For example we might want to do something at the moment the user presses the button.

One thing we could do is keep track of the button state ourselves and use `if` to see if it has changed.

<a href="manual_event.js" class="p5_example show-lab show-lab-link hidden">manual_event.js</a>

Reacting to input changes is very common, so p5 will notify us when these `events` occur. This sketch does the same thing, but uses p5 events.

<a href="p5_event.js" class="p5_example show-lab show-lab-link hidden">p5_event.js</a>

This code is a little simpler—we don't have a mouseWasPressed variable, and don't need the `if`. It is also easier to read and understand because the `draw()` function is focused on drawing, and the state change is handled in `mousePressed()`.

## Application State

In the example above, the `ellipseColor` variable is used to remember a small piece of our application **state**. It remembers what color our ellipse should be. The `draw()` function uses that state when it draws the ellipse, and the `mousePressed()` function changes the state. Note that the `draw()` function doesn't need to "know" anything about what causes `ellipseColor` to change, it only needs to draw it. 

Until now, our applications have been basically "single-screen" or "single-scene". The next example has two scenes, and switches when the user clicks.

<a href="day_night.js" class="p5_example show-lab show-lab-link hidden">day_night.js</a>

We can use functions to organize things a bit. This helps a little bit even with this simple app, but becomes even more important as your applications grow more complex.

<a href="day_night_functions.js" class="p5_example show-lab show-lab-link hidden">day_night.js</a>




## Assignment
