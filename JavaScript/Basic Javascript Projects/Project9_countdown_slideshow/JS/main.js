function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1; //decreases seconds by 1
        timer.innerHTML = seconds;//prints to <p> element with "timer" ID
        var time = setTimeout(tick, 1000); //program pauses for 1,000 milliseconds or 1 second
        if (seconds == -1) { //makes aleert window when time is up
            alert("Times up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick() //calls the nested function
}

// -------------- SlideShow ------------------ //

var slideIndex = 1;
showSlides(slideIndex);

// nav controls
function plusSlides(n) { //n = 1 or -1 , moving through the index
    showSlides(slideIndex += n);
}

// Thumbnail icontrols
function currentSlide(n) { //selects specific slide
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); // targets all elements with myslides class
    var dots = document.getElementsByClassName("dot"); //targets dot class elements

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) { //removes active class from dot element
        dots[i].className = dots[i].className.replace(" active", ""); //replace with empty space
    }
    
    slides[slideIndex-1].style.display = "inline-block"; //sets display to inline-block
    dots[slideIndex-1].className += " active"; //adds active to classname
}