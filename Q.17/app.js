/*Q17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.*/
// Creating a Guest List Array
var guestList = ["Atiya", "Ayesha", "sunaina", "Areeba"];
// Making variables for those guest who cannot come
var dontCome = guestList[0];
// Print the Name og Guest who cannot come
console.log(dontCome, "Nahi Ahh sakta");
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
console.log("Updated List of ou Guest");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneGuest) { return console.log("salam ".concat(oneGuest, ", would you like tio dinner with me")); });
// Inform only two Guests can be invited for dinner
console.log("Unfortunately, the new dinner table want arrive on time, so i can arrive only two Guests to dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I cant invite you to dinner"));
}
// Sending a invitation to the last two guest on the  list
console.log("Invitations to the last two Guests");
guestList.forEach(function (lasttwo) { return console.log("Lucky ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
