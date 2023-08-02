

var X = "Hello World.";
var Y = "I made a lot of Dwarf Fortress related HTML pages last course...";
var z = " Grog: \"I would like to Rage!\"";
var Z = " Keyleth: " + " \"C\'mon you guys!\"";
var Group = "Vox Machina", Member1 = "Percy", Member2 = "Vex", Member3 = "Vax";

// Previous 
//alert("Hello World");
//window.alert("Hello World!");
//document.write(X);
//document.write(z);
//document.write(Member2);

function firstFunction() { //Makes a button that changes text
    var str = 'Some Text!';
    document.getElementById("Button_Text").innerHTML = str
}

function causeChaos() {
    window.alert(Y);//Makes popup with printed string

    document.write("Scanlan: \"BIGBY's HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAND\""
    + "Scanlan cried out as an ethereal purple hand rose to attack!"); //combines 2 strings

    document.write(z);
    document.write(3+3); //Expression

}

function chaosButton() {
    document.getElementById("chaos_Button").innerHTML = str
    causeChaos();
}

function mouseHover(obj) {
    obj.innerHTML = "Too Slow";
}