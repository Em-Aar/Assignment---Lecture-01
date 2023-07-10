var personName = 'rEhAn';
console.log("Uppercase: ", personName.toUpperCase());
console.log("Lowercase: ", personName.toLowerCase());
function Titlecase(str) {
    var lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}
console.log("Tiltecase: ", Titlecase(personName));
