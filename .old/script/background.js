const container = document.getElementById('dot-container');
const dotSize = 4;
const spacing = 30;
const gridRows = Math.ceil(window.innerHeight / spacing);
const gridCols = Math.ceil(window.innerWidth / spacing);
const highlightDuration = 500;

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

        if (distance < 150) {
            dot.classList.add('highlight');
            clearTimeout(dot.highlightTimeout);

            dot.highlightTimeout = setTimeout(() => {
                dot.classList.remove('highlight');
            }, highlightDuration);
        }
    });
});
