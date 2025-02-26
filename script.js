const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

//call the slider function once all images are loaded in dom
document.addEventListener('DOMContentLoaded', intializeSlider);

function intializeSlider(){
    if(slides.length > 0){
        //adds a class displaySlide to each image object which inturn enables the visibility of the image in css
        slides[slideIndex].classList.add('displaySlide');
        //automatically move to next slide every 2 seconds
        intervalId = setInterval(nextSlide, 2000);
    }
}

function showSlide(ind){
    if(ind >= slides.length){ slideIndex = 0;}
    else if(ind < 0) {slideIndex = slides.length - 1;}

    //hide all images by removing the class displaySlide if any has it
    slides.forEach(curSlide => {
        curSlide.classList.remove('displaySlide');
    });

    //only the provided index must be visible
    slides[slideIndex].classList.add('displaySlide');
}

function prevSlide(){
    //stop auto rolling to right if previous is pressed
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}