# Week 12 Class Notes

Class | Agenda
------|-------
Week 10, November 6 | Due: Tool Merge <br> Classifying Interactions Discussion / Narrative Workshop / Intro Final
Week 11, November 13 | Due: Proposal Research + Writing <br> Creating Proposals + Treatments / Individual Meetings / In class work
Week 12, November 20 | Due: Proposal Decks w/ Comps <br> Group Crits / In class work
No Class, November 27 | Thanksgiving Break
**Week 13, December 4** | **Due: POC <br> Creating a P5 + Github project / In class work**
Week 14, December 11 | Due: WIP <br> Special Topic Demos / Group Crits / In class work
Week 15, December 18 | Due: Final Project <br> Final Crit



# Starting from "Scratch"

Up to now, you've been starting project by cloning a template repository. Today, we'll take a look a short look at HTML, JS, and CSS, and build a working P5-based web project piece by piece.


# But not really from Scratch

> If you wish to make an apple pie from scratch, you must first invent the universe.
> 
> — Carl Sagan, Cosmos

The projects you have been making in class are defined at a very **high level** of abstraction, and rely on an incredible amount of code written by others. 

For example:
- Your project uses Javascript to define behavior.
- The Javascript is **interpreted** in real time by a javascript engine called V8. V8 is an open-source engine created by Google. It has about **1.5 million lines of code.**
- V8 wouldn't work on it's own, it is run in the context of the Operating System (OS X, Windows, Linux). The OS has **tens of millions of lines of code**. 

Also:
- Your project relies directly on the P5 library do draw shapes easily.
- The P5 library uses the Javascript Canvas and DOM APIs to create a drawing context and to draw shapes. 
- The shapes are defined at a high level: stroke color, fill color, starting point, ending point, Bézier curve control points. Algorithms that **rasterize** this data (draw it out pixel by pixel) have been researched and refined by dozens of teams of programmers and mathematicians. 

And:
- Your project is written in HTML, so it can be rendered by a web browser that will fetch your project over HTTP (Hypertext Transfer Protocol).
- Loading a page on the Internet involves dozens of computers, and millions of dollars of physical infrastructure.
> You've just put into play DNS, TCP, UDP, IP, Wifi, Ethernet, DOCSIS, OC, SONET, and more. Those are actually such incredibly complex technologies that they'll make any engineer dizzy if they think about them too much, and such that no single company can deal with that entire complexity.

[Jean-Baptiste “JBQ” Quéru, Dizzying but Invisible Depth](https://plus.google.com/+JeanBaptisteQueru/posts/dfydM2Cnepe)


# HTML, CSS, Javascript

Okay, great, [It's turtles all the way down](https://en.wikipedia.org/wiki/Turtles_all_the_way_down), but we don't need to understand how the computer hardware and operating system work to start making web pages. We don't even really need to understand much of how the browser works. We can float over all of that effort and work at a very high level: HTML, CSS, and Javascript.

- HTML describes _what is says_
- CSS describes _how it looks_
- Javascript describes _what it does_

[web_demo](web_demo)


# The P5 Project Template

I've updated the [p5_template](https://github.com/PUCD2035-E-F15/p5_template) repo. You can use it as a basis for your project, but instead of cloning the repo we'll build a project from scratch and copy files from the template into it.

1. Create a new project on github.
2. Clone the project to your computer.
3. Download the p5_template files.
4. Copy over the files, check them, customize them.
5. Make sure it looks right in the browser.
6. Make an initial commit.

# Changing the Page

```
window.location.href = '...';
```

# Assignment

Your final project is due in two weeks.
