var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < Numbers.length; i++) {
    if (i == 0) {
        console.log("".concat(Numbers[i], "st"));
    }
    else if (i == 1) {
        console.log("".concat(Numbers[i], "nd"));
    }
    else if (i == 2) {
        console.log("".concat(Numbers[i], "rd"));
    }
    else {
        console.log("".concat(Numbers[i], "th"));
    }
}
