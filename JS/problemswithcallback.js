/**
 * 1. Inversion of control  
 * 2. Callback hell -> readability problem
 */

//let arr = [1,10,1000,9,2,3,11]

//arr.sort(function cmp(a,b) {
//      return a-b;
// })

//console.log(arr);

function doTask(fn, x){
    // whole implementation done by team A

    //fn(x*x); // calling my callback with the result
    //fn(x*x); // calling my callback with the result
}//team A


// here team b tries to use it
doTask(function(num){ // due to callbacks, I am passing control of how exec should be called doTask
    // this is inversion of control
    console.log("Whoh num is ", num);
}, 9); 
