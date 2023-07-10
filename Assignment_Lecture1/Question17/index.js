var Names = ['Anabia', 'Hadia', 'Musa', 'Rehan'];
for (var i = 0; i < Names.length; i++) {
    console.log("Good Morning ", Names[i] + ".", "I would like to invite you to the dinner on July 09, 2022.");
}
console.log("Rehan could not make the dinner because he is out of country.");
Names[3] = 'Abdullah';
for (var i = 0; i < Names.length; i++) {
    console.log("Good Morning ", Names[i] + ",", "I would like to invite you to the dinner on July 09, 2022.");
}
console.log("Hello all Guests. It is to inform you that we have found a bigger table for dinner. We'll be adding more guestes.");
console.log("We'll invite Faizan, Yousaf, and Areej to the dinner with you guys.");
Names.unshift('Faizan');
//console.log("After appending at the begining:",Names);
Names.splice(2, 0, 'Yousaf');
//console.log("After appending at the middle:",Names);
Names.push("Areej");
console.log("At the end:", Names);
for (var i = 0; i < Names.length; i++) {
    console.log("Good Morning ", Names[i] + ",", "New invitation for the dinner on July 09, 2022.");
}
console.log("Sorry guys! the big table we reserved was cancelled due to unknown reason. So, we'll be inviting only two guests");
//Code to delete guests simultaneously
/*for (var i=2; i < Names.length; i++) {
    console.log("Good Morning ",Names[i] + ".","We regret to inform you that the dinner invitation is cancelled due to unavailability of the table.");
}*/
//Code to delete guests one by one
console.log(Names[Names.length - 1], "Sorry we couldn't invite you to dinner due to unavailability of the table.");
Names.pop();
console.log(Names[Names.length - 1], "Sorry we couldn't invite you to dinner due to unavailability of the table.");
Names.pop();
console.log(Names[Names.length - 1], "Sorry we couldn't invite you to dinner due to unavailability of the table.");
Names.pop();
console.log(Names[Names.length - 1], "Sorry we couldn't invite you to dinner due to unavailability of the table.");
Names.pop();
console.log(Names[Names.length - 1], "Sorry we couldn't invite you to dinner due to unavailability of the table.");
Names.pop();
console.log(Names);
for (var i = 0; i < Names.length; i++) {
    console.log("Good Morning ", Names[i] + ",", "you are still invited on the dinner.");
}
Names.pop();
Names.pop();
console.log(Names);
