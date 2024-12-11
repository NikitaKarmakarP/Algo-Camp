# Algo-Camp
**"Unlocking the Power of Functional Programming: Dive into JavaScript with practical examples and intuitive concepts.**

**"✨ Welcome to Algo-Camp! 🚀 Learn, Code, and Master JavaScript with fun and practical examples! 🌟"**

# Here I upload all the documents al the code which I learn from algo camp
## 1) Higher Order fn
- **These are functions that depends & operate an other fn** 
- **Higher order fn take another fn as an argument or reurn a function as an argument and then execute the logic**

**Example:**

  function gum(){

  }

  function *fun* (gum){

  gum();

  }

  **Here *fun* is higher order function** 

## 2) Assigning a function to a variable
## js

const foo = () => {

  console.log("foobar");

};

foo(); // Invoke it using the variable
// foobar

**We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.**

**Note:** **Even if your function was named, you can use the variable name to invoke it. Naming it will be helpful when debugging your code. But it won't affect the way we invoke it.**

## 3) Passing a function as an argument
## js

function sayHello() {

  return "Hello, ";

}

function greeting(helloMessage, name) {

  console.log(helloMessage() + name);

}

// Pass `sayHello` as an argument to `greeting` function

greeting(sayHello, "JavaScript!");

// Hello, JavaScript!

**We are passing our sayHello() function as an argument to the greeting() function, this explains how we are treating the function as a value.**

**Note: The function that we pass as an argument to another function is called a callback function. sayHello() is a callback function.**

## 4) Returning a function
## js

function sayHello() {

  return () => {
  
    console.log("Hello!");
  
  };

}

**In this example, we are returning a function from another function - We can return a function because functions in JavaScript are treated as values.**

**Note: A function that returns a function or takes other functions as arguments is called a higher-order function.**

**One of the higher order function is map function**

# Callback Hell
**A guide to writing asynchronous JavaScript programs**

## What is "callback hell"?
**Asynchronous JavaScript, or JavaScript that uses callbacks, is hard to get right intuitively. A lot of code ends up looking like this:**

  fs.readdir(source, function (err, files) {

  if (err) {
  
    console.log('Error finding files: ' + err)
    
   } else {
  
    files.forEach(function (filename, fileIndex) {
    
      console.log(filename)
      
      gm(source + filename).size(function (err, values) {
      
        if (err) {
        
          console.log('Error identifying file size: ' + err)
          
        } 
        
        else {
        
          console.log(filename + ' : ' + values)
          
          aspect = (values.width / values.height)
          
          widths.forEach(function (width, widthIndex) {
          
            height = Math.round(width / aspect)
            
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
            
              if (err) console.log('Error writing file: ' + err)
              
            })
            
          }.bind(this))
          
        }
        
      })
      
    })
    
  }
  
})

**See the pyramid shape and all the }) at the end? Eek! This is affectionately known as callback hell.**

## What are callbacks?
**Callbacks are just the name of a convention for using JavaScript functions. There isn't a special thing called a 'callback' in the JavaScript language, it's just a convention. Instead of immediately returning some result like most functions, functions that use callbacks take some time to produce a result. The word 'asynchronous', aka 'async' just means 'takes some time' or 'happens in the future, not right now'. Usually callbacks are only used when doing I/O, e.g. downloading things, reading files, talking to databases, etc.**

## When you call a normal function you can use its return value:

var result = multiplyTwoNumbers(5, 10)

console.log(result)

// 50 gets printed out

**However, functions that are async and use callbacks don't return anything right away.**

var photo = downloadPhoto

// photo is 'undefined'!

**In this case the gif might take a very long time to download, and you don't want your program to pause (aka 'block') while waiting for the download to finish.**

**Instead, you store the code that should run after the download is complete in a function. This is the callback! You give it to the downloadPhoto function and it will run your callback (e.g. 'call you back later') when the download is complete, and pass in the photo (or an error if something went wrong).**

function handlePhoto (error, photo) {

  if (error) console.error('Download error!', error)
  
  else console.log('Download finished', photo)
}

console.log('Download started')

**The biggest hurdle people have when trying to understand callbacks is understanding the order that things execute as a program runs. In this example three major things happen. First the handlePhoto function is declared, then the downloadPhoto function is invoked and passed the handlePhoto as its callback, and finally 'Download started' is printed out.**

**Note that the handlePhoto is not invoked yet, it is just created and passed as a callback into downloadPhoto. But it won't run until downloadPhoto finishes doing its task, which could take a long time depending on how fast the Internet connection is.**

## This example is meant to illustrate two important concepts:

- The handlePhoto callback is just a way to store some things to do at a later time
- The order in which things happen does not read top-to-bottom, it jumps around based on when things complete

## How do I fix callback hell?
**Callback hell is caused by poor coding practices. Luckily writing better code isn't that hard!*

## You only need to follow three rules:

1. **Keep your code shallow**
Here is some messy browser JavaScript that uses browser-request to make an AJAX request to a server:

var form = document.querySelector('form')

