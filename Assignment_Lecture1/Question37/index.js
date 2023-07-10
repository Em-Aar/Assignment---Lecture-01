function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love Typescript.'; }
    console.log("This t-shirt is ".concat(size, ". '").concat(message, "' is printed on it."));
}
make_shirt('Large');
make_shirt('Medium');
make_shirt('Small', 'Be humble, you will wint the hearts');
