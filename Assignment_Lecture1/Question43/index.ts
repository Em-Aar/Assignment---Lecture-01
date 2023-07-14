/*Question - 43, Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names 
and one array with the Great added to each magician’s name. */

let magicians: string[] = ['Tom', 'Hary', 'Jerry'];

 //function to show magician names
function show_magicians(magicians: string []) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

//function to create a modified array
function make_great (magicians: string []) {
    let make_magicians:string[] = [];
    for (let magician of magicians) {
        make_magicians.push(`${magician} The Great`);
    }
    return make_magicians;
}

// Let's Call the function
let make_magicians: string[] = make_great(magicians);
show_magicians(magicians);
console.log("\n");
show_magicians(make_magicians);
console.log(make_magicians);