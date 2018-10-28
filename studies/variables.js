/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//Hoisting
//Variable declarations and function declarations are taken to the top of their scope.
//Different types are hoisted differently.
//Hoisting happens before code is run at runtime- first time code is read.

//a) var: only the name is hoisted. It has no value until defined. Logging a var above the line on which it was assinged returns undefined.

console.log(hoistedVar); //=> undefined

var hoistedVar = 0;

//b) functions: both name and body are hoisted. A function has its value at all times. Calling a function above the line on which it was defined still runs the body of the function.

sampleFunct();

function sampleFunct() {
  return 'The value was hoisted';
}

//c) Differences between var, let, const:

//c-1) var- able to be reassigned.
//Scope: global or local.

var thisVar = 6;
var thisVar = 5;
console.log(thisVar); //=> 5

//c-2) let- able to be reassigned. 
//Scope: block

let firstVar = 6;
firstVar = 5;
console.log(firstVar); //=> 5

//let nextVar = 6;
//let nextVar = 5;
//console.log(nextVar); //=> duplicate declaration error

//c-3) const- cannot be reassigned. 
//Scope: block

//const constVar = 5;
//constVar = 6;
//console.log(constVar); //=> duplicate declaration error
