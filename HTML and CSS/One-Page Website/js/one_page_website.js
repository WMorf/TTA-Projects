//Open Modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

//Close Modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

var slideIndex = 1;
showSlides(slideIndex);

//Next/Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName('lightbox');
    var captionText = document.getElementById('caption');
    if (n > slides.length) {slideIndex = 1} //if n is outside slideIndex range, go back to 1
    if (n < 1) {slideIndex = slides.length} //if n is less than first element, go to end of slideIndex

    for (i = 0; i < slides.length; i++){//hides slides and keeps them from slacking
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { //removes active class from dots
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; //displays current slide
    dots[slideIndex-1].className += " active"; //makes dot active
    captionText.innerHTML = dots[slideIndex-1].alt; //displays alt text beneath currentSlide
}