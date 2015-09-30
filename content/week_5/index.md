# Week 5 Class Notes

Opening Video: ?

## Section One Test is Next Week

There will be a test at the beginning of next weeks's class. This test will include one or two programming challenges and a written portion. The challenges will require a good understanding of the concepts introduced in the first five weeks of the class. The written portion will include questions related to javascript and p5. The test will be open Internet, you can consult any Internet references you wish during the test.

## Week 4 Challenge Overview

## Code Comments and Style


## Working with Images

Working with images in javascript with p5 is pretty easy. The main catch is that you need to have things set up right for it to work on your local computer.

<a href="./image.js" class="p5_example show-lab show-lab-link hidden">image.js</a>

- Create a global variable to hold the image.
- Load the image with `loadImage` from the `preload()` function. This will ensure your image is fully loaded when you try to draw it.
- Draw your image with the `image()` function.
- Size your files appropriately. They should usually be the exact size you are going to use them. With high res cameras and scanners it is easy to create high res files, but usually you don't need that for on screen work. If your image is bigger than 1000 pixels tall or wide, without a good reason, somethings is wrong.
- Save your images as jpg (good for photos), or png (good for graphics, or if you want transparency).
- Put them in the same folder as your sketch.js



## Using a Local Server

To work with images in p5 you are going to need a local server. A local server is a web server application that runs on your computer and provides your `.html`, `.js`, and image files to Chrome. The local server is just a web server that is running locally on your computer.

You need a local server because Chrome expects websites to be hosted online, not on local files in your computer. Chrome will load simple projects locally, but projects that load external files from javascript (like images) need to be properly served.

[P5 Tutorial on Local Servers](https://github.com/processing/p5.js/wiki/Local-server)



# Homework

This week's homework is to recreate a series of small programs (challenges).

[Read the Assignment Prompt](https://github.com/PUCD2035-E-F15/assignment_4/blob/master/prompt.md)

[View the Challenges](challenges.html)

[View the Assignment Repo](https://github.com/PUCD2035-E-F15/assignment_4) 


```


```
