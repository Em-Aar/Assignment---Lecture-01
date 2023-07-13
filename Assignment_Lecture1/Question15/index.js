//Question - 15, Changning Guest List
var guestNames = ['Anabia', 'Hadia', 'Musa', 'Rehan'];
for (var i = 0; i < guestNames.length; i++) {
    console.log("Good Morning ", guestNames[i] + ".", "I would like to invite you to the dinner on July 09, 2022.");
}
console.log("Rehan could not make to the dinner because he is out of country.");
guestNames[3] = 'Abdullah';
for (var i = 0; i < guestNames.length; i++) {
    console.log("Good Morning ", guestNames[i] + ". I would like to invite you to the dinner on July 09, 2022.");
}
