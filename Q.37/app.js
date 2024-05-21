"use strict";
/* Q.37: Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.  */
//Making a Function
function makeShirt(size = "Large", printMessage = "I Love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`);
}
// calling Function with by-default values
makeShirt();
// Calling Function with Medium size and default message
makeShirt("Medium");
//Calling a Function now with small size and also different message
makeShirt("small", "I Love JavaScript");
