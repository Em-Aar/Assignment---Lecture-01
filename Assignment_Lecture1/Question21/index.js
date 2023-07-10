var cities = [{
        name: 'Islamabad',
        population: 1232000
    },
    {
        name: 'Lahore',
        population: 13979000
    },
    {
        name: 'Karachi',
        population: 17236000
    },
    {
        name: 'Quetta',
        population: 1190000
    },
    {
        name: 'Peshawar',
        population: 2412000
    }
];
//Output of the program
console.log(cities);
//Output of all the cities
for (var i = 0; i < cities.length; i++) {
    console.log("City Name:".concat(cities[i].name));
}
//Output of the population
for (var i = 0; i < cities.length; i++) {
    console.log("Population: ".concat(cities[i].population));
}
//Obtaining the properties of one city
console.log("Capital of Pakistan: ".concat(cities[0].name));
console.log("Population of Capital of Pakistan: ".concat(cities[0].population));
