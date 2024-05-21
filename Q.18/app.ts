/*18. Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its
order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

// Making A Array of countries and prints its orginal order 
let countriesToVisit: string [] = ["Chaina", "Denmark", "Barazil", "Argentina"];
console.log("Orginal order:", countriesToVisit);

// Print the Array Alphabetical without modifying  the actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// show the the array is still in its orginal order
console.log("Still in Orginal Order",countriesToVisit);

// print the array in reversed in order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit] .reverse());


// show that the array is still in its orginal order
console.log("Still in Orginal Order",countriesToVisit);

// print the array in reverse order without modifying the actual array list
console.log(" Reversed Order:", countriesToVisit.reverse());

// show that the array is still in orginal order
console.log("Still in Orginal Order:", countriesToVisit);

// we have changed the orginal array order now
console.log("Orginal Array Reversed:", countriesToVisit.reverse());

// Print the array to show that it's back to orginal order
console.log("Back to Orginal Order:", countriesToVisit.reverse());

// Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());

// We have changed again the orginal array order now in reversed order again
console.log("Orginal Array Reversed:", countriesToVisit.reverse());






