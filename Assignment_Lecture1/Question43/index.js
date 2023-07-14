/*Question - 43, Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names
and one array with the Great added to each magician’s name. */
var magicians = ['Tom', 'Hary', 'Jerry'];
//function to show magician names
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
//function to create a modified array
function make_great(magicians) {
    var make_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        make_magicians.push("".concat(magician, " The Great"));
    }
    return make_magicians;
}
// Let's Call the function
var make_magicians = make_great(magicians);
show_magicians(magicians);
console.log("\n");
show_magicians(make_magicians);
console.log(make_magicians);
