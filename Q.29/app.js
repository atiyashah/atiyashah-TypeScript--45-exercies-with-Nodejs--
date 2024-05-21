"use strict";
/*Q:29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!*/
let favoriteFruits = ["Mango", "Orange", "Banana", "cherry"];
if (favoriteFruits.includes("Mango")) {
    console.log("I really like Mangos");
}
if (favoriteFruits.includes("Banana")) {
    console.log("I really like Banana");
}
if (favoriteFruits.includes("Strawberry")) {
    console.log("I really like strawberry");
}
if (favoriteFruits.includes("Orange")) {
    console.log("I really like Orange");
}
if (favoriteFruits.includes("Apple")) {
    console.log("I really like Apple");
}
