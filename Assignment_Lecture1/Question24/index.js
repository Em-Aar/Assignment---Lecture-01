//Question - 24 , More Conditional Tests
var strg_array = ['Hadia', 'Musa', 'Anabia', 'REHAN'];
var number_array = [1, 2, 3, 4, 5];
//string equality test - true
console.log("Is first name in array is Hadia? I predict true");
console.log(strg_array[0] == 'Hadia');
//string inequality test - true
console.log("Is first name in array is not Musa ? I predict true");
console.log(strg_array[0] != 'Musa');
//string equality test - false
console.log("Is first name in array is Anabia? I predict false");
console.log(strg_array[0] == 'Anabia');
//string equality test - false
console.log("Is first name in array is not Hadia ? I predict false");
console.log(strg_array[0] != 'Hadia');
//sting equality test with lower case - true
console.log("Is last name in array is rehan? I predict true");
console.log(strg_array[3].toLowerCase() == 'rehan');
//sting inequality test with lower case - false
console.log("Is first name in array is not REHAN ? I predict false");
console.log(strg_array[3].toLocaleLowerCase() != 'rehan');
//numbers equality test - true
console.log("Is first element in numbers_array is 1? I predict true.");
console.log(number_array[0] == 1);
//numbers inequality test - false
console.log("Is second element in numbers_array is not 2 ? I predict false.");
console.log(number_array[1] != 2);
//numbers greater than test - true
console.log("Is second element in numbers_array is greater than 1 ? I predict true.");
console.log(number_array[1] > 1);
//numbers less than test - false
console.log("Is second element in numbers_array is less than 1 ? I predict false.");
console.log(number_array[1] < 1);
//numbers greater than or equal to test - true
console.log("Is second element in numbers_array is greater than or equal to 2 ? I predict true.");
console.log(number_array[1] >= 2);
//numbers less than or equal to test - false
console.log("Is second element in numbers_array is less than 1 or equal to ? I predict false.");
console.log(number_array[1] <= 1);
//test using 'and' operator 
console.log("Is first number in array is 1 and second number in array is 2? I predict true.");
console.log(number_array[0] == 1 && number_array[1] == 2);
//test using 'OR' operator 
console.log("Is first number in array is 1 and second number in array is 2? I predict true.");
console.log(number_array[0] == 1 || number_array[0] == 2);
//If item is in array
console.log("Is 4 is in numbers_array? I predict true.");
console.log(number_array.includes(4));
//If item is not in array
console.log("Is 7 is in numbers_array? I predict false.");
console.log(number_array.includes(7));
