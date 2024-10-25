const container = document.getElementById('dot-container');
const dotSize = 4; // Diameter of each dot in px
const spacing = 30; // Space between dots
const gridRows = Math.ceil(window.innerHeight / spacing);
const gridCols = Math.ceil(window.innerWidth / spacing);
const highlightDuration = 300;

for (let row = 0; row < gridRows; row++) {
    for (let col = 0; col < gridCols; col++) {
        const dot = document.createElement('div');
        dot.classList.add('background-dot');
        dot.style.top = `${row * spacing}px`;
        dot.style.left = `${col * spacing}px`;
        container.appendChild(dot);
    }
}

document.addEventListener('mousemove', (e) => {
    const dots = document.querySelectorAll('.background-dot');
    dots.forEach(dot => {
        const rect = dot.getBoundingClientRect();
        const distance = Math.hypot(rect.x - e.clientX, rect.y - e.clientY);
        let opacity = 0;

        if (distance < 100) {
            opacity = 1 - distance / 100;
        }

        if (opacity > 0) {
            dot.style.background = `linear-gradient(135deg, rgba(65, 105, 225, ${opacity * 0.4}), rgba(138, 43, 226, ${opacity * 0.4}))`;
            dot.classList.add('highlight');

            clearTimeout(dot.highlightTimeout);

            dot.highlightTimeout = setTimeout(() => {
                dot.classList.remove('highlight');
            }, highlightDuration);
        } else {
            // Remove highlight if far away
            dot.classList.remove('highlight');
        }
    });
});
