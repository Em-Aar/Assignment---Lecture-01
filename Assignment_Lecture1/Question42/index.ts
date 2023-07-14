/*Question - 42, Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians 
by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified. */

let magicians: string[] = ['Tom', 'Hary', 'Jerry'];

// Function to show the names of magicians i.e. the values of the array magicians
function show_magicians(magicians: string []) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

//function to modify the values of original array.
function make_great (magicians: string []) {
    for (let i=0; i< magicians.length; i++) {
        magicians[i] += ' The Great';
    }
}


//Use the functions for Output.
make_great(magicians);
show_magicians(magicians);
console.log(magicians);