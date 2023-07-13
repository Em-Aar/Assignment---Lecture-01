//Question - 3, Name Cases
let personName1:string = 'rEhAn';


console.log("Uppercase: ", personName1.toUpperCase());
console.log("Lowercase: ", personName1.toLowerCase());


function Titlecase(str:string) {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)

}
console.log("Tiltecase: ", Titlecase(personName1)); 