//Question - 43, Unchanged Magicians
let magicians: string[] = ['Tom', 'Hary', 'Jerry'];


function show_magicians(magicians: string []) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great (magicians: string []) {
    let make_magicians:string[] = [];
    for (let magician of magicians) {
        make_magicians.push(`${magician} The Great`);
    }
    return make_magicians;
}
let make_magicians: string[] = make_great(magicians);
show_magicians(magicians);
console.log("\n");
show_magicians(make_magicians);