
// Question:22 - Intentional Error

let numbers_list = [5,4,3,2,1];

// creating error
//console.log(numbers_list[5]);

//correcting the error
let k = 3
if (k > numbers_list.length) {
    console.log(`${k} is out of index range.`)

}
else {
    console.log(numbers_list[k]);
}


