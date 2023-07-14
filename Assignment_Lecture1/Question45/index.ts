/*Question - 45 , Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. */


function make_car (manufacturer: string, model: string, ...other_info: any[]) {
    const car = {
        manufacturer,
        model,
    };

    // for other infor, any number of keyword arguments.
    Object.assign(car, ...other_info); 
    return car;

}

const car = make_car('Honda', 'City', {color: 'blue', version: 'Automatic', speed: 220},{Other: 1, more:2});
console.log(car);