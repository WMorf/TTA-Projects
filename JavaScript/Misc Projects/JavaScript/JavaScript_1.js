

// Switch function for step 225
function MonsterFunction() {
    var monsterOutput; //varirable to be printed
    var monsters = document.getElementById("monster").value;
    var monsterStringA = " are pretty scary"; //plural
    var monsterStringB = " is pretty scary"; //singular

    switch(monsters) {

        case "Vampires":
            monsterOutput = "Vampires" + monsterStringA;
            break;
        
         case "Werewolfs":
            monsterOutput = "Werewolfs" + monsterStringA;
            break;

        case "Frankenstein":
            monsterOutput = "Frankenstein" + monsterStringB;
            break;

        case "Clowns":
            monsterOutput = "Clowns" + monsterStringA;
            break;

        case "Swamp Thing":
            monsterOutput = "Swamp Thing" + monsterStringB;
            break;

        case "Aliens":
            monsterOutput = "Aliens" + monsterStringA;
            break;
        
        default: //run if any other input
            monsterOutput = 'Please enter a monster exactly as written on the above list'
    }

    document.getElementById("output").innerHTML = monsterOutput;

}

// uses getElementByClassName() for step 236

function ClassMethod() {
    var X = document.getElementsByClassName("test");
    X[0].innerHTML = "See, it worked!";
}

// uses canvas to draw a line

function DrawLine() {
    var c = document.getElementById("canvas");
    var context = c.getContext("2d");
    context.moveTo(0,0); //Moves the path to the specified point in the canvas, without creating a line
    context.lineTo(300, 150); //Adds a new point and creates a line to that point
    context.stroke(); //draws the path you have defined
}

// Create Gradient Background
function GradientBackground() {
    var c = document.getElementById("canvas2");
    var context = c.getContext('2d');

    var grid = context.createLinearGradient(0,0, 260, 0); //blend proportions
    grid.addColorStop(0, "blue"); //Colors to blend
    grid.addColorStop(1, "yellow");

    context.fillStyle = grid;
    context.fillRect(1, 1, 297, 147); // fill dimensions
}