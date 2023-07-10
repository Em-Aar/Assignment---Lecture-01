////Question - 33, Ordinal Numbers
let Numbers: number[] = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < Numbers.length; i++) {
    if (i == 0) {
        console.log(`${Numbers[i]}st`);
        }
    
        else if (i==1) {
        console.log(`${Numbers[i]}nd`);
    }

    else if (i ==2) {
        console.log(`${Numbers[i]}rd`);
    }

    else {
        console.log(`${Numbers[i]}th`);
    }

    }