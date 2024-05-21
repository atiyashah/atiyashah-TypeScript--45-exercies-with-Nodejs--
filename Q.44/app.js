"use strict";
/*Q.44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/
// Define a function with rest parameter that accept items argument representing our sandwich
function make_SAndwich(...items) {
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(single_item => console.log(single_item));
    console.log("\n Now enjoy sandwich");
}
// Call the function three times with different number of arguments
make_SAndwich("Chicken", "Cheese", "Mayo", "Egg");
make_SAndwich("Bread", "Butter");
make_SAndwich("Bread", "Butter", "Mayo", "Cheese", "chicken", "tomato");
