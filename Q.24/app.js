"use strict";
/* Q24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
// Define variables
let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// Test is equality and inequality with strings
console.log("Is Apple is equal to apple?");
console.log(apple == "apple");
console.log("\n Is Apple is not equal to apple");
console.log(apple != "apple");
// Test is using LowerCase function
console.log("\n Is APPLE is equal to apple after converting to lower case?");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("\n Is APPLE is not equal to apple after converting to lower case?");
console.log(upperCaseApple.toLowerCase() != "apple");
// Numerical tests
// Equal To
console.log("\n Is ten is equal to twenty");
console.log(ten == twenty);
// Not Equal To
console.log("\n Is ten is not equal to twenty");
console.log(ten != twenty);
// Greater Than
console.log("\n Is ten is greater than 0");
console.log(ten > 0);
// Less Than
console.log("\n Is Twenty is less than 10");
console.log(twenty < 0);
// Greater than equal to
console.log("\n Is ten is greater than equal to 5");
console.log(ten >= 5);
// Less than equal to
console.log("\n twenty is less than equal to 10");
console.log(twenty <= 10);
// Tests using and "and" & "or" operator
// Using && "and" 
console.log("\n twenty is not equal to than and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to than and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// Using || (OR)
console.log("\n twenty is greater than 50 OR twenty is equal to twenty");
console.log(twenty > 50 || 20 == 20);
console.log("\n twenty is greater than 50 OR twenty is equal to twenty");
console.log(twenty > 50 || 20 != 20);
// Test weather an item is include in array 
console.log("\n Is orange include in my fruits array ");
console.log(fruits.includes("orange"));
// Not include
console.log("\n Is orange is not include in my fruits array");
console.log(!fruits.includes("orange"));
