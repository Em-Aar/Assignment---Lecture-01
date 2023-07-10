//Question - 44, Sandwiches
function make_sandwitch (items: string[]) {
    
    let summary = `You ordered sandwitch with following items:`;
    for (let item of items) {
        summary += ` ${item},`;
    }
    console.log("\n",summary);
}

make_sandwitch(["Chicken", "Cheese"]);
make_sandwitch(["Olive", "Onion", "Lettuce"]);
make_sandwitch(["Chicken", "Cucumber", "Olives", "Mayonise"]);