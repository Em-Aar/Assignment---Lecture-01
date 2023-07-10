//Question - 32, Checking Usernames
let current_users:string [] = ['Admin', 'Rehan', 'Musa', 'Hadia','Anabia'];
let new_users: string[] = ['Rehan', 'MUSA','Faizan','Ali','Wali'];

let lower_current_users: string[] = [];
for(let element of current_users) {
    lower_current_users.push(element.toLowerCase());
}
console.log(lower_current_users);

let lower_new_users: string[] = [];
for(let element of new_users) {
    lower_new_users.push(element.toLowerCase());
}
console.log(lower_new_users);

for(let i = 0; i < new_users.length; i++) {
    if (lower_current_users.includes(lower_new_users[i])) {
        console.log(`The username:${new_users[i]} already exists. Enter new username.`)
    }

    else {
        console.log(`${new_users[i]} is available.`)
    }
}