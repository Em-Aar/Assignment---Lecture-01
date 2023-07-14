
/* Question:22 - Intentional Error: If you haven’t received an array index error 
in one of your programs yet, try to make one happen. 
Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program. */

let numbers_list : number [] = [5,4,3,2,1];

// creating error
//console.log(numbers_list[5]);

//correcting the error
let k : number = 5
if (k >= numbers_list.length) {
    console.log(`${k} is out of index range.`)

} else {
    console.log(numbers_list[k]);
}


