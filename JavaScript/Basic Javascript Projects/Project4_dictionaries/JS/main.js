function getDictionary() { //prints value specified from dictionary
    var Monster = {
        Species:"Banshee",
        Color:"Light Blue",
        Breed:"Undead",
        Age:100,
        Sound: "Wail",
    }
    document.getElementById("Dictionary").innerHTML = Monster.Age;
}

function getDictionary2() {
    var Monster = {
        Species:"Grick",
        Color:"Green",
        Breed:"Slug",
        Age:5, //Value will be deleted
        Sound: "Slosh",
    }
    delete Monster.Age; //Deletes value
    document.getElementById("Dictionary2").innerHTML = Monster.Age; //returns "undefined"
}

function SampleOne() {
    document.write(typeof "Letters"); //returns string
}

function SampleTwo() {
    document.write(typeof 5); //returns number
}

function SampleThree() {
    document.write("100" + 10); //returns number 10010, combining both without adding the
}
