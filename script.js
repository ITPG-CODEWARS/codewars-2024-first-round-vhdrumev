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
