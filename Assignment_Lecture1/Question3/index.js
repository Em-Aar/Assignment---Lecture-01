/*Question - 3, Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.*/
var personName1 = 'rEhAn';
console.log("Uppercase: ", personName1.toUpperCase()); // pre-defined function of TS 'toUpperCase' is used
console.log("Lowercase: ", personName1.toLowerCase()); // pre-defined function of TS 'toLowerCase' is used
// for users with knowledge - what are functions, how are the function created
function Titlecase(str) {
    var lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}
console.log("Tiltecase: ", Titlecase(personName1));
