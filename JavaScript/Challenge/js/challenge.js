
// Form Validation for step 392
function validateForm() {
    let x = document.forms['contact']['nickname'].value;
    let y = document.forms['contact']['phone'].value;
    if (x == "" || y == "") { //if nickname or phone are blank create alert window
        alert("Please fill out all fields...")
        return false;
    }
}