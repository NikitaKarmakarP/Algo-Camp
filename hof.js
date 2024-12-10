//higher order function -> there are functions which take another function as an argument
//these are called higher order functions

function f(x, fn) {
    
    /**
     * x -> number
     * fn -> function
     */
    console.log(x);
    console.log(fn);
    fn(x);
}

f(10, function exec(){
    console.log("I am an expression passed to a HOF")
})
