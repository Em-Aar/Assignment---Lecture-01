function make_car(manufacturer, model) {
    var other_info = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        other_info[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, other_info_1 = other_info; _a < other_info_1.length; _a++) {
        var _b = other_info_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var car = make_car('Hona', 'City', { color: 'blue' }, { version: 'Automatic' });
console.log(car);
