# Week 5 Class Notes

Opening Video: ?

## Section One Test is Next Week

There will be a test at the beginning of next week's class. This test will include one or two programming challenges and a written portion. The challenges will require a good understanding of the concepts introduced in the first five weeks of the class. The written portion will include questions related to javascript and p5. The test will be open Internet, you can consult any Internet references you wish during the test.

## Week 4 Challenge Overview

## Code Style

#### Poor Style
<a href="./style_bad.js" class="p5_example show-lab show-lab-link hidden">image.js</a>

#### Better Style
<a href="./style.js" class="p5_example show-lab show-lab-link hidden">image.js</a>

#### Good Style Practices
- Be consistent.
- Choose descriptive, unambiguous names.
- Properly indent and space your code (use jsformat).
- Avoid repeated code, especially avoid redundant code.
- Avoid repeated "magic" literals. Use a variable to name them and make them easier to tweak.
- Use a header comment to describe what your code does.
- Use comments in your code to explain why your code does what it does.
- Avoid comments that simply restate what the code says.

## Working with Images

### Digital Images

An 8-bit RGB Image
```
0,0,0     255,0,0     0,0,0
255,0,0   255,0,0     255,0,0
0,0,0     255,0,0     0,0,0
```

### p5 Image API

Working with images in javascript with p5 is pretty easy. The main catch is that you need to have things set up right for it to work on your local computer.

<a href="./image.js" class="p5_example show-lab show-lab-link hidden">image.js</a>

<a href="./image2.js" class="p5_example show-lab show-lab-link hidden">image.js</a>

When working with images:

- Create a global variable to hold the image.
- Load the image with `loadImage` from the `preload()` function. This will ensure your image is fully loaded when you try to draw it.
- Draw your image with the `image()` function.
- Size your files appropriately. They should usually be the exact size you are going to use them. With high res cameras and scanners it is easy to create high res files, but usually you don't need that for on screen work. If your image is bigger than 1000 pixels tall or wide, without a good reason, somethings is wrong.
- Save your images as jpg (good for photos), or png (good for graphics, or if you want transparency).
- Put them in the same folder as your sketch.js



## Using a Local Server

To work with images in p5 you are going to need a local web server. A web server is a application that provides web files over the Internet to Chrome. A local server is just a web server that is running locally on your computer. Your web browser will communicate with the server the same way it would communicate with a remote web server, but because both applications are on the same computer you don't even need to be on a network for this to work.

You need a local server because Chrome expects websites to be hosted online, not on local files in your computer. Chrome will run simple projects from `file://`, but scripts that load external files from javascript (like images) will violate security measures in Chrome. Chrome won't have a problem if the files are served up by the local server.

Many options for running local servers exist. [Anvil](http://anvilformac.com/) is a simple OS X App that makes setting up a local server easy. Just install Anvil, tell it to serve the folder that contains your project files, and then load up your site in Chrome.

[P5 Tutorial on Local Servers](https://github.com/processing/p5.js/wiki/Local-server)



# Homework

- First, there is no homework this week.
- Second, you may rework any and all of the first four week's assignments and resubmit. Be sure to use good style. The first two assignments are about drawing with code, so don't use imported images. You know much more javascript syntax now, think about how you can apply it towards each assignment. Email me a clear list of the assignments/challenges you are resubmitting. All resubmits are due before class begins next week.  
- Third, there is a bonus assignment: make a p5 project using the image API.
- Last, next week is the quiz. Study.

Note: reworking and resubmitting the first four assignments is a great way to study. 




```


```
