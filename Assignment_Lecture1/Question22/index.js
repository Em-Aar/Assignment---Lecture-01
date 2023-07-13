// Question:22 - Intentional Error
var numbers_list = [5, 4, 3, 2, 1];
// creating error
//console.log(numbers_list[5]);
//correcting the error
var k = 3;
if (k > numbers_list.length) {
    console.log("".concat(k, " is out of index range."));
}
else {
    console.log(numbers_list[k]);
}
