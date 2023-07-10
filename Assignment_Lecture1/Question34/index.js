var fav_Pizza = ['stuffed crust', 'fajita', 'barbq'];
//iteration of same statment with pizza flavours.
for (var i = 0; i < fav_Pizza.length; i++) {
    console.log("I like ".concat(fav_Pizza[i], " pizza."));
}
//iteration of different statement with pizza flavours.
for (var _i = 0, fav_Pizza_1 = fav_Pizza; _i < fav_Pizza_1.length; _i++) {
    var pizza = fav_Pizza_1[_i];
    switch (pizza) {
        case "stuffed crust":
            console.log("\nThe ".concat(pizza, " is available at cheezious."));
            break;
        case "fajita":
            console.log("The ".concat(pizza, " is very famous."));
            break;
        case "barbq":
            console.log("Most people like ".concat(pizza, " flavor."));
            break;
    }
}
console.log('\nPizza is a fast food. \nAlthough, it is not good for health, eating pizza once in a month is fine for the change of taste.\nSome people eat pizza more often which may cause obesity.\nDespite all these, i really like pizza.');
