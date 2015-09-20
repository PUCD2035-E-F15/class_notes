# Week 4 Class Notes

Opening Video: [Tilt Brush](https://www.youtube.com/watch?v=ayH_pwSTlk4)

## Section One Test is Coming

There will be a test at the beginning of week six's class. This test will include one or two programming challenges and a written portion. The challenges will require a good understanding of the concepts introduced in the first five weeks of the class. The written portion will include questions related to javascript and p5. The test will be open Internet, you can consult any Internet references you wish during the test.

## Week 3 Challenge Overview

## Global vs Function Scope

<a href="../week_3/animation.js" class="p5_example show-lab show-lab-link hidden">test_example</a>

The example above is from last week. What happens if position is declared inside `draw`?

## More Javascript Syntax

What to Know		| What to Do
---					| ---
values				| operators
literals			| expressions
variables			| statements
arrays				| control structures `if`, `for`
data objects		| functions

<table>
<tr><th>What to Know + What to Do</th></tr>
<tr><td>Object Oriented Programming</td></tr>
</table>

## Functions

A functions is a named procedure, set of instructions to preform a specific task. 

[Functions in the MDN Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)


There are many benefits to using functions:
- Breaking down a complex task into a series of simpler tasks is key programming. Functions allow you to break a complex program into a collection of smaller ones.
- Functions allow you to organize and name parts of your program, making it easier to read and understand.
- Functions can be reused in multiple places.
- Functions can take parameters, so they can produce different results each time they are run.
- Functions can return a value, allowing you to create reusable calculations.

The basic syntax for a function looks like this:

```javascript
function name() {
	// what to do
}
```

You have already created functions in all of your programs, `setup` and `draw` are functions you have defined.

### Naming Functions

Choosing good names for functions is important. Function names should concisely describe what the function does. Good function names usually start with verbs. Use camel case when naming functions and be sure the first letter is lowercase (by convention starting a function name with an uppercase letter has special meaning related to Object Oriented Programming).

### Defining and Calling Functions

<a href="./function.js" class="p5_example show-lab show-lab-link hidden">test_example</a>

In this example, the code for drawing the target has been pulled out of `draw`and put into a function named `drawTarget`. This makes the code easier to read, but functions can offer more that this. The function is defined starting on line 16, and called on line 12.

### Parameters

<a href="./function2.js" class="p5_example show-lab show-lab-link hidden">test_example</a>

Parameters are values that you pass to a function when you call it. When you define the function you list the parameter names. These will work like variables (they are variables) inside your function. The values of these parameters are specified inside the parenthesis when you call the function. 


### Return Value



```javascript
function addNumbers(a, b) {
	return a + b;
}

var sum = addNumbers(2, 2);
console.log(sum);
// 4
```


<a href="./function3.js" class="p5_example show-lab show-lab-link hidden">test_example</a>


## Arrays

An array is an ordered set of values.

### Assigning and Accessing Array Values

<a href="./array.js" class="p5_example show-code show-lab-link hidden">test_example</a>

- you can initialize an array with an array literal `[10, 20, 30]`
- you can create an empty array with `x = []`
- you can access a value in an array by specifying its position inside `[]`
- the first position in the array is `0`, not `1`

### Using an Array

<a href="./array2.js" class="p5_example show-lab show-lab-link hidden">test_example</a>


## Data Objects

A object is a collection of named values.

### Assigning and Accessing Object Values

<a href="./object.js" class="p5_example show-code show-lab-link hidden">test_example</a>

- you can initialize an object with an array literal `{first: "Siouxsie", last: "Sioux" }`
- you can create an empty object with `x = {}`
- you can access a value in an object by specifying its name after a `.` (the dot operator)


# Using a Data Object

<a href="./object2.js" class="p5_example show-preview !show-lab-link hidden">test_example</a>



# Homework

This week's homework is to recreate a series of small programs (challenges).

[Read the Assignment Prompt](https://github.com/PUCD2035-E-F15/assignment_4/blob/master/prompt.md)

[View the Challenges](challenges.html)

[View the Assignment Repo](https://github.com/PUCD2035-E-F15/assignment_4)


```


```
