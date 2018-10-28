/*Loops
A loop is code used to, true to its name, loop a given action again and again. 
Most of the time a loop will be given a condition that determines how many times that code is repeated. 
A variable index (var i) is definedand and assigned a value which is used as a stating point for the loop. 
This variable is used to check agianst the conditional statement in the loop. 
As long as those conditions are met, the code will loop. Typically
the value given to the variable i will be changed with each iteration of the loop.
This is important. If the index variable meets the looping
conditions and you don't adjust the index, it will cause an infinite loop and will crash.

Types of loops:

for loops
loops throught each iteration based on predefined conditions
for loops can also be used to loop forwards or backwards through an array
for (i = (starting point); i (conditional statement that, if true, repeats the loop; i++ or i--) {
do something for each iteration
}

ex: A function that uses a for loop to return an array counting up from a given number to the next multiple given
*/
function nextMultipleOf(num, multiple) {
 let countingArr = [];
for (var i = 0; (num + i) % multiple !== 0; i++) {
    countingArr.push(num + i);
}countingArr.push(num + i);
return countingArr;
}

nextMultipleOf(6, 3); //=> [6, 7, 8, 9]

//ex: A function that loops backwards and returns an array that counts down from a given number to another number

function countingDownTo(startFrom, endAt) {
    let descendingArr= [];
    for (var i = startFrom; i >= endAt; i--) {
        descendingArr.push(i);
    }
    return descendingArr;
}

countingDownTo(8, 2); //=> [8, 7, 6, 5, 4, 3, 2]

//ex: A function that loops forward over an array and adds 1 to each element

function changeArr(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
    } return array;
}

changeArr([2, 3, 4]); //=> [3, 4, 5]

//ex: A function that loops backwards over an array and subtracts 1 from each element and returns them as an array in reversed order

function changeArrReverse(array) {
    let reverseArr = [];
    for (var i = array.length - 1; i > -1; i--) {
        reverseArr.push(array[i] - 1);
    } return reverseArr;
}

changeArrReverse([2, 3, 4, 5]); //=> [4, 3, 2, 1]

/*for in loop
loops through key-value pairs in an object
for (var keys(repeats for each key present in the referenced object) in object {
do something for each iteration
}

ex: A function that uses a for in loop to log the value of each key
*/
function allValues(obj) {
    for (var key in obj) {
        console.log(obj[key] + ' ' + 'meat');
    }
}
allValues({tod: 'Ham', tom: 'Turkey', jeff: 'Bear'});
