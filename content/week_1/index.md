# Week 1 Class Notes

Welcome Music: [Vib Ribbon Intro](http://www.youtube.com/watch?v=EbHO1ZYhtLk)

## Course Introduction

- Syllabus Review
- Class Introductions

### Learning Objectives

We are going to cover a lot of material in this class. You learn the basics of computer programming for creative applications. You will also develop your design skills by practicing methods of design for interactive and other digital projects. A full outline of class topics is [here](../topics.html).

### What Creative Computing Is

Computers are widely used in art and design. Almost all design work created today contains computationally generated/altered elements.

Many effects that were created by custom code in the past are now baked into Photoshop and After Effects. Coding can be used to create interactive experiences, animations, and even static illustration work. Code grants the ability to explore variations of complex themes quickly.

With traditional design and art media, you are constrained to a single expression of your intent. With digital media, you can codify your intent, and create works and forms that can change in response to unknown future contexts. You can create systems that can grow. You can build your intentions into your work and create a work that can not only speak AT your audience but that can engage in a dialog.

Code is a powerful tool for creative work:

- Exploring Form
  
  [3D Zoetrope](https://vimeo.com/62413774), [Glass Printing](https://vimeo.com/136764796), [StippleGen](http://www.evilmadscientist.com/2012/stipplegen-weighted-voronoi-stippling-and-tsp-paths-in-processing/), [Floccular Portraits](http://www.flong.com/projects/floccugraph/)

- Creating Dynamic Work
  
  [Generative Cities](https://vimeo.com/33246377), [Boids](https://vimeo.com/13969685), [Withervanes](https://vimeo.com/105485532)

- Creating Interactive Work
 
  [Vector Park](http://www.vectorpark.com/), [Motion V](https://vimeo.com/45417241), [Recursive Drawing](http://recursivedrawing.com/)


<!-- ############################################# -->

## Introduction to Programming

### What a Program Is

- A program is a set of instructions that explains to the computer what you want it to do.
- A program is a file on the computer that can be read and executed.
- A program is an art medium that lets you express how your work should behave, rather than simply how it should look.

### What Programming Is

Computer programming is the process of creating a program that does what you want. Programming is complex mental activity that requires and strengthens a variety of skills. **Skills you already have**, even if you have never programmed a computer before. 

- Clearly defining your goals, creating a detailed plan for achieving them, and expressing your plan in writing. 
- Solving problems through careful observation, deliberate testing, and thoughtful consideration. 
- Searching for and filtering information in documentation and online forums.

We will also be introducing some skills that may be new to you. But in most cases these skills are extensions of the skills above.

- How to plan and implement a computer program
- Writing and reading the Javascript language
- Debugging problems in your code
- Reading technical documentation

### Learning to Program

The most important skill in programming is learning how to think formally about what you are trying to make the computer do—to break down and specifically describe a complex, initially vague goal. This skill is central to programming regardless of the language and environment you choose. This skill is extremely valuable in almost all collaborative (and many solo) creative endeavors, even when a computer is not involved.

The next most important skill is learning how to solve problems. In programming, this is often called debugging. This requires observing the problem and understanding it, research, and deliberate testing. **Most of a programmer's time is spent fixing problems, not writing code.** This is especially true when starting to program or programming in a new language or domain. Spending time fixing problems does **not** indicate that you are bad at programming or don't "get it".

A third important skill is learning to read technical documentation. There are many programming languages and countless libraries and other resources. No programmer can remember every detail of the languages and APIs that they use. Programmer spend as much time looking things up as coding. 

The final skill is learning how to communicate in the language you are using. This requires both understanding the grammar or syntax of the language, as well as the vocabulary. We will spend much of our time in class covering aspects of this skill, **the other skills will largely develop only with experience**.


### Computers are Ignorant Stupid Jerks

Computers are Ignorant; they have no knowledge. They know how to do only a few very basic things. A computer doesn't know what a square, a day, or a cat is, unless you explain it. 

Computers are Stupid; they have no intelligence whatsoever. They can not figure out how to do something on their own. When you explain something to a person, they are responsible for most of the work of learning. When you explain how to do something to a computer, you must do ALL of the work. They will consider your instructions without any sense of context or history. They can not "catch on". 

Computers are Jerks; they are obnoxious, rude, and completely lack empathy. Computers don't mean to be, but because they are stupid and ignorant they often come off like a jerk. When a computer does what you ask, if they encounter even the slightest formatting mistake, they will refuse to continue. When your instructions don't have formatting mistakes, the computer will do exactly what you ask them to, rather than what you clearly intend.




<!-- ############################################# -->

## Introduction to Javascript and p5.js

### What Javascript Is

Javascript is a programming language, it allows you to express instructions for a computer to follow. Javascript is most commonly used alongside HTML and CSS to add interactivity to web pages. A great place to learn about javascript is the [MDN Javascript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**An example of Javascript**
```javascript
function handleClick() {
	alert("Hello, World!");
}
document.getElementById("example-button").addEventListener( "click", handleClick);
```

<button id="example-button" class="btn btn-success">Example Button</button>
<script type="text/javascript">
function handleClick() {
	alert("Hello, World!");
}
document.getElementById("example-button").addEventListener( "click", handleClick);
</script>





### What p5.js Is

From the [p5js Homepage](http://p5js.org/):
> p5.js is a JavaScript library that starts with the original goal of <a href="http://processing.org">Processing</a>, to make coding accessible for artists, designers, educators, and beginners, and reinterprets this for today's web. 
> 
> 
> Using the original metaphor of a software sketchbook, p5.js has a full set of mdrawing functionality. However, you're not limited to your drawing canvas, you can think of your whole browser page as your sketch!
>
>
> For this, p5.js has addon libraries that make it easy to interact with other HTML5 objects, including text, input, video, webcam, and sound.

[Introduction to p5 Video](http://hello.p5js.org/)


### A Simple Example
<a href="./simple_p5.js" class="p5_example show-lab show-lab-link hidden">test_example</a>


### An More Complex Example
<a href="./complex_p5.js" class="p5_example show-lab show-lab-link hidden">test_example</a>

<!-- ############################################# -->

## Programming with Javascript and p5.js

### Assignment One

Go take a look at [Assignment One on Github](https://github.com/PUCD2035-E-F15/assignment_1). This assignment serves as an introduction to the the tools you will use in this class, and a starting point for exploring Javascript and p5. We are going to start this assignment in class today. You will continue working on it this week. It is due before the start of class next week.


### Setting Up your Tools and Workspace

We will be working with the following software. 

- [Atom](https://atom.io/)
- [Chrome](http://www.google.com/chrome/)
- [Github Desktop](https://desktop.github.com/)

You will also need to set up an account on [Github](http://www.github.com)

### Introduction to Git and Github

[Git](http://git-scm.com/) is a version control system. As you work on a project it will grow and change. Git keeps track of the changes you make to the files in your project, keeping a valuable history. With version control, you can review changes to a file over time and you can revert a single file or entire project to an earlier version if (when) something goes wrong. Git also provides powerful tools for sharing your work with others and merging the work of teammates.

[Github](http://www.github.com) is a service that hosts software projects that use Git. Github builds on Git, adding features for collaborative coding such as bug tracking and code reviews. Github hosts a huge array of open-source and private projects and libraries.

Normally, you use the Git software through its command line interface. If you are not comfortable using the command line, you won't be comfortable using Git in this way. [Github Desktop](https://desktop.github.com/) is a simple graphical user interface for Git, with added integration with Github. Github desktop isn't as powerful as the command line interface, but it can cover the basic workflows we'll use in class.

### Forking and Cloning the Project Template

I have created a template project that you will use as the basis of your first week's assignment. This template is hosted on Github.

Start the assignment creating a copy of the project template. Github calls this [forking](https://help.github.com/articles/fork-a-repo/), and makes it easy to create forks of projects hosted on Github.

Once you have forked the project template, you'll need to clone it to your local computer to work with. When you work with Git and Github, you'll often have two copies of your project: one on your local computer where you make changes, and another on Github where other people can see your work. The Github app makes it easy to maintain a list of changes you make to your project, and to 'push' those changes to Github.

### Viewing the Project

Chrome can open files on your computer and will show them as if they were normal webpages. You need to open `index.html` to view the project in Chrome.

### Editing the Project

To make changes to the template and to create your program, you will use a text editor. There are a few files in the project template, but for now you just need to edit `sketch.js`.

### The p5 Drawing API

In this weeks assignment you'll be using the p5 library to create a drawing. p5 provides several commands for drawing shapes and working with color. You can view a full list of commands with descriptions and example code on the [p5 API reference](http://p5js.org/reference/). This reference includes sample code for each command, and allows you to edit the samples and see the results.

<a href="./drawing.js" class="p5_example show-lab show-lab-link hidden">test_example</a>

### Using the Console and `console.log()`

Chrome has built in developer tools. An important tool is the Javascript Console, which can be opened with Command-Option-J. Chrome will display errors it finds when running your Javascript here. You can also print your own messages to the console using `console.log()`.

<a href="./console_log.js" class="p5_example show-code show-lab-link hidden">test_example</a>


### Using Comments
<a href="./comments.js" class="p5_example show-lab show-lab-link hidden">test_example</a>

### Prompt Generator

<a href="./prompt.js" class="p5_example show-lab show-lab-link hidden">test_example</a>

<!-- ############################################# -->

## Related Readings and Resources

- [Javascript Basics @ MDN](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics)

- [p5 Tutorials](http://p5js.org/tutorials/)

- [Javascript and P5 at Khan Academy](https://www.khanacademy.org/computing/computer-programming/programming)

- [Javascript @ Code Academy ](https://www.codecademy.com/tracks/javascript)

- [Lynda.com](http://www.lynda.com/)

- [Good Resources for Learning Git and GitHub](https://help.github.com/articles/good-resources-for-learning-git-and-github/)

- [Chrome DevTools Overview](https://developer.chrome.com/devtools)
