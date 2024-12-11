/**
 * Filter function
 * Filter is also a higher order function available with arrays
 * Filter also loops over every element of the array
 * there is one speacial thing about filter, i.e. the argument function f which we have to pass inside
 * filter should always return a boolean value, otherwise output will be converted to a boolean
 * 
 * Filter loops over every element, pass that element in the argument function and then if the output
 * of the function call is true, then it stores the element in the new array otherwise doesnot array otherwise doesnot add this add element in a new array otherwise
 * doesnot add this element in a new array
 */

function oodOrEven(x){ // x=2 -> 2%2 => 0 , 0 = 0 yes // 3%2 => 1, 1 = 0 no
    return (x % 2 === 0); // returns boolean value
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // original array

const result = arr.filter(oddOrEven); // oodOrEven is function passed as an argument

console.log(result);
