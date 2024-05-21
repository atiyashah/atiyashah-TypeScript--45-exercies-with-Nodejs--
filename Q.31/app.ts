/*Q31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/



// Making array 
let users: string[] =[];


// greeting users, check if any
if(users.length ===0){
console.log(`Please add some users before greetings`);
}else{
console.log(`Hello ${users} How are you?`);
}