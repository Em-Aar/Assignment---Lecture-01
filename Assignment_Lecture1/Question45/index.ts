//Question - 45 , Cars: 
function make_car (manufacturer: string, model: string, ...other_info: any[]) {
    const car = {
        manufacturer,
        model,
    };

// Taking the key and the value passed to the object other info and assigning it as a property to the car object.
    for (const info of other_info) {
        const key = Object.keys(info)[0];
        const value = info[key];
        car[key] = value;
    }
    return car;
}

const car = make_car('Hona', 'City', {color: 'blue'}, {version: 'Automatic'});
console.log(car);