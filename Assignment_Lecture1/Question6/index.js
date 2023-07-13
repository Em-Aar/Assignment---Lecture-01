/*Question - 6, Stripping Names: Store a person’s name,
and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces. */
//strip using regular expression
var person_name = "\n\tR\ne\th\na n";
console.log('Not Stripped:', person_name);
console.log('Stripped:', person_name.replace(/\s/g, "")); //removes any whitespace including space, new line, tab.
console.log('Stripped:', person_name.replace(/[\n|\t]/g, "")); // replace only new line and tab.
//only removes whitespaces at the begining or end of string.
var other_name = "\n\tRehan\n";
console.log('Not Stripped:', other_name);
console.log('Stripped:', other_name.trim());
