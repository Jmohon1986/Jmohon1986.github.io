/*Operators



Types of Operators:

1.) Assignment

=  =+  =-  =/  =*

These operators assign or reassign value to variables, keys in an object, data in an array, and return functions.
They function by assigning the value on the right of the operator to the operand on the left.

var x = 0; => assigns a value of 0 to the variable x

Assignment operaters that have an arithmatic element after an equals sign can adjust and reassign a value.

x =+ 6; => is equivalent to x = x + 6 

console.log(x); => 6

2.) Arithmatic

+  -  /  *  %

Arithmatic operators use numeric values as inputs and returns a single value.
The symbol % can be used to find a remainder.

console.log(5 + 6); => 11
console.log(11 % 3); => 2

3.) Comparisson 

< > == === !== <= >=

Comparisson operators compare inputs in conditional statements to recieve a boolean value.

Console.log(5 < 6); => true

Comparrison operators allow you to test whether an operand loosly equals (==), strictly equals (===), or does not equal (!==) another operand.

console.log(3 == '3'); => true
console.log(3 === '3'); => false
console.log(2 !== 3); => true


4.) Logical
&& || !
Logical operators test several boolean statements against &&, ||, and !.
conditional statements on each side of && must both be true to return true.

function and(num1, num2) {
    if (num1 > 0 && num2 < 5) {
        return 'Both were true';
    } else {
    return 'At least one of those was false';
}
}

and(1, 3); => 'Both were true'
and(0, 4); => 'At least one of those was false'

5.) Unary

delete typeof void + - !

Unary operators only act on a single operand locacted to the right of the operator. 
delete can remove an unwated element from an object or array
typeof returns a string containing the dataype of the operand
void runs an expression, but ignores the return value
+ and - attepmts to convert the operand to a number
~ perform a not operation that inverts bitwise info by changing all 1's to 0's and vice versa
! logical operator that performs a not operation on expressions that return a boolean value

function deletion() {
    let objDelete = {jeff: 7, joe: 9};
    delete objDelete.joe;
    return objDelete
}
deletion() => {jeff: 7}

console.log(+ '76') => 76
console.log(~00100) => -65
console.log(!true) => false

6.) Ternary
Unlike the unary and binary operators which have several types of operators that accept one or two operands, 
the ternary operator is the only operator in javascript that accepts three operands.
This operator may be used in place of an if statement.
The syntax of this operator is: conditional ? true:false

console.log((4 > 5) ? 'If you see this there is a problem': 'Of course not') => 'Of course not'


*/