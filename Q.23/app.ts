/*Q23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

// Making a variable

let car = 'subaru';

// Test: 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

// Test:2
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False

//Test 3
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True

// Test 4
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False

// Test 5
console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota'); // True

// Test 6
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False

// Test 7
console.log("Is car != 'mazda'? I predict True.");
console.log(car != 'mazda'); // True

// Test 8
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False

let age = 25;

// Test 9
console.log("Is age > 18? I predict True.");
console.log(age > 18); // True

// test 10
console.log("Is age < 21? I predict False.");
console.log(age < 21); // False
