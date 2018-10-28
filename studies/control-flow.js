/*Control-flow
Used to select a block of code to run based on a boolean tested by a conditional statement

if

if:
The first conditional statement to be tested.
If the boolean = true, the code is run. If false, the code is not run.
*/
function ifStatement(x) {
    if (x > 5) {
        return 'This worked';
    }
}

ifStatement(6); //=> 'This worked'
ifStatement(4); //=> 'undefined'

/*else if:
If the if statement proved false, the next step reached is else if.
It functions in a similar manner to the if statement.
Within the scope of your if statement, you may have any number of esle if's.
The conditional statement attached to each will be tested and the first else if that proves true will be run.
*/
function elseIf(x) {
    if (x === undefined) {
        return 'undefined';
    } else if (x < 5) {
        return 'yay';
    } else if (x > 5) {
        return 'great';
    } else {
        return 'This is equal';
    }
}

elseIf(4); //=> 'yay'
elseIf(6); //=> 'great'
elseIf(5); //=> 'This is equal'

/*else:
The code following an else statement is only read if no if or else if statements were run.
Else has no conditional statement attached to it as the input provided has no effect.
*/
function nothingTrue(x) {
    if (x === 'jack') {
        return 'a name';
    } else if (x === 'infinity') {
        return 'Why did you even make this line, this is an example of an else statement';
    } else {
        return 'If you are seeing this it is because nothing else was true';
    }
}

nothingTrue('This argument will run the code attached to else');
