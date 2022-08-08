// Tallest Value Of An Array
/* function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('Tallest Person Is:', tallest); */

// Home Work-01: Write a function to get the lowest number in an array
// Smallest Or Lowest Number 
function minInArray(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}
const heights = [167, 190, 120, 165, 137];
const smallest = minInArray(heights);
console.log('Smallest Person Is:', smallest);