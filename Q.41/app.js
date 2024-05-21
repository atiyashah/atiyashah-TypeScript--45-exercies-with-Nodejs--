"use strict";
/* Q.41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/
// define A function to print each magician name from an array
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
// Define an Array containing magicians name
let magician_names = ["Harry Porter", "christian Bale", "Freddy Borden", "Daniel Atlas"];
// Call the function to print each magician name 
show_magicians(magician_names);
