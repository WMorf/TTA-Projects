
//Turn Tracker
let activePlayer = 'X';
//Array of moves, helps determine win condition
let selectedSquares = [];

//place x or o on square
function placeXOrO(squareNumber) {

    //some method used to check array to ensure a square hasn't been selected already
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        
        //retrieves html element that was clicked
        let select = document.getElementById(squareNumber);

        //displays activePlayer
        //document.getElementById('activePlayer').innerHTML = activePlayer;

        //checks player turn
        if (activePlayer === 'X') { //if active player = X, x.png is placed
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")'; //places o if X is not activePlayer
        }

        //concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);

        checkWinConditions(); //see if anyone has won

        document.getElementById('selectedsquares').innerHTML = selectedSquares; //debug showing selected squares

        //changes activePlayer
        if (activePlayer === 'X') {

            activePlayer = 'O';
            document.getElementById('activePlayer').innerHTML = "Dwarf's Turn";

        } else {

            activePlayer = 'X';
            document.getElementById('activePlayer').innerHTML = "Goblin's Turn";

        }

        //plays placement sound, alternating between players
        if (activePlayer === 'X') {

            audio('./media/place.mp3');
        } else {
            audio('./media/place2.mp3');
        }

        if(activePlayer === 'O') {

            disableClick() //pauses clicking while it is computer's turn

            setTimeout(function () { computersTurn(); }, 1000) //pauses 1 second before computer goes

        }

        return true; //needed for computersTurn
    }

    //Computer picks a random square
    function computersTurn() {
        let success = false //needed for while loop

        let pickASquare; //stores random number between 0 and 8

        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9)) //gets random number between 0-8

            if (placeXOrO(pickASquare)) { //checks random number, if true the square hasn't been selected yet
                placeXOrO(pickASquare); //calls function
                success = true; //ends loop
            }
        }
    }
}


//Function parses selectedSquares array to search for win conditions.
//drawWinLine function called if condition is met
function checkWinConditions() {
    //X Win
    // X 0, 1, 2 condition
    if      (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100) }
    //  X 3,4,5 condition
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304) }
    //  X 6,7,8 condition
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508) }
    // X 0,3,6 condition
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558) }
    // X 1,4,7 condition
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558) }
    // X 2,5,8 condition
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558) }
    // X 6,4,2 condition
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90) }
    // X 0,4,8 condition
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520) }

    //O Win
    //  condition
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100) }
    //  condition
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304) }
    //  condition
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508) }
    //  condition
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558) }
    //  condition
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558) }
    //  condition
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558) }
    //  condition
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90) }
    //  condition
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520) }

    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3'); //plays tie sound
        setTimeout(function () { resetGame(); }, 1000) ; //sets .3 seconds timer before game is reset
    }

    //function checks if array includes 3 strings. Checks for win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //uses variables to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)


        //return true if a;; 3 variables are present
        if (a === true && b === true && c === true) { return true }
    }
}

//temporarily makes body element unclickable
function disableClick() {
    body.style.pointerEvents = 'none'; //makes body unclickable
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000) //makes clickable after 1 second
}

//takes string partameter of sound filepath
function audio(audioURL) {
    //create new audio object with filepath
    let audio = new Audio(audioURL);
    //playe method plays sound
    audio.play();
}

//function uses canvas to draw win line
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //access canvas
    const canvas = document.getElementById('win-lines')
    //access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //start of lines x axis
    let x1 = coordX1,
    //start of y axis
    y1 = coordY1,
    //end of lines x axis
    x2 = coordX2,
    //end of lines y axis
    y2 = coordY2,
    //stores temp x axis while updating animation loop
    x = x1,
    //stores temp y axis while updating animation loop
    y = y1;

    //function interacts with canvas
    function animateLineDrawing() {
        //variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //method clears content from last loop iteration
        c.clearRect(0, 0, 608, 608)
        //method starts new path
        c.beginPath();
        //method moves to the starting point for our line
        c.moveTo(x1, y1)
        //method indicates our end point in our line
        c.lineTo(x, y)
        //set width of line
        c.lineWidth = 10;
        //set color
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //draws everything laid out abovr
        c.stroke();
        //checks if we've reached endpoit
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; } //adds 10 to previous x endpoint
            if (y < y2) { y += 10; } //adds 10 to previous y endpoint
            //cancles loop if endpoints reached
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

        //same as above but neccasary for the 6,4,2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //clears out canvas after win line is drawn
    function clear() {
        //Starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        //clears canvas
        c.clearRect(0, 0, 608, 608);
        //stops animation loop
        cancelAnimationFrame(animationLoop);
    }

    //dissalows click while win sound is playing
    disableClick();
    //plays win sound
    audio('./media/winGame.mp3');
    //call main animation loop
    animateLineDrawing();
    //pauses for 1 second then clears canvas, resets game, and allows clicking again.
    setTimeout(function () {clear(); resetGame(); }, 1000);
}


//function resets game if tied or a win
function resetGame() {
    //loops iterates through each HTML square element
    for (let i = 0; i < 9; i++){
        //gets the html element of i
        let square = document.getElementById(String(i))
        //removes elements backround image
        square.style.backgroundImage = ''
    }

    selectedSquares = [];
    document.getElementById('selectedsquares').innerHTML = "...";
}