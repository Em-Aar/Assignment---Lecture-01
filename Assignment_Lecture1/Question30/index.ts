////Question - 30, Hello Admin
let users_list:string [] = ['Admin', 'Rehan', 'Musa', 'Hadia','Anabia'];
for (let i = 0; i < users_list.length; i++) {
    if (users_list[i] == 'Admin') {
        console.log('Hello admin, would you like to see a status report?');
    }

    else {
        console.log(` Hello ${users_list[i]}, thank you for logging in again` );
    }
}