/*Question - 35, Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet! */
var animals = ["Dog", "Cat", "Horse"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\nStatements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    switch (animal) {
        case "Dog":
            console.log("A ".concat(animal, " is great for security."));
            break;
        case "Cat":
            console.log("A ".concat(animal, " is a cute and playful pet."));
            break;
        case "Horse":
            console.log("A ".concat(animal, " is my favorite animal."));
            break;
    }
}
console.log("\nCommon characteristic: All of these animals are mamals!");
//alternate code with if-else conditions as done in previous question
for (var i = 0; i < animals.length; i++) {
    if (animals[i] === 'Dog') {
        console.log(" A Dog is great for security.");
    }
    else if (animals[i] === 'Cat') {
        console.log(" A Cat is a cute and playful pet.");
    }
    else if (animals[i] === 'Horse') {
        console.log(" A Horse is my favorite animal.");
    }
}
