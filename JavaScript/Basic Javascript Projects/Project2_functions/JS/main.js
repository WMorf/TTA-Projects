function button_1() {
    var buttonSTR = 'Told You';
    document.getElementById("button_1_text").innerHTML = buttonSTR;
}
//Button changes paragraph


function cement() {
    var sentence = "I'm breezing by";
    sentence += " with some Javascript";
    document.getElementById("Concatenate").innerHTML = sentence;
}
//Changes paragraph when clicked

//Find all "p" elements
var para = document.getElementsByTagName("p");

function printMe(para) {
    document.write(para);
}