form.onsubmit = function (submitEvent) {

  var name = document.querySelector('input').value
  
  request({
  
    uri: "http://example.com/upload",
    
    body: name,
    
    method: "POST"
    
  }, function (err, response, body) {
  
    var statusMessage = document.querySelector('.status')
    
    if (err) return statusMessage.value = err
    
    statusMessage.value = body
    
  })
  
}

**This code has two anonymous functions. Let's give em names!**

var form = document.querySelector('form')

form.onsubmit = function formSubmit (submitEvent) {

  var name = document.querySelector('input').value
  
  request({
  
    uri: "http://example.com/upload",
    
    body: name,
    
    method: "POST"
    
  }, function postResponse (err, response, body) {
  
    var statusMessage = document.querySelector('.status')
    
    if (err) return statusMessage.value = err
    
    statusMessage.value = body
    
  })
  
}

**As you can see naming functions is super easy and has some immediate benefits:**

- makes code easier to read thanks to the descriptive function names
- when exceptions happen you will get stacktraces that reference actual function names instead of "anonymous"
- allows you to move the functions and reference them by their names
- Now we can move the functions to the top level of our program:

document.querySelector('form').onsubmit = formSubmit

function formSubmit (submitEvent) {
  
  var name = document.querySelector('input').value
  
  request({
  
    uri: "http://example.com/upload",
    
    body: name,
    
    method: "POST"
  
  }, postResponse)

}

function postResponse (err, response, body) {

  var statusMessage = document.querySelector('.status')
  
  if (err) return statusMessage.value = err
  
  statusMessage.value = body

}

**Note that the function declarations here are defined at the bottom of the file. This is thanks to function hoisting.**

2. **Modularize**
**This is the most important part: Anyone is capable of creating modules (aka libraries). To quote Isaac Schlueter (of the node.js project): "Write small modules that each do one thing, and assemble them into other modules that do a bigger thing. You can't get into callback hell if you don't go there."**

**Let's take out the boilerplate code from above and turn it into a module by splitting it up into a couple of files. I'll show a module pattern that works for either browser code or server code (or code that works in both):**

**Here is a new file called formuploader.js that contains our two functions from before:**

module.exports.submit = formSubmit

function formSubmit (submitEvent) {
 
  var name = document.querySelector('input').value
  
  request({
  
    uri: "http://example.com/upload",
    
    body: name,
    
    method: "POST"
  
  }, postResponse)

}

function postResponse (err, response, body) {

  var statusMessage = document.querySelector('.status')
  
  if (err) return statusMessage.value = err
  
  statusMessage.value = body

}

**The module.exports bit is an example of the node.js module system which works in node, Electron and the browser using browserify. I quite like this style of modules because it works everywhere, is very simple to understand and doesn't require complex configuration files or scripts.**

**Now that we have formuploader.js (and it is loaded in the page as a script tag after being browserified) we just need to require it and use it! Here is how our application specific code looks now:**

var formUploader = require('formuploader')

document.querySelector('form').onsubmit = formUploader.submit

## Now our application is only two lines of code and has the following benefits:
- easier for new developers to understand -- they won't get bogged down by having to read through all of the formuploader functions
- formuploader can get used in other places without duplicating code and can easily be shared on github or npm

3. **Handle every single error**
**There are different types of errors:**
- syntax errors caused by the programmer (usually caught when you try to first run the program),
- runtime errors caused by the programmer (the code ran but had a bug that caused something to mess up),
- platform errors caused by things like invalid file permissions, hard drive failure, no network connection etc.
- This section is only meant to address this last class of errors.

**The first two rules are primarily about making your code readable, but this one is about making your code stable. When dealing with callbacks you are by definition dealing with tasks that get dispatched, go off and do something in the background, and then complete successfully or abort due to failure. Any experienced developer will tell you that you can never know when these errors happen, so you have to plan on them always happening.**

**With callbacks the most popular way to handle errors is the Node.js style where the first argument to the callback is always reserved for an error.**

 var fs = require('fs')

 fs.readFile('/Does/not/exist', handleFile)

 function handleFile (error, file) {
   
   if (error) return console.error('Uhoh, there was an error', error)
   
   // otherwise, continue on and use `file` in your code
 
 }
**Having the first argument be the error is a simple convention that encourages you to remember to handle your errors. If it was the second argument you could write code like function handleFile (file) { } and more easily ignore the error.**

**Code linters can also be configured to help you remember to handle callback errors. The simplest one to use is called standard. All you have to do is run $ standard in your code folder and it will show you every callback in your code with an unhandled error.**

## Async Pogramming with JS
1) JS is sycn in nature
2) JS is Single threaded

(if we execute valid ecmascript todo viz given by the stackholders)

**conole.log is not a core javascript feature**

## POSIX defines: 
- Application programming interfaces (APIs) 
- Command line shells 
- Utility interfaces 
- A standard interface and environment 
- Common utility programs 
- Fundamental services needed to build POSIX-compliant applications 
- Standard semantics and syntax 
