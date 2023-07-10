////Question - 34, Pizzas
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
console.log('\nPizza is a fast food. \nAlthough, it is not good for health, eating pizza once in a month is fine for the change of taste.\nSome people eat pizza more often which may cause obesity.\nDespite all these, i really like pizza.')
