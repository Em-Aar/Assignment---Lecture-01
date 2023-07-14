/*Question - 42, Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified. */
var magicians = ['Tom', 'Hary', 'Jerry'];
// Function to show the names of magicians i.e. the values of the array magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
//function to modify the values of original array.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] += ' The Great';
    }
}
//Use the functions for Output.
make_great(magicians);
show_magicians(magicians);
console.log(magicians);
