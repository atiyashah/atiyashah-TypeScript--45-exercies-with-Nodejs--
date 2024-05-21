/* Q.16: More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
// Creating a Guest List Array
var guestList = ["Atiya", "Ayesha", "sunaina", "Areeba"];
// Making variables for those guest who cannot come
var dontCome = guestList[0];
// Print the Name og Guest who cannot come
console.log(dontCome, "Cannot make it, for dinner");
// Add or Remove values form GuestList Array
guestList.splice(0, 1, "Fariha");
// Message print for Bigger Table
console.log("Good News ! We Have Found a Bigger Table for Dinner");
// Adding a new value at starting index of Array
guestList.unshift("Aliya");
// Adding a nwe guest at ending  index of Array
guestList.push("Zainab");
// Get a middle index of our Guest List Array 
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Abiha");
// Print Message Updated List 
console.log("Updated List of our Guest");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneGuest) { return console.log("salam ".concat(oneGuest, ", You are corodially invited to a dinner")); });
