document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.index-main .buttons .button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = button.getBoundingClientRect();
            const relX = e.clientX - rect.left;
            const relY = e.clientY - rect.top;
            const span = button.querySelector('span');
            span.style.position = 'absolute';
            span.style.top = relY + 'px';
            span.style.left = relX + 'px';
        });

        button.addEventListener('mouseout', function(e) {
            const rect = button.getBoundingClientRect();
            const relX = e.clientX - rect.left;
            const relY = e.clientY - rect.top;
            const span = button.querySelector('span');
            span.style.top = relY + 'px';
            span.style.left = relX + 'px';
        });
    });

    const links = document.querySelectorAll('[href="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});




let cards = [...document.querySelectorAll('.card'),
    ...document.querySelectorAll('.image-text-section .image-content img'),
    ...document.querySelectorAll('.lander .image-content img')];
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = card;
        const { offsetX, offsetY } = e;

        const x = (offsetX / width) * 100;
        const y = (offsetY / height) * 100;

        card.style.transform = `perspective(1000px) rotateY(${(x - 50) / 5}deg) rotateX(${(50 - y) / 5}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    });
});

