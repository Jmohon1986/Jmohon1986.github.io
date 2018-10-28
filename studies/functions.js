/*Functions:
A function is a reusable block of code.

1.) Creating a function:

To declare a function: simply type function, followed by whatever you wish to name it, and a set of parenthesis.
Optionally, you may add a placeholder known as a parameter inside these parenthesis.
A pair of curly brackets is then added and the body of the function is written inside those brackets.
*/
function firstFunction(yourName) {
    return yourName + ' ' + 'called this function.'
}

/*2.) Calling a function:

    2-A) After creating a function, you may "call" that function at any time.
Type the name of the function you wish to execute, followed by parenthesis. This invokes the function.

    2-B) If you assigned a parameter to the function, when you call the function you may give value to that parameter.
In order to achieve this, you must put that value inside of the parenthesis at the end of your call line. we call this an argument.
*/
firstFunction('Jon'); //=> 'Jon called this function.'

/*3.) Multiple inputs:

A function can accept several inputs and still have only one output. 
This can be achieved through arithmatic or conditionale statements leading to a return that specifies a singular output.
*/
function add(num, num1) {
    return num + num1;
}    

add(3, 6); //=> 9

/*4.) Assigning functions to variables:

You can assign functions as a value for a variable by declaring said variable, 
placing the = assignment operator to the right of the declared variable,
and creating your function to the right.
*/
var thisFunction = function() {
    return 'I give value to this variable';
}

console.log(thisFunction()); //=> 'I give value to this variable'


/*5.) Scope:

The types of scopes: Global, local, block

Scopes determine what parts of your code other parts can access.
If we make a function(parent) and declare a variable, Then set another function(child) to a variable in the first function,
the inside function(child) will have access to the variable set in the outer function(parent). 
But, if you create a variable in the inner function(child) and try to access it for use in the outer function(parent),
it will return a reference error.
*/
function correctScope() {
  let Jim = 'Jim';
let name = function() {
  Jim = Jim + ' ' + 'Pickens';
  let Tim = 'A name.';
  console.log(Jim);
};
return name();
}

correctScope(); //=> 'Jim Pickens'

/*function incorrectScope() {
  let Jim = 'Jim';
let name = function() {
  Jim = Jim + ' ' + 'Pickens';
  let Tim = 'A name.';
  console.log(Jim);
}
return Tim
}

incorrectScope() => Reference error: Tim is not defined.

/*6.) Closures:

Closures are functions created with a specific focus on the scope in which they are declared.
Before let the use of extra closures was required to bind block-scoped variables.
The child function in the example above is an example of a closure.
A closure cannot be directly accessed outside of its scope.
Higher order functions can make use of closures to create filters or other complex functions.
*/
function fullNameFilter(firstName) {
    return function (lastName) {
        return firstName + ' ' + lastName;
    };
}

let firstNameJon = fullNameFilter('Jon');

firstNameJon('Mohon'); //=> 'Jon Mohon'

//or

function fullName(nameFirst) {
    return nameLast => nameFirst + ' ' + nameLast;
}

let nameLast = fullName('Jon');

nameLast('Mohon'); //=> 'Jon Mohon'
