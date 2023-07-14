/*Question - 44, Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time. */
function make_sandwitch(items) {
    var summary = "You ordered sandwitch with following items:";
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        summary += " ".concat(item, ",");
    }
    console.log("\n", summary);
}
make_sandwitch(["Chicken", "Cheese"]);
make_sandwitch(["Olive", "Onion", "Lettuce"]);
make_sandwitch(["Chicken", "Cucumber", "Olives", "Mayonise"]);
