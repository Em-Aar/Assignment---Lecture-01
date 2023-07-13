/*Question - 32, Checking Usernames: Do the following to create a program that simulates
how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
var current_users = ['Admin', 'Rehan', 'Musa', 'Hadia', 'Anabia'];
var new_users = ['Rehan', 'MUSA', 'Faizan', 'Ali', 'Wali'];
var lower_current_users = [];
for (var _i = 0, current_users_1 = current_users; _i < current_users_1.length; _i++) {
    var element = current_users_1[_i];
    lower_current_users.push(element.toLowerCase());
}
console.log(lower_current_users);
var lower_new_users = [];
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var element = new_users_1[_a];
    lower_new_users.push(element.toLowerCase());
}
console.log(lower_new_users);
for (var i = 0; i < new_users.length; i++) {
    if (lower_current_users.includes(lower_new_users[i])) {
        console.log("The username: ".concat(new_users[i], " already exists. Enter new username."));
    }
    else {
        console.log("".concat(new_users[i], " is available."));
    }
}
