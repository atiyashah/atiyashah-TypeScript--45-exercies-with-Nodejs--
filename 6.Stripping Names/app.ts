//Q6. Stripping Name: store a person's name, and include some whitespace character at the beginning 
//and end of the name.Make sure you use each character combination, "\t" and "\n" , at least once.
//Print the name once, so the Whitespace around the nam,e is displayed. The name after
// Stripping the white space.

// \t tab4 word space


// \n next line.

let personName: string =`\n\t BABAR AZAM\t\n`;
console.log(personName);
let Stripping: string = personName.trim();
console.log(Stripping);