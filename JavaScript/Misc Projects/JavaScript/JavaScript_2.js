

function ValidateForm() {
    let x = document.forms["thisform"]["name"].value; //name in input
    let y = document.forms["thisform"]["email"].value; //email in input
    if (x == "" || y == "") { //if name or email is empty
        alert("All info must be filled out");
        return false
    }
}