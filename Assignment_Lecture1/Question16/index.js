//Question - 16, More Guests
var Names3 = ['Anabia', 'Hadia', 'Musa', 'Rehan'];
for (var i_1 = 0; i_1 < Names3.length; i_1++) {
    console.log("Good Morning ", Names3[i_1] + ".", "I would like to invite you to the dinner on July 09, 2022.");
}
console.log("Rehan could not make the dinner because he is out of country.");
Names3[3] = 'Abdullah';
for (var i = 0; i < Names3.length; i++) {
    console.log("Good Morning ", Names3[i] + ".", "I would like to invite you to the dinner on July 09, 2022.");
}
console.log("Hello all Guests. It is to inform you that we have found a bigger table for dinner. We'll be adding more guestes.");
console.log("We'll invite Faizan, Yousaf, and Areej to the dinner with you guys.");
Names3.unshift('Faizan');
//console.log("After appending at the begining:",Names);
Names3.splice(2, 0, 'Yousaf');
//console.log("After appending at the middle:",Names);
Names3.push("Areej");
//console.log("At the end:",Names);
for (var i_2 = 0; i_2 < Names3.length; i_2++) {
    console.log("Good Morning ", Names3[i_2] + ".", "New invitation for the dinner on July 09, 2022.");
}
