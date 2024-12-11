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

let arr = [1,10,9,100,100,11,12,13,14,2,3]; // unsorted array

arr.short(); // it sorts the given array // [exception] -> this might arrange elements in inc order
// default sorting is done in lexicographical order
// default implementation of arr.sort() is going to sort my array in lexicographical order
/**
 * 0 -> A
 * 1 -> B
 * 2 -> C
 * 3 -> D
 * 4 -> E
 * 5 -> F
 * 6 -> G
 * 7 -> H
 * 8 -> I
 * 9 -> J
 * 10 -> K
 * ...........
 * [B, BA, J, BAA, BAAA, BB, BC, BD, BE, B, C] //if we arrange it according to dictionary
 * [B, BA, BAA, BAAA, BB, BC, BD .............] //if we arrange it according to dictionary
 * 
 * */ 
console.log(arr);

let b = [1,10,9,100,100,11,12,13,14,2,3]; // unsorted array

// sort b in increasing order

b.sort(function cmp(a, b) {
    // if a < b -> a - b is negative then a comes before bn-> if cmp function gives negative than a is placed before b(a<b)
    // if a > b -> a - b is positive then b comes before a -> if cmp function gives positive than b is placed before a(a>b)
    return a < b;
}); // sort is HOF ,, the sort function is taking another function as an argument

console.log(b);
