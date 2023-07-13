/*Question - 34, Pizzas: Think of at least three kinds of your favorite pizza. 
Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
such as I really love pizza! */



let fav_Pizza: string [] = ['stuffed crust', 'fajita', 'barbq'];

//iteration of same statment with pizza flavours.
for (let i =0; i < fav_Pizza.length; i++) {
    console.log(`I like ${fav_Pizza[i]} pizza.`);
}

//iteration of different statement with pizza flavours.
for (let pizza of fav_Pizza) {
    switch(pizza) {
        case "stuffed crust":
            console.log(`\nThe ${pizza} is available at cheezious.`);
            break;
        case "fajita":
            console.log(`The ${pizza} is very famous.`);
            break;
        case "barbq":
            console.log(`Most people like ${pizza} flavor.`);
            break;
    }
}
console.log('\nPizza is a fast food. \nAlthough, it is not good for health, eating pizza once in a month is fine for the change of taste.\nSome people eat pizza more often which may cause obesity.\nDespite all these, i really like pizza.');



//alternate code - 
for (let i = 0; i < fav_Pizza.length; i++) {
    if (fav_Pizza[i] === 'stuffed crust') {
        console.log(" The stuffed crust is available at cheezious.");
    } else if (fav_Pizza[i] === 'fajita') {
        console.log(" The fajita is very famous.");
    } else if (fav_Pizza[i] === 'barbq') {
        console.log(" Most people like barbq.");
    }
        
}
console.log('\n Pizza is a fast food. \nAlthough, it is not good for health, eating pizza once in a month is fine for the change of taste.\nSome people eat pizza more often which may cause obesity.\nDespite all these, i really like pizza.');



