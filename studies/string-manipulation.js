/*Modifying strings with operators:

Operators can be used to concactinate strings.
The + operator concactinates the strings on either side of it.
The += operator may be used to concactinate a string assigned to a variable and then reassign the variable with the new string.
*/
var a = 'This is' + ' ' + 'how' + ' ';
a += 'you can modify strings with operators!';

console.log(a); //=> 'This is how you can modify a string with operators!'


/*Modifying a string with string methods:

There are several methods which can be used to modify a string.
*/
var testStr = 'Jon Mohon';

console.log(testStr.charAt(2)); //=> n, .charAt() returns the character at a specified location in the string
console.log(testStr.concat(' is cool!')); //=> 'Jon Mohon is cool!', .concat() joins a string to another string
console.log(testStr.endsWith('n')); //=> true, .endsWith() returns true or false based on the input character either matching the end of your string or not matching it.
console.log(testStr.includes('Jon')); //=> true, .includes() checks if the input is found within your string
console.log(testStr.repeat(2)); //=> 'Jon MohonJon Mohon', .repeat() returns a string with your string repeated a number of times equal to the input
console.log(testStr.slice(0, 3)); //=> 'Jon', .slice() takes inputs as positions within a string and creates a new string containing the characters between those positions
console.log(testStr.split(' ')); //=> [Jon, Mohon], .split() Splits a string into an array.
console.log(testStr.startsWith('J')); //=> true, .startsWith() is the same as .endsWith(), but test the first letter
console.log(testStr.substr(0, 3)); //=> 'Jon', .subsrt() creates a sub string using a position and a length as inputs
console.log(testStr.toLowerCase()); //=> 'jon mohon', .toLowerCase() makes the entire string lower case
console.log(testStr.toUpperCase()); //=> 'JON MOHON', .toUpperCase() makes the entire string upper case