
/*Question:02  Personal Message: Store a person’s name in a variable, 
and print a message to that person. Your message should be simple, such as, 
“Hello Eric, would you like to learn some Python today?” */

let personName : string = 'Eric';

console.log('Hello '+ personName +', would you like to learn some Python today?'); //concatenation method

console.log(`Hello ${personName}, would you like to learn some python today?`);   // template literal method

console.log('Hello',personName,', would you like to learn some Python today?'); //comma separated values method. output gives 'Eric ,' issue

/*The best method to use depends on the specific situation. 
If you need to generate a simple output, concatenation is a good option. 
If you need to generate a more complex output, template literals are a good option. 
If you need to generate an output that is compatible with other programming languages, 
comma-separated values are a good option.*/