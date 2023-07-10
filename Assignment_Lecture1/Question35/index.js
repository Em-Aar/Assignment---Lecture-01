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
