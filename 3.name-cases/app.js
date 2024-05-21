"use strict";
//Q3. Name Cases: store a person's name ina variable, and that person's name in lowercase, uppercase,
//and titlecase,
// lower case
let personName = "Eric";
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// Title case
console.log("titlecase;", personName.replace(/\bw/g, (char) => char.toUpperCase()));
