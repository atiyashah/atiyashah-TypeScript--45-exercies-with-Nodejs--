/*Q32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
// list the Array of current users
var current_users = ["Areeba", "Ayesha", "Atiya", "Anum", "Sana"];
// list the array of new users
var new_users = ["Warisha", "Ayesha", "Areeba", "Naina", "Wasfa"];
// loop through new user to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exists and save in our condition
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print different messages using if_else_statment    
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this user name ".concat(new_one_user, " is available"));
    }
});
