// Simple code to understand logic
var personName = 'rEhAn'; // define variable for string to convert to Titlecase
/* we would use this logic. first convert all the string to lower case (rehan) and store in one variable,
then extract the first character (r) and convert it to uppercase in other variable.
now you have to join both but before that you have to remove first character from lowercase string. like this  (R) + (ehan) = Rehan
if you don't remove first character of lowercase string then output would be like this... (R) + (rehan) = Rrehan */
var lower_case = personName.toLowerCase();
var first_character = lower_case.charAt(0);
var char_upper = first_character.toUpperCase();
var without_firstChar = lower_case.slice(1);
var Tiltecase = char_upper + without_firstChar;
console.log("To Titlecase", Tiltecase);
//Changing to Titlecase using Function.
/*function toTitleCase (str) {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
}

console.log('Changed to Titlecase', toTitleCase(personName));*/ 
