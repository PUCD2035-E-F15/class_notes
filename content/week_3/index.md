# Week 2 Class Notes

Opening Video: 


## Loops

Javascript provides a flow control structure called a [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for). With loops, you can ask Javascript to execute a single block of code multiple times. 

The basic syntax of a loop looks like this:

```javascript
for ( initialExpression, condition, incrementExpression ) {
	//code to repeat
}
```

When the `for` control structure is executed, Javascript follows these steps:

1. The `initialExpression` is excuted once.
2. The `condition` is evaluated to `true` or `false`
3. If `true`, continue. If `false`, **exit** the loop.
4. Run the code in the block.
5. Run the `incrementExpression`
6. Repeat from step 2.

The MDN Javascript guide also [describes for statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement).

### Idiomatic Loops

The code in `initialExpression`, `condition`, and `incrementExpression` could potentially be any legal expression, but it is very common for a for loop to look like this:

```javascript
for (i = 0; i < 10; i++){
	// repeated code
}
```

This code will execute 10 times, with `i` having a values of 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. After the last time the repeated code is run, `i` will be incremented to 10. Because 10 is not less than 10, the loop will exit.


### Loops Can Shorten Code

Compare this code that doesn't use a loop....

```javascript
line( random(0, 400), random(0, 400), random(0, 400), random(0, 400));
line( random(0, 400), random(0, 400), random(0, 400), random(0, 400));
line( random(0, 400), random(0, 400), random(0, 400), random(0, 400));
line( random(0, 400), random(0, 400), random(0, 400), random(0, 400));
line( random(0, 400), random(0, 400), random(0, 400), random(0, 400));
line( random(0, 400), random(0, 400), random(0, 400), random(0, 400));
line( random(0, 400), random(0, 400), random(0, 400), random(0, 400));
line( random(0, 400), random(0, 400), random(0, 400), random(0, 400));
line( random(0, 400), random(0, 400), random(0, 400), random(0, 400));
line( random(0, 400), random(0, 400), random(0, 400), random(0, 400));
```

...to this code that does.

```javascript
for (int n = 0; n < 10; n++) {
	line( random(0, 400), random(0, 400), random(0, 400), random(0, 400));
}
```

These code snippets do the same thing: draw ten randomly placed lines. The version with the loop is shorter, clearer, and easier to maintain. With just ten lines, either approach could work. If we wanted to draw hundreds or thousands of lines, using a loop is the only practical choice.

### Loops + Math = Power

When you use the a loop the **same code** is executed multiple times, but that code doesn't have to do the **same thing** every time. By combining loops with variables and expressions, we can create complex effects.

<a href="./loopmath.js" class="p5_example show-lab show-lab-link hidden">loop_math</a>


## Interactivity in p5

### Senses

### Using p5 `mouseX` and `mouseY`

### Using p5 `mouseIsPressed`


## Animation in p5

### State

### 1: Update, 2: Draw
