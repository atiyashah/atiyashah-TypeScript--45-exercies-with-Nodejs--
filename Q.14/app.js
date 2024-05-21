/*Q:14. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.*/
var guestList = ["Atiya", "uamama", "Bisma", "Warda", "sumaiya"];
guestList.forEach(function (guests) {
    console.log("\nSalam ".concat(guests, ", \n \tIt would be an honor to have you join us for dinner.Your presence would greatly enrich our gathering."));
});
var lengthGuests = guestList.length;
console.log("\nWe are Inviting total ".concat(lengthGuests, " guests."));
