"use strict";
/* Q.42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified. */
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// function to make magicians great though .map() it will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an array of magician name
let magicians_names = ["Harry Porter", "Christian Bale", "Freddy Borden", "Daniel Atlas"];
// Call make_great function to modify magicians name
let great_magicians = make_great(magicians_names);
// Call show_magicians that show modify list of magicians
show_magicians(make_great(magicians_names));
show_magicians(magicians_names);
