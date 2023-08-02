//Global Variable
var longString = "This is quite a long string, seriously..."; // String to be used for string.length property

console.log(longString.length); //prints string length to console for step 198

// while loop for step 197
function Call_Loop() {
    var place = ""; //blank spot loop will update
    var X  = 1;
    while (X < 11) { //loop within the function runs until conditions are met
        place += "<br>" + X;
        X++; //increments so loop will run again unless x is greater than 11
    }
    document.getElementById("loop").innerHTML = place;
}

// for loop for step 201

var Dragons = ["Gold", "Copper", "Bronze", "Steel", "Blue", "Red", "White"] //array
var Content = ""
var Y;

function ThisForLoop() {
    for (Y = 0; Y < Dragons.length; Y++) { //runs through the array executing code each time and then incrementing Y
        Content += Dragons[Y] + "<br>"; //current index of array plus line break
    }
    document.getElementById("forloop").innerHTML = Content;
}

// function using getElementbyID for step 205

function ArrayFunction() {

    var GoblinTypes = []; //creates array
    GoblinTypes[0] = "Goblin";
    GoblinTypes[1] = "HobGoblin";
    GoblinTypes[2] = "Bugbear";
    GoblinTypes[3] = "Snotling";

    document.getElementById("array").innerHTML = "The third type of goblin is " + GoblinTypes[2] + ".";
}

// function using constant keyword for step 213

function ConstantFunction() {
    const Health_Potions = {type:"small", color:"red", power:"2d4+2"}; //declares constant
    Health_Potions.color = "blue"; //changes property
    Health_Potions.price = "50gp" //adds property and value
    document.getElementById("constant").innerHTML = "The " + Health_Potions.type +
    " Health Potion is " + Health_Potions.color + " and costs: " + Health_Potions.price;
}

// creating let object for step 215

let dice = {
    sides: 20,
    color: "red",
    text: "white",
    description : function() {
        return "This dice is a " + this.sides + " sided dice with " + this.text + " numbers and a " + this.color + " background";
    }
}

// uses let object for step 215
function LetFunction() {
    document.getElementById("letplace").innerHTML = dice.description();
}


// functions using return statement for step 218

function ReturnFunction(name) { //function to be called by UseReturn()
    return "A bloodthirsty " + name + " aproaches!";
}

function UseReturn(Z) { //run by button click, takes string value and gives it to ReturnFunction for use
    document.getElementById("returnspot").innerHTML = ReturnFunction(Z);
}

// functions using break and continue statements for step 222

function BreakIt() {
    let text = "";
    for (let i = 0; i < 5; i++) {
        if (i === 4) {break;} //ends after 4
        text += "Current Number: " + i + " ";
        document.getElementById("breakspot").innerHTML = text;
    }
}

function ContinueIt() {
    let text = "";
    for (let i = 0; i < 5; i++) {
        if (i === 2) {continue;} //skips 2
        text += "Current Number: " + i + " ";
        document.getElementById("continuespot").innerHTML = text;
    }
}