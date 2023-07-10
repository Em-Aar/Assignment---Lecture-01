// Question:22 - Intentional Error
var numbers_list = [5, 4, 3, 2, 1];
// creating error
//console.log(numbers_list[5]);
//correcting the error
var i = 3;
if (i > numbers_list.length) {
    console.log("".concat(i, " is out of index range."));
}
else {
    console.log(numbers_list[i]);
}
