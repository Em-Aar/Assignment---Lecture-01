//Question - 17, Shrinking Guest List
let Names4 = ['Anabia','Hadia','Musa','Rehan'];
for (let i=0; i < Names4.length; i++) {
    console.log("Good Morning ",Names4[i] + ".","I would like to invite you to the dinner on July 09, 2022.");
}
console.log("Rehan could not make the dinner because he is out of country.");
Names4[3] = 'Abdullah'
for (let i=0; i < Names4.length; i++) {
    console.log("Good Morning ",Names4[i] + ",","I would like to invite you to the dinner on July 09, 2022.");
}
console.log("Hello all Guests. It is to inform you that we have found a bigger table for dinner. We'll be adding more guestes.");
console.log("We'll invite Faizan, Yousaf, and Areej to the dinner with you guys.")
Names4.unshift('Faizan');
//console.log("After appending at the begining:",Names);
Names4.splice(2, 0, 'Yousaf');
//console.log("After appending at the middle:",Names);
Names4.push("Areej");
console.log("At the end:",Names4);
for (let i=0; i < Names4.length; i++) {
    console.log("Good Morning ",Names4[i] + ",","New invitation for the dinner on July 09, 2022.");
}
console.log("Sorry guys! the big table we reserved was cancelled due to unknown reason. So, we'll be inviting only two guests");
//Code to delete guests simultaneously
/*for (var i=2; i < Names.length; i++) {
    console.log("Good Morning ",Names[i] + ".","We regret to inform you that the dinner invitation is cancelled due to unavailability of the table.");
}*/

//Code to delete guests one by one
console.log(Names4[Names4.length - 1], "Sorry we couldn't invite you to dinner due to unavailability of the table.");
Names4.pop();
console.log(Names4[Names4.length - 1], "Sorry we couldn't invite you to dinner due to unavailability of the table.");
Names4.pop();
console.log(Names4[Names4.length - 1], "Sorry we couldn't invite you to dinner due to unavailability of the table.");
Names4.pop();
console.log(Names4[Names4.length - 1], "Sorry we couldn't invite you to dinner due to unavailability of the table.");
Names4.pop();
console.log(Names4[Names4.length - 1], "Sorry we couldn't invite you to dinner due to unavailability of the table.");
Names4.pop();
console.log(Names4);
for (let i=0; i < Names4.length; i++) {
    console.log("Good Morning ",Names4[i] + ",","you are still invited on the dinner.");
}
Names4.pop();
Names4.pop();
console.log(Names4);