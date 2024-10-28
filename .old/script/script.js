/let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let timeoutId;

let timeout = 5000;
let firstSlidePassed = false;

showSlides();

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        slides[i].classList.remove("active"); // Remove active class from all slides
    }

    // Show current slide with zoom effect
    slides[slideIndex].style.opacity = "1";
    slides[slideIndex].classList.add("active"); // Add active class to the current slide

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";

    clearTimeout(timeoutId);
    timeoutId = setTimeout(showSlides, 5000);
    firstSlidePassed = true;

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
        currentSlide(i);
    });
}





const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelector('.nav-action .links');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});
document.querySelectorAll('.nav-list-menu > .nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const parentLi = this.parentElement;
        parentLi.classList.toggle('open');
    });
});

const backToTopButton = document.getElementById("backToTop");
const pageHeight = document.documentElement.scrollHeight;
window.onscroll = function() {
    if (document.body.scrollTop > 540 || document.documentElement.scrollTop > 540) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
