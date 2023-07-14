interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string | number;
}

function makeCar(manufacturer: string, model: string, options?: { [key: string]: string | number }): Car {
    let car: Car = { manufacturer, model };
    if (options) {
        for (let key in options) {
            car[key] = options[key];
        }
    }
    return car;
}

let car = makeCar('Toyota', 'Camry', { color: 'red', year: 2020, speed: '220kmph' });
console.log(car);