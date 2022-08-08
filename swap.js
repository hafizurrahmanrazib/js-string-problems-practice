// Swaping First Value To Second And Second Value To First
// Approach 01--use temp variable--
/* let first = 5;
let second = 7;
console.log(first, second);
const temp = first;
first = second;
second = temp;
console.log(first, second); */

// Approach 02--use destructuring----
let first = 5;
let second = 7;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);