/* Question - 23 , Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test. 
Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

let car1 : string = 'Toyota';
let car2 : string = 'Honda';
let car3 : string = 'Suzuki';
let car4 : string = 'Hyundai';
let car5 : string = 'Audi';

console.log('Is car is Toyota? I predict True');
console.log(car1=='Toyota');

console.log('Is car is Toyota? I predict False');
console.log(car1=='Honda');

console.log('Is car is Toyota? I predict False');
console.log(car1=='Suzuki');

console.log('Is car is Toyota? I predict False');
console.log(car2=='Toyota');

console.log('Is car is Toyota? I predict True');
console.log(car2=='Honda');

console.log('Is car is Toyota? I predict False');
console.log(car2=='Suzuki');

console.log('Is car is Toyota? I predict False');
console.log(car3=='Toyota');

console.log('Is car is Toyota? I predict True');
console.log(car3=='Suzuki');

console.log('Is car is Toyota? I predict True');
console.log(car4=='Hyundai');

console.log('Is car is Toyota? I predict True');
console.log(car5=='Audi');