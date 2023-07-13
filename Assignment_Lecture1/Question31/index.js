/*Question - 31, No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
var users_list = [];
if (users_list.length == 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < users_list.length; i++) {
        if (users_list[i] == 'Admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(" Hello ".concat(users_list[i], ", thank you for logging in again"));
        }
    }
}
