var globalVar = "This is a global variable." //Global variable

function thisIsLocal() {
    var localVar = "This is a local variable" //Local variable
}

function iAmError() { //Funtion designed to cause error in console
    var iWork = "This variable works"
    console.log(iWork);
    console.log(localVar); //causes error. Not a local variable
}

//writes message if local time is before time stated
function getDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("hello").innerHTML = "Smiley day to ya";
    }
}

//custom if statement

X = 10

function IfOnly() { //only works if value X exceeds 10
    if (X == 11) {
        document.getElementById("ifonly").innerHTML = "Good Job!";
    }
}

function AddToX() { //Adds 1 to X, allowing IfOnly to run
    X++;
    document.getElementById('valuex').innerHTML = "Value of X = 11";
    console.log(X)
}

//Time of day function

function TimeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) { //before 12:00
        reply = "It is morning time!";
    }
    else if (time >= 12 == time < 18) { //after 12:00 but before 18:00
        reply = "It is afternoon";
    }
    else {
        reply = "It is evening time."; //anything after 18:00
    }
    document.getElementById("time_of_day").innerHTML = reply;
}

//Checks value of user input and prints the results based on the input
function Over9000() {
    var n = document.getElementById("inputvalue").value;

    if (n > 9000) {
        document.getElementById("result").innerHTML = "It's over 9,000!"
        var x = document.createElement("img") // Creates and displays image upon this result
        x.setAttribute("src", "Images/yell.gif")
        x.setAttribute("height", "100")
        x.setAttribute("width", "200")
        x.setAttribute("alt", "Dragon Ball Z Yell")
        document.body.appendChild(x);
    }
    else if (n < 9000) {
        document.getElementById("result").innerHTML =  "Um, thats actually under 9,000"; // in case input is  under
    }
    else if (n == 9000) {
        document.getElementById("result").innerHTML =  "Well, that actually is 9,000"; // in case input is exact
    }
    else {
        document.getElementById("result").innerHTML = "I don't think that is a number" //catch any other possible inputs
    }
}