/**
 * reduce is a higher order function that takes a callback function and an initial value as arguments. The callback function takes two arguments, an accumulator and the current value. The accumulator is the value that reduce will return. The current value is the value of the current element in the array. The initial value is the value of the accumulator before the first iteration. The callback function is called for each element in the array. The return value of the callback function is the new value of the accumulator. The return value of reduce is the final value of the accumulator after the last iteration.
 * reduce also takes a function f as an argument
 * what reduce does is that it takes the first two elements of the array and pass them to the array
 * say the current element is arr[i]
 * reduce will pass this element to the function f along with the accumulator the result of further function calls
 * with this perticular result
 */

const arr = [1, 2, 3, 4, 5, 6]; // original array
function sum(prevResult, currvalue) {
    console.log(prevResult, currvalue);
    return prevResult + currvalue; // returns sum of two elements
}

const result = arr.reduce(sum); // sum is function passed as an argument
console.log(result);

/**
 * first element -> 1
 * second element -> 2
 * third element -> 4
 * fourth element -> 5
 * fifth element -> 6
 */

/**
 * Cart -> [iphone {price: 100000, name: "iphone"}, samsung {price: 50000, name: "samsung"}, oneplus {price: 60000, name: "oneplus"}
 * tempered glass {price: 1000, name: "tempered glass"}, charger {price: 500, name: "charger"}]
 */

function addPrices(prevResult, currvalue) {
    console.log(prevResult, currvalue);
    return prevResult + currvalue.price;
    return {price: newPrice};
}
let Cart = [{price: 100000, name: "iphone"}, {price: 50000, name: "samsung"}, {price: 60000, name: "oneplus"}, {price: 1000, name: "tempered glass"}, {price: 500, name: "charger"}]; // original array 
const totalPrice = Cart.reduce(addPrices, 0); // addPrices is function passed as an argument
console.log(totalPrice.price); // 211500
