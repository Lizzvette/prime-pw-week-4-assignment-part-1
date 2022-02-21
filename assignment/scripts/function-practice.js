console.log('***** Function Practice *****')
//
// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello,  ${name}`;
}
console.log(helloName('Cameron'));

// Remember to call the function to test
//console.log('#2 should: say "Hello, Sonny!"', helloName(name)); 
  


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let result = firstNumber + secondNumber;
  return result;
}
console.log(addNumbers(5,6));

// 4. Function to multiply three numbers & return the result
function multiplyThree(numA, numB, numC ){
let result = numA * numB * numC;
return  result;
}
console.log(multiplyThree(2,3,4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  } 
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
const arrayArt = ['blown-glass', 'acrylic painting', 'sculpture'];
function getLast( arrayArt ) {      // arrayArt is the parameter
  if(arrayArt.length > 0){
  return arrayArt[arrayArt.length-1];
}
return undefined;
}
console.log( 'getLast - should return: ', getLast([1,2,3]));// outside function is the argument
console.log ('should return: ', getLast([]));
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

// Just having fun and added in a simple function:)
/*function getSomething (value){
  return value * 2;
}
const anyThing = getSomething(5);
console.log(anyThing); */

//let array = [5,2,7,10,58];

function find( value, array ){
for (let i = 0; i < array.length; i++)  {
  if (array[i] === value){
    return true;
  }
}
  return false;
}

console.log(find (2 ,[2,7,10,58]));
console.log(find (5, [2,7,10,]));


// Stretch Goals -  MDN website
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  
    if (letter === string.charAt(0)) {
      return true;
    }
  
return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );



// 9. Function to return the sum of all numbers in an array
const previousValue = [5, 6, 7, 8,];
/*const currentValue = [];
let numbers = [5, 6, 7, 8].reduce(function (previousValue, currentValue){
return previousValue + currentValue
}, 0)
console.log ( sumAll(  ));*/

let sum = 0;
for (let i = 0; i < previousValue.length; i++){
  sum += previousValue[i];
}
console.log("Sum is " + sum)
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function theArray(positiveArray){
  let firstArray= [];
  for(let i=0;i<positiveArray.length; i++){
    if(positiveArray[i]>0)
    firstArray.push(positiveArray[i]);
  }
  return firstArray;
}
console.log(theArray([7,2,5]));
console.log(theArray([-7,-2,-5]));
  

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
// Comment: Define function name circuitPower with 2 parameters voltage, current. 
// Next create a variable to take the task (calculation). Then return variable (power) that will also end function block.
//Lastly, to evoke function must call with function declaration/name. Add within console.log with argument to pass back to function.

function circuitPower(voltage, current) {
	let power =  voltage * current;
  return power;
}
console.log ('The power is:', circuitPower(200,5 ));

