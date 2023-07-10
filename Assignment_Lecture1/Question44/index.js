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
