//uses concat method to combine strings
function FullSentence() {
    var part_1 = "I have "
    var part_2 = "made this "
    var part_3 = "into a complete "
    var part_4 = "sentence."
    var wholeSentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = wholeSentence;
    document.getElementById("buttontext").innerHTML = "Done!"; //changes button text after printing sentence
}

//uses slice method to pull specific parts of the string
function SliceMethod() {
    var sentence = "C'mon you apes! You wanna live forever?";
    var section = sentence.slice(16,30); //slices sentence from character position 16 - 30
    document.getElementById("slice").innerHTML = section; //prints "You wanna live"
}

//uses toUpperCase method
function UpperCase() {
    var text = document.getElementById("uppercase").innerHTML; //gets text from element
    console.log(text); //checking to make sure text was stored properly
    var upperText = text.toUpperCase(); //Makes UpperCase
    document.getElementById("uppercase").innerHTML = upperText; //Displays modified Text
}

//uses Search method
function CowSearch() {
    var text = document.getElementById("tosearch").innerHTML; //gets text from element
    var searchResults = text.search("cow");
    document.getElementById("searchresult").innerHTML = searchResults; //ZDiisplays position of first occurrence
}

//uses toString method
function StringMethod() {
    var x = 999;
    document.getElementById("numbers_to_string").innerHTML = x.toString(); //converts 999 to string
}

//uses toPrecision method
function PrecisionMethod() {
    var X = 3.14159265358979323846;
    document.getElementById("precise").innerHTML = X.toPrecision(5); //formats number to specified length
}

//uses toFixed method
function FixNum() {
    var num = 8.675309;
    var fixedNum = num.toFixed(2); //converts a number to a string, rounded to a specified number of decimals
    document.getElementById("tobefixed").innerHTML = fixedNum;
}

//uses valueOf method
function GetValue() {
    var text = "This is a string";
    var textValue = text.valueOf(); //same as textValue = text
    document.getElementById("valueof").innerHTML = textValue; //prints value of "text" variable
}

