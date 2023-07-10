var Names = ['Anabia', 'Hadia', 'Musa', 'Rehan'];
for (var i = 0; i < Names.length; i++) {
    console.log("Good Morning ", Names[i] + ".", "I would like to invite you to the dinner on July 09, 2022.");
}
console.log("Rehan could not make the dinner because he is out of country.");
Names[3] = 'Abdullah';
for (var i = 0; i < Names.length; i++) {
    console.log("Good Morning ", Names[i] + ".", "I would like to invite you to the dinner on July 09, 2022.");
}
console.log("Hello all Guests. It is to inform you that we have found a bigger table for dinner. We'll be adding more guestes.");
console.log("We'll invite Faizan, Yousaf, and Areej to the dinner with you guys.");
Names.unshift('Faizan');
//console.log("After appending at the begining:",Names);
Names.splice(2, 0, 'Yousaf');
//console.log("After appending at the middle:",Names);
Names.push("Areej");
//console.log("At the end:",Names);
for (var i = 0; i < Names.length; i++) {
    console.log("Good Morning ", Names[i] + ".", "New invitation for the dinner on July 09, 2022.");
}
