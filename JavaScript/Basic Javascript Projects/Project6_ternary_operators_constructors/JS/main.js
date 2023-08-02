function Ride_Function() {
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride";
}

//Checks input age to see if they are old enough to vote
function Vote_Function() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age < 18) ? "You are to young":"You are old enought"
    document.getElementById("vote").innerHTML = canVote + " to vote."
}

//Object constructor-------------------------------
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//defines a few objects
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//prints info about the Erik.Vehicle object
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " +  Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//Step 134 constructor -----------------------------
function Plane(Engines, Color, Seats) {
    this.Plane_Engine_Num = Engines;
    this.Plane_Color = Color;
    this.Plane_Seats = Seats;
}

var smallPlane = new Plane(2, "Red", 2);
var bigPlane = new Plane(4, "White", 20);

function myOtherFunction() {
    document.getElementById("New_and_This").innerHTML =
    "The big plane has " + bigPlane.Plane_Engine_Num + " engines and has "
    + bigPlane.Plane_Seats + "seats and is " + bigPlane.Plane_Color;
}

//-----------------------------------------------

//Takes 5 from the starting point "x"
function MyNestedFunction(x) {
    document.getElementById("nested_function").innerHTML = Count();
    function Count() {
        var starting_Point = x;//variable input on HTML end
        function TakeAFive() {starting_Point -= 5;}
        TakeAFive();
        return starting_Point;
    }
}