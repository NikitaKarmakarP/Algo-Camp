/*
 arrays are also custom objects in JS
 index of the element is the key and the element it self is the value 
 ["abc", "def", "ghi"] -> {0: "abc", 1: "def", 2: "ghi"}

/**
 * map function
 * map is a higher order function available with arrays
 * it takes a function as an argument -> f
 * it returns an array in which every value is actually populated
 * function f with original array element as argument
 *
 * Every element of the original array is passed one by one in the argument function f 
 * and the return value of f is stored in the new array
 * whatever is the output for each individual element, we populate that output in an array
 * 
 * map intermally iterates/loops over every element of the given original array
 * pass that element in the argument function f and then store the returned
 * value inside an array.
*/

function square(el) {
    return el * el; // returns square
}

function cube(x) {
    return x * x * x; // returns cube
}

function isEvenOrOdd(x){
    if(x % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}

const arr = [1, 2, 3, 4, 5];// original array

const result = arr.map(square); //square is function passed as an argument
/**
 * square(1) -> 1
 * square(2) -> 4
 * square(3) -> 9
 * square(4) -> 16
 * square(5) -> 25
 */
console.log(result);

const cubeResult = arr.map(cube); //cube is function passed as an argument
console.log(cubeResult);

const evenOrOdd = arr.map(isEvenOrOdd); //isEvenOrOdd is function passed as an argument
console.log(evenOrOdd);

square(); // this will not work as square is a function and it needs an argument

/**
 * when to use map function ?
 * In any situation when we have to do an operation on every element of the array
 * and store the result in a new array, we use map function
 * and store the result of each operation
 * map can be a good option
 * 
 * For Example:
 * Array of products object -> we have to calculate the price of each product after applying some discount
 * 
 */



/**
 * 
 * if the function is not defined and we are passing it as an argument to another function
 * if the function that we have to do an operation on every element of the array
 * and store the result of each operation in a new array
 * 
 * For Example:
 * Array of products object -> we have to calculate the price of each product after applying some discount
 */

const newArr = [9,8,7,6,5];

/**
 * if the function is not defined and we are passing it as an argument to another function
 * then first argument will be accession the acctual value
 * second argument will be accession index of that value 
 */

function print(element, idx){
    return 'Element at index ${idx} is ${element}';
}

/**
 * here map is looking over every element of the array
 * and then passsing element and index to the print function
 */

const result2 = newArr.map(print);
console.log(result2);


function customMapper(arr, fn){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(fn(arr[i], i));
    }
    return newArr;
}


const value = customMapper(newArr, print);
console.log(value);
