
// gets Data Attribute for step 264
function DisplayType(goblin) {
    var goblinType = goblin.getAttribute("data-goblin_type"); //grabs dta from html element
    alert(goblinType + " are " + goblin.innerHTML + "."); //displays data in alert window
}