////Question - 35, Animals
let animals:string[] = ["Dog","Cat","Horse"];

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