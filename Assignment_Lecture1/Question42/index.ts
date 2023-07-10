//Question - 42, Great Magicians
let magicians: string[] = ['Tom', 'Hary', 'Jerry'];

function show_magicians(magicians: string []) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great (magicians: string []) {
    for (let i=0; i< magicians.length; i++) {
        magicians[i] += ' The Great';
    }
}

make_great(magicians);
show_magicians(magicians);