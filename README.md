# Algo-Camp
# Here I upload all the documents al the code which I learn from algo camp
# 1) Higher Order fn
- **These are functions that depends & operate an other fn** 
- **Higher order fn take another fn as an argument and then execute the logic**

**Example:**

  function gum(){

  }

  function *fun* (gum){

  gum();

  }

  **Here *fun* is higher order function** 

# 2) Assigning a function to a variable
# js

const foo = () => {

  console.log("foobar");

};

foo(); // Invoke it using the variable
// foobar

**We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.**

**Note:** **Even if your function was named, you can use the variable name to invoke it. Naming it will be helpful when debugging your code. But it won't affect the way we invoke it.**

# 3) Passing a function as an argument
# js

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

# 4) Returning a function
# js

function sayHello() {

  return () => {
  
    console.log("Hello!");
  
  };

}

**In this example, we are returning a function from another function - We can return a function because functions in JavaScript are treated as values.**

**Note: A function that returns a function or takes other functions as arguments is called a higher-order function.**
