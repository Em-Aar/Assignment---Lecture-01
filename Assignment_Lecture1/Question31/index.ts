////Question - 31, No Users
let users_list:string [] = [];

if (users_list.length == 0) {
    console.log("We need to find some users!");
}
else {

    for (let i = 0; i < users_list.length; i++) {
        if (users_list[i] == 'Admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
    
        else {
            console.log(` Hello ${users_list[i]}, thank you for logging in again` );
        }
    }

}
