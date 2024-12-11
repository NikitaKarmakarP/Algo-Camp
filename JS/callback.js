/**
 * fun -> HOF ? -> it takes fn (which is a function) as an argument
 * 
 * x -> number
 * fn -> function
 */

function fun(x, fn) {
    for(let i = 0; i < x; i++){
        console.log(i);
    }

    fn();
}

fun(10, function exec(){//callback function
    console.log("I am execute also");
});
