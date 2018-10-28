/*Datatypes
1.) Number:

Any numeric value
Can be utilized in equations, variable assignment, as an argument, or conditional statements
Numbers do not require the use of quotation marks 
(if surrounded in quotation marks, the number is now a string value instead)
*/
typeof(8); //=> 'number'
typeof('8'); //=> 'string'

/*2.) String:

String values are created by surrounding single/multiple characters, numbers, or words with quotation marks
Strings are able to be accessed and manipulated
These values can be used as an argument, variable assignment, part of a conditional statement, or a return value
*/
typeof('a'); //=> 'string'

/*3.) Boolean:

A datatype that holds a value of true or false.
All conditional statements will be equivalent to a boolean value.
These values can also be used inside conditional statements.
These values may also be returned as the result of a function.
Control-flow requires these values to function properly.
*/
console.log(5 < 4); //=> false
console.log(4 < 5); //=> true


/*4.) Array:

An array is surrounded by [].
Arrays may contain any number of values with a comma between each.
*/
let myArr = [2, 3, 4, 5, 'steve'];
/*
Arrays store values in ordered numbered index starting at 0
Information in an array can be accessed by indicating the position of the value in the array
*/
console.log(myArr[4]); //=> 'steve'


/*5.) Object:

Objects are identified by curly brackets {}
Objects store data in key:value pairs divided by commas.
There is no limit to the number of key:value pairs in an object.
Objects may be used as arguments, assigned to a variable, or placed inside an array.
Objects can be accessed to get the entire object, all of the data in the object, or certain parts of the object.
Object values are access via . or [] notation
You may also use Object.keys() to get an array of just the keys
*/
let myObj = {key: 'value'};
console.log(myObj.key); //=> 'value'
console.log(myObj['key']); //=> 'value'
Object.keys(myObj); //=> ['key']

/*6.) Function:

A function is a reusable block of code.
To declare a function: simply type function, followed by whatever you wish to name it, and a set of parenthesis.
Optionally, you may add a placeholder known as a parameter inside these parenthesis.
A pair of curly brackets is then added and the body of the function is written inside those brackets.
*/
function example() {
    return 'You called?';
}
/*
After creating a function, you may "call" that function at any time.
Type the name of the function you wish to execute, followed by parenthesis. This invokes the function.
If you assigned a parameter to the function, when you call the function you may give value to that parameter.
In order to achieve this, you must put that value inside of the parenthesis at the end of your call line. we call this an argument.
*/
example(); //=> 'You Called?'

/*7.) Undefined:

Undefined returns no value, but undefined.
This datatype appears when we call, return, or log something that doesn't hold value.
*/
var jon;
console.log(jon); //=> undefined 

/*8.) Null:

A datatype that represents a purposeful lack of value.
Conditional statements can make use of null.
When called, null has a value of null.
*/
console.log(null); //=> null
console.log(5 !== null); //=> true

/*9.) NaN:

This datatype has the value: Not-a-Number.
It can be used in conditional statements and will be returned if Math functions fail.
*/
isNaN('jeff'); //=> true
console.log(Math.sqrt(-1)); //=> NaN

/*10.) Infinity and -infinity:

Datatype which develops either positively or negatively towards infinity.
Anything divided by infinity will equal 0.
Any other arithmatic operators used in equations involving infinity will equal either positive or negative infinity.
*/
console.log(Infinity + 1); //=> infinity
console.log(1 - Infinity); //=> -infinity
console.log(79000 / Infinity); //=> 0

/*11.) Simple datatypes vs complex datatypes:

Simple datatypes:
Immutable values which are directly represented.
Numbers
Strings
Booleans
Undefined
Null
NaN

Complex datatypes:
Non-immutable values that are indirectly referenced.
Arrays
Objects
Functions
Infinity
-Infinity

12.) Value by copy and value by reference:

Simple datatypes that are assigned as the value for a variable are stored as a copy of that value in memory.
If you set an assigned variable to a new variable, a copy of the first variables value will be made.
when javascript looks for simple datatypes attached to variables, it only looks at th most recent copy and not the original value of that variable.
Thus, if you alter that value, only the particular copy of that value is changed.
*/
function simpleData() {
    let first = 0;
    let second = first;
    second = 5;
    return first;
    
}

simpleData(); //=> 0, as the created value of 5 is a standalone copy

/*Complex datatypes can be potentially infinite in size. There for it would be illogical to make a copy of that data everytime it is altered.
Instead when we need to utilize that data, javascript will simply reference the first implement of that data.
The thing you must keep in mind with altering these datatypes is, since it only references the first instance of that data, 
any changes made will also affect references to that data before you changed it.*/

function complexData() {
    let obj1 = {tom: 7, jeff: 8};
    let obj2 = obj1;
    obj2.frank = 5;
    return obj1;
}

complexData() //=> { tom: 7, jeff: 8, frank: 5 } , because when we added a key value pair to the object, it does not make a copy and instead changes the referenced value.