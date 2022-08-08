const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.toLocaleLowerCase());
console.log(userName.toLocaleUpperCase());
if (userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('Valid User');
}
else {
    console.log('Invalid User');
}