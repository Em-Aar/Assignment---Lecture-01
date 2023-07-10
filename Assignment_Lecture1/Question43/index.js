var magicians = ['Tom', 'Hary', 'Jerry'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var make_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        make_magicians.push("".concat(magician, " The Great"));
    }
    return make_magicians;
}
var make_magicians = make_great(magicians);
show_magicians(magicians);
console.log("\n");
show_magicians(make_magicians);
