
// Question:22 - Intentional Error

let numbers_list = [5,4,3,2,1];

// creating error
//console.log(numbers_list[5]);

//correcting the error
let i = 3
if (i > numbers_list.length) {
    console.log(`${i} is out of index range.`)

}
else {
    console.log(numbers_list[i]);
}


