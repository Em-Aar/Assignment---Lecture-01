/*Question - 35, Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet! */

let animals : string [] = ["Dog","Cat","Horse"];

for (let animal of animals) {  
console.log(animal);
}

console.log("\nStatements about each animal:");
for (let animal of animals) {
    switch (animal) {
        case "Dog":
            console.log(`A ${animal} is great for security.`);
            break;
        
        case "Cat":
            console.log(`A ${animal} is a cute and playful pet.`);
            break;
    
        case "Horse":
            console.log(`A ${animal} is my favorite animal.`);
            break;
    }
        
}

console.log("\nCommon characteristic: All of these animals are mamals!");

//alternate code with if-else conditions as done in previous question

for (let i = 0; i < animals.length; i++) {
    if (animals[i] === 'Dog') {
        console.log(" A Dog is great for security.");
    } else if (animals[i] === 'Cat') {
        console.log(" A Cat is a cute and playful pet.");
    } else if (animals[i] === 'Horse') {
        console.log(" A Horse is my favorite animal.");
    }
        
}