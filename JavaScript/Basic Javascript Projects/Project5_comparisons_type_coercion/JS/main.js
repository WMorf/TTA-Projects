function SampleOne() {
    document.write(typeof "Letters"); //returns string
}

function SampleTwo() {
    document.write(typeof 5); //returns number
}

function SampleThree() { //Coercion Function
    document.write("100" + 10); //returns number 10010, combining both without adding the
}

function DivByZero() { //returns NaN dividing by zero
    document.getElementById("zero").innerHTML = 0/0;
}

function IsNotN() { //displays whether entered value is a number
    document.getElementById("notN").innerHTML = isNaN("I'm a string value")
    document.getElementById("isN").innerHTML = isNaN("100")
}

function CaptureInfinity() {
    document.write(2E310); //returns Infinity
    document.write(" "); //adds Spacing
    document.write(-100000E310); //returns Negative Infinity
}

function DoSomeBool() { // Checks and displays boolean
    document.write(10 > 5); //returns true
    document.write(" "); //adds Spacing
    document.write(10 < 5) //returns false
}

//Boolean
//prints to console
console.log(5 +5);//10
console.log(6 < 5);//false
console.log(10 == 10);//true
console.log(5 == 10);//false

x = 12;
y = 12;
z = 15;
a = "12";

//compare type
function CompareBoth() {
    document.write(x === y); //a
    document.write(" ");//true

    document.write(x === a); //b
    document.write(" ");//false

    document.write(y === a); //c
    document.write(" ");//false

    document.write(x === z); //d
    document.write(" ");//false
}


//Uses AND as well as OR operators
function AndOr() {
    document.write(" "); //AND
    document.write(10 > 5 && 10 > 9); //True
    document.write(" ");
    document.write(7 > 9 && 8 > 9); //False

    document.write(" "); //OR
    document.write(10 > 5 || 8 > 9); //True
    document.write(" ");
    document.write(3 > 94 || 7 < 6); //False
}

function Not() { //Uses Not Operator
    document.getElementById("not").innerHTML = !(10 > 5);
    document.getElementById("not2").innerHTML = !(7 > 8);
}