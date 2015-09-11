
# Week 2 Class Notes

Opening Video: [Hans Rosling's 200 Countries, 200 Years, 4 Minutes](https://www.youtube.com/watch?v=jbkSRLYSojo)

## Bonus Sketch

<a href="./quiz.js" class="p5_example show-preview hidden">test_example</a>

Open the [Sketch Lab](http://pucd2035-e-f15.github.io/class_notes/p5_lab.html) and write a sketch that (roughly) recreates the image above. Embellish as you like. Due at 3:55 pm.

## Homework Review

[Week 1 Class Work](../week_1/class_work.html)

# Expecting Problems

When you try to run a program you are writing, there is a very good chance that something will go wrong. Your program won't do what you expect. It quite possibly won't do anything at all. This is the reality shared by all programmers, regardless of skill and experience. In fact, it is probably fair to say that the more experienced a programmer is, the more they learn to expect that their code won't work completely. At least on the first run: writing a program is an iterative process: write some code, run the code, fix the problems, write some more code.

We can divide most of the problems we'll see in javascript programs into three broad categories: syntax errors, runtime errors, and logical errors. 

### Syntax Errors

In programming, syntax refers to the rules and grammar of a language. Any part of your code that doesn't follow those rules is a **syntax error**. When your program has a syntax error, the computer can't understand it and the program won't run at all. Common syntax errors include missing punctuation, misspelled words, and mismatched braces `{}`.  

```javascript
function draw() {
	// the next line has a syntax error: there should be a comma between the zeros 
	background(220, 0 0);	
	ellipse(320, 180, 100, 100);
}
```


### Runtime Errors

When your program is free of syntax errors, the computer will attempt to run it. While running the program, the computer may still find something it can't understand. When this happens it is called a **runtime error**. When the computer encounters a runtime error, it will will stop running your program. One of the most common runtime errors is referring to something that doesn't exist. For example, look at the following code. It follows the rules of the javascript language so it has no syntax errors, but the computer won't be able to run this program because it doesn't know what `circle` means. You could fix this problem by changing `circle` to `ellipse` because the p5 library *does* define an ellipse command.

```javascript
function draw() {
	background(220, 0, 0);
	// the following line will cause a runtime error, because javascript doesn't know what "circle" means
	circle(320, 180, 100, 100);
}
```


### Logical errors 

If your program has no syntax errors, and doesn't encounter any runtime errors the computer will happily run it. Unfortunately, your program still may not do what you want. A computer can't know what you *want* it to do, only what you *tell* it to do. Logical errors occur when there is a mismatch between what you want and what you write. Logical errors are often the most difficult to understand and fix. The following code is meant draw an ellipse on a red background. But when it is run, only the red background appears. Why don't we see the ellipse? The computer *does* draw the ellipse, but the `background` command on the next line draws a red background that covers it up. This is a logical error: the computer is doing exactly what is told, but not what is wanted. Putting the `background` command before the `ellipse` command would fix the problem.

```javascript
function draw() {
	ellipse(320, 180, 100, 100);
	background(255, 0, 0);
}
```

### Bugs and Debugging

Problems in your code—syntax errors, runtime errors, and logical errors—are often called **bugs**. The process of finding and fixing bugs in code is called **debugging**. Much more programming time is spent debugging problems in code than initially writing it, and debugging is one of the most important programming skills.


### Dealing with Syntax and Runtime Errors

When the computer encounters a syntax or runtime error it will report the error and stop running the program. When running Javascript programs in Chrome, you can see these messages in the Javascript console. To open the Javascript console, first go to the Chrome tab/window that is running your project and then press Command-Option-J. You will want to have the Javascript console open any time you are working on your code.

The error message will contain a description of the error, the name of the file that contains the error, and the line number it occurs on. Read these messages carefully. They will often point you straight to any problems in your code. Sometimes, these reports be wrong or misleading. Syntax and runtime errors occur because the computer doesn't understand something in your code, and if the computer doesn't understand it can't always explain why.

Code in small increments. Try to run your program every time you make a change or add a line of code. If your project breaks, the problem is usually in the code you just changed and will be easy to spot.


### Dealing with Logical Errors

Logical errors can be the hardest to debug. Remember the computer always does what you tell it to do. **If your program does the wrong thing, it is because you told it to.** To fix these kinds of problems you have to think carefully about what you want to do, and what your code actually describes.

- Think about what you want to happen carefully and specifically. Understand what you want your program to do.
- Look at the behavior of your program carefully and specifically. Understand what it is doing.
- Read the code carefully, line by line. Imagine what happens as each line of the program is executed.
- Find the exact spot where your program starts doing something you don't expect. Take some time to understand why it does that.
- When you understand why your program does what it does, instead of what you want, make changes to fix the problem and run your code to see if your changes worked.

### Using `console.log()`

We have already seen that Chrome will display messages about syntax and runtime errors in the Javascript console. You can tell your program to display messages in the console using `console.log()`. `console.log()` is a powerful tool for debugging.

```javascript
console.log("Hello!"); // displays "Hello!" in the console.
var x = 2 + 2;
console.log(x); //displays "4"
```

# Programming is Powerful

Your first drawing is a computer program, but it not a very powerful one. It is little more than data. As you learn more elements of Javascript syntax your programs will become more powerful very quickly. In fact **[anything and everything](http://en.wikipedia.org/wiki/Turing_completeness)** that a computer program can do, can be programmed using just a few key parts of Javascript. The rest of Javascript makes complex programs easier to create, understand, and manage.

This is a critical concept in computer science and programming. By composing a few small ideas—storing values and decision making—you can build very complex ideas.  Looking at it another way, no mater how complex a computer program is, it can be broken down to these basic elements. 

### Javascript vs HTML and CSS

Javascript is programming language. Programming languages allow you to describe a process that you want a computer to preform. With Javascript you can create interactive experiences.

HTML is a content markup language. Markup languages allow you to represent text data in a way that can be understood by a computer. With HTML you can create documents to read.

CSS is a style sheet language. CSS allows you to define the appearance of text documents that are marked up with HTML.

**HTML and CSS documents are not programs, they are data.**

On a web page the three are often used together: HTML is what is says, CSS is how it looks, Javascript is what it does. Most web pages use little or no javascript because they don't really do anything. 

Programming languages like Javascript can be used to create entire applications without using languages like HTML and CSS. Mobile and desktop applications, video games, hardware interfaces, interactive installations, and some highly interactive websites are created in this way. 

### Learning to Program

Learning how to program, and learning a programming language are very different things. One of the best ways to learn both is to start small, read example code, and to play. 

Experiment with changing example code:

- Run the code, see what it does
- Read the code, see try to understand how it works
- Make a small change, guess what will happen
- Run the changed code, see what it does

This process is also the core of writing new programs. 

You have already created your first program. We did not cover any of the syntax rules of javascript. To create your program you relied on copying the patterns in example code and reference documentation. This is one of the most effective ways of getting used to the syntax of a language. In addition to this, we are going to start talking about syntax a little more formally this week.

### A Tour of the Javascript Language


What to Know		| What to Do
---					| ---
values				| operators
literals			| expressions
variables			| statements
arrays				| control structures
data objects		| functions

<table>
<tr><th>What to Know + What to Do</th></tr>
<tr><td>Object Oriented Programming</td></tr>
</table>

### Values 

Values are pieces of data. In Javascript, values belong to one of these types:
- Numbers (`2`, `30`, `-2.4`)
- Strings (`"Hello, World."`, `"red"`)
- Booleans (`true` and `false`)
- Functions
- Objects

We'll be using numbers, strings, and booleans right away. We'll get to function and object values later.

### Literals

Literals are values that appear directly in the text of the program. In this example the 50s and 100s are literal values.

```javascript
ellipse(50, 50, 100, 100);
```

### Variables

Variables are named values in your program. Once you assign a value to a variable you can use the variables name to reference the value. Variables are called variables because their values can be changed. The value won't change unless you (or something in your code) changes it. In the following example, `diameter` is a variable.

```javascript
var diameter = 50;
ellipse(10, 10, diameter, diameter);
diameter = 10;
ellipse(100, 100, diameter, diameter);
```

### Arrays

An Array is a list of values. In the following example `scores` is a variable who's value is an array.

```
var scores = [30, 20, 22];
```

### Data Objects

An Object is a collection of named values. In the following example `player` is a variable who's value is an object.

```
var player = {age: 20, score: 100};
```


### Operators

Operators are used to combine, compare, and assign values. Some common operators include:

Operator | Name |Use
--- | --- | ---
= | Assignment | Assign a value to a variable. `x = 3`
+ | Addition | Add two values `3 + 2`, `3 + x`
- | Subtraction | Subtract one value from another `3 - 2`, `3 - x`
* | Multiplication | Multiply two values `3 * 2`, `3 * x`
/ | Division | Divide on value by another `3 / 2`, `3 / x`
=== | Strict Equal | Compare too numbers to see if they are equal `score === 100`
< | Less than | Determine if one value is less than another `score < 100`

### Expressions
An expression is a unit of code that resolves to a single value. 

- `2+2` is an expression that resolves to `4`. 
- `3 < 10` resolves to `true`.

### Statements

A statement is a complete program instruction. Statements are separated with semicolons (`;`) and usually appear on their own line. Javascript will sometimes allow you skip semicolons, but it is a good idea to include them. The following example has three statements.

```javascript
background(0, 0, 0);
ellipse(10, 10, 20, 20);
rect(10, 20, 30, 40);
```

### Control Structures

By default, every line of your program is executed from top to bottom. Control structures allow you to control which statements are executed and how many times. Control structures allow programs to do powerful things like:

**Make Decisions**: Conditional Statements
```javascript
if (score < 100) {
	background(0, 0, 0);
} else {
	background(100, 0, 0);
}
```

**Repeat**: Loops
```javascript
for (var step = 0; step < 5; step++) {
	ellipse(100, step*100, 50, 50);
}
```


### Functions
A javascript function is a named procedure, a collection of statements that performs a task. A function can be thought of as a small program-inside-a-program.


### Read More Online
You can find lots of resources online that describe the syntax and higher-level concepts of Javascript. MDN has a [great guide to javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), a [single page overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript), and a [detailed reference of the language](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript). There are [entire, free books](http://eloquentjavascript.net/) online. The [Khan Academy Intro to JS and p5](https://www.khanacademy.org/computing/computer-programming/programming) provides a series of screen-cast tutorials.


# Hands On Demos

## Working with Variables

Variables are named values in your program. There are many benefits to variables:

- Variables allow you to create general, reusable code.
- Variables let you store a value so you can use it later.
- Variables let you work with values that you don't know when creating your program.
- Naming values in your code makes it easier to understand.
- Because variables can change you can create a single piece of code that does multiple things. For example by combining variables and loops a single ellipse command can draw several ellipses in different places.


### Naming Variables

> There are only two hard things in Computer Science: cache invalidation and naming things. - Phil Karlton

Naming your variables well is important to writing readable code. First, you have to use names that are legal. Variable names can contain uppercase and lowercase letters, numbers, `_` and `$`. They may not start with a letter. 

Second, it is a good idea to follow some common conventions. Avoid numbers, `_`, `$` in your variable names, because these symbols are often used as informal hints about variables in some libraries. Use lowercase letters for your variable names. If your name is made of multiple words, begin the second and remaining words with a single uppercase letter. This style is called `cammelCase`.

Third, choose names that clearly describe the purpose of the variable. Good variable names are usually nouns.

Name | Note
--- | ---
highScore | legal, camel case, descriptive
high_score | doesn't follow camel case convention
myVar | not descriptive
2ndPlace | illegal: starts with a number
$score | legal, but avoid `$` and `_` as these are often used to indicate special 

### Declaring Variables

Before you can use a variable you must (well, should) declare it. Declaring a variable announces that you will use it and establishes its name. You use the `var` keyword to declare a variable. 

```javascript
var width;
var height;
```

### Assigning Values to Variables

You can assign a value to a variable using the assignment operator (`=`). 

```javascript
width = 100;
```

You can assign a value to a variable right when you declare it. It is a good practice to do so.

```javascript
var width = 100;
```

If you declare a variable but don't assign a value to it, the variable's value will be a special value called `undefined`. 

### Evaluating Variables

To access the value of a variable, you simply use it's name anywhere a value is expected.

```javascript
rect(10, 10, width, height);
```

### Variable Scope

Variables have a property called scope that describes where in the program the variable is valid. If you declare a variable outside of a function it will be global, and can be accessed anywhere in your program. If you declare it inside a function, like `setup()` or `draw()`, it will only exist within that function.

```javascript
var width1 = 100;
void setup() {
	var width2 = 200;
}
void draw() {
	rect(10, 10, width1, 10); // works, width 1 is global
	rect(100, 100, width2, 10); // breaks, width 2 only exists inside setup
}
```


### Variable Example

<a href="./variables.js" class="p5_example show-lab show-lab-link hidden">test_example</a>

### More Variables

<a href="./variables_2.js" class="p5_example show-lab show-lab-link hidden">test_example</a>


## Working with Conditional Statements

So far the statements in our draw function have been run from top to bottom, each line executing once. **Flow control** statements allow you to structure your program into parts that can be executed conditionally or repeatedly. We will look at conditional statements today, and loops next week.

Conditional statements are powerful; they allow your code to make decisions.

This is the general syntax for a conditional statement:

```javascript
if ( condition ) {
	// do this if the test succeeds
} else {
	// or do this instead
}
```

This example tests the value of `drawEllipse` before drawing the ellipse. If `drawEllipse` is not true, the ellipse command will not be executed.

```javascript
if (drawEllipse === true) {
	ellipse(200, 200, 200, 200);
}
```

### Conditions

The **condition** is the test the program uses to decide whether to run the code. The condition can be a literal value, a variable, or an expression. Javascript will evaluate the condition and if the result is `true` (or a non-zero number or other value that is considered logically true) the code in the following block is executed. If the result is `false` (or a value that is considered logically false) the code is not run.

Comparison operators like ===, !==, <, >, <=, and >= are used to compare values. 

[Comparison Operators @ MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)


### Blocks

A **block** is a group of statements that are executed in together, in order. Blocks in javascript start with `{` and end with `}`. All of the statements in the block following an `if` statement will be executed, or not, together.

```javascript
if (drawEllipses === true) {
	ellipse(200, 200, 200, 200);
	ellipse(220, 200, 200, 200);
	ellipse(240, 200, 200, 200);
}
```

### Else

You can optionally include an `else` block after your `if` block. The else block is executed if, and only if, the condition is false. This example will draw either an ellipse or a rectangle, depending on the value of `drawEllipse`:

```javascript
if (drawEllipse === true) {
	ellipse(200, 200, 200, 200);
} else {
	rect(200, 200, 200, 200);
}
```



## Using P5 `random()`

The p5 `random()` command will pick a random number. The number can then be assigned to a variable or used anywhere you need a number. When you use random you can provide a range you want the random number to be in. The number won't be constrained to integers.

[random() @ p5.js Reference](http://p5js.org/reference/#/p5/random)

```javascript
a = random(10); // a number between 0 and 10
b = random(10, 20); // a number between 10 and 20
```

### A Random Example

<a href="./random.js" class="p5_example show-lab show-lab-link hidden">test_example</a>


## Using P5 `noLoop()`

The p5 `noLoop()` command tell p5 you only want to draw once. 

<a href="./noLoop.js" class="p5_example show-lab show-lab-link hidden">test_example</a>

## Pulling it Together

<a href="./combined.js" class="p5_example show-lab show-lab-link hidden">test_example</a>


# Assignment 2
This week's asignment is to create a program that generates a drawing that changes everytime the program is run. [Here are the details.](https://github.com/PUCD2035-E-F15/assignment_2/blob/master/prompt.md)

[Project Template](https://github.com/PUCD2035-E-F15/assignment_2)




## Tool Upgrade

### The Javascript Console

Don't forget to open the Chrome Javascript console with Command-Option-J. This is where Chrome will report Javascript errors, and you can print messages to th console with `console.log()`.

### Live Reload

Switching to the browser and reloading after every change isn't hard, but it can grow old fast. Install the Atom `liverelad` package to automatically reload the browser every time you save.

### Syntax Checking

Install the `linter` and `linter-jshint` package to allow Atom to check your syntax as you work. Syntax errors will be highlighted in your editor, before you even try to run your work in the browser.

### Syntax Formatting

Install the `jsformat` package to automatically reformat your code as you work. JSFormat will make sure that little things indentation and spacing are consistent. This will make your code easier to read and maintain.



# Extra Credit

From the [syllabus](../syllabus.html): 

Extra Credit will be given for formal contributions to the class. One way to contribute is to provide corrections, enhancements, or additions to the class materials and website. For example, spelling and grammar corrections submitted through a pull request will earn a small amount of credit. More credit can be earned by adding content to class notes or resource pages, authoring small tutorials that benefit the class, etc.

Both the assignments and the class site (this site) are hosted on github. The class notes are written in Markdown (like the README.md file in the assignment templates) and you can look at them in the class_notes repository. Github gives you tools to fork the repo, edit the problem and suggest the change be added to the offical repo (a pull request). Using Githubs web-based editor, you can complete the whole process without even cloning the repo to your computer.

# Interesting

- [What is Code](http://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/)
- [Making Things with Math](http://acko.net/tv/wdcode/)
- [Mike Bostock of NYT and D3 Fame AMA](https://www.reddit.com/r/dataisbeautiful/comments/3k3if4/hi_im_mike_bostock_creator_of_d3js_and_a_former/)
- [Backwards Brain Bicycle](https://www.youtube.com/watch?v=MFzDaBzBlL0)
