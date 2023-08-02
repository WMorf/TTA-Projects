function AddMe(x,y) { //Add 2 numbers
    var addition = x + y;
    document.getElementById("Math1a").innerHTML = x + " + " + y + " = ";
    document.getElementById("Math1").innerHTML = addition;
}

function SubMe(x,y) { //Subtract 2 numbers
    var subtraction = x - y;
    document.getElementById("Math2a").innerHTML = x + " - " + y + " = ";
    document.getElementById("Math2").innerHTML = subtraction;
}

function MultMe(x,y) { //Multiply 2 numbers
    var multiplication = x * y;
    document.getElementById("Math3a").innerHTML = x + " * " + y + " = ";
    document.getElementById("Math3").innerHTML = multiplication;
}

function DivMe(x,y) { //Divide 2 numbers
    var division = x / y;
    document.getElementById("Math4a").innerHTML = x + " / " +  y + " = " ;
    document.getElementById("Math4").innerHTML = division;
}

function MathMe(x,y,a,b) { //Multiple Operators
    var result = (x + y) + (a * b);
    document.getElementById("Math5a").innerHTML = x + " + " + y + " + " + a + " * " +  b  + " = ";
    document.getElementById("Math5").innerHTML = result;
}

function ModMe(x,y) { //Shows remainder
    var modulus = y % x;
    document.getElementById("Math6a").innerHTML = y + " % " + x + " = ";
    document.getElementById("Math6").innerHTML = modulus;
}

function UnaMe(x) { //uses Unary operator returning opposite.
    var y = x
    document.getElementById("Math7a").innerHTML = "Negative " + x;
    document.getElementById("Math7").innerHTML = -y;
}

function IncrMe(x) { //Increments number
    var y = x;
    y++;
    document.getElementById("Math8a").innerHTML = x + " + " + " 1 " + " = ";
    document.getElementById("Math8").innerHTML = y;
}

function DecrMe(x) { //Decreases number
    var y = x;
    y--;
    document.getElementById("Math9a").innerHTML = x + " - " + " 1 " + " = ";
    document.getElementById("Math9").innerHTML = y;
}

function RandNum1() { //returns 1 or 0
    x = Math.random();
    x = Math.round(x);
    window.alert(x);
}

function RandNum100() { //Returns random number between 0 and 100, rounded
    x = Math.random() * 100;
    x = Math.round(x);
    window.alert(x);
}
