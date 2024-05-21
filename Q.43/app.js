"use strict";
/*  43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name. */
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// function to make magicians great though .map() it will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an array of magician name
let magicians_names = ["Harry Porter", "Christian Bale", "Freddy Borden", "Daniel Atlas"];
// Making a copy of orginal array through .slice function
let copy_magicians_names = magicians_names.slice();
// Modify the copy array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magicians_names);
// Show both arrays original and copied
// original
console.log("\noriginal Array\n");
show_magicians(magicians_names);
// copied
console.log("\ncopied Array\n");
show_magicians(copy_great_magicians);
