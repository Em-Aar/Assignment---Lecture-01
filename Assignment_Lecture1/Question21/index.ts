//Question - 21
interface City {
name:string;
population:number;
}

var cities: City[] = [{
    name:'Islamabad', 
    population:1232000
},
{
    name:'Lahore',
    population:13979000
},
{
    name:'Karachi', 
    population: 17236000
},
{
    name:'Quetta', 
    population: 1190000
},
{
    name:'Peshawar', 
    population: 2412000
}
]

//Output of the program
console.log(cities)

//Output of all the cities
for (let i=0; i<cities.length; i++) {
    console.log(`City Name:${cities[i].name}`);
}

//Output of the population
for (let i=0; i<cities.length; i++) {
    console.log(`Population: ${cities[i].population}`);
}

//Obtaining the properties of one city
console.log(`Capital of Pakistan: ${cities[0].name}`);
console.log(`Population of Capital of Pakistan: ${cities[0].population}`);