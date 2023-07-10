var age = 27;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (function (age) { return 2 && age < 4; }) {
    console.log("The person is a toddler.");
}
else if (function (age) { return 4 && age < 13; }) {
    console.log("The person is a kid.");
}
else if (function (age) { return 13 && age < 20; }) {
    console.log("The person is a teenager.");
}
else if (function (age) { return 20 && age < 65; }) {
    console.log("The person is an adult.");
}
else if (function (age) { return 65; }) {
    console.log("The person is an elder.");
}
