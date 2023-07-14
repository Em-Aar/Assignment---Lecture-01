/*Question - 36, T-Shirt: Write a function called make_shirt() that accepts 
a size and the text of a message that should be printed on the shirt. 
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */


function make_shirt(size: string, message: string) { //A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
    console.log(`This t-shirt is ${size}. '${message}' is printed on it.`);
}

make_shirt ("Medium", "Be Humble, you'll conquer the hearts!");