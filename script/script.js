let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

showSlides();

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.opacity = "1";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 5000);
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
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
