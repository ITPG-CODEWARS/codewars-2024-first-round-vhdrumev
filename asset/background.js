const container = document.getElementById('dot-container');
const dotSize = 4;
const spacing = 30;
const gridRows = Math.ceil(window.innerHeight / spacing);
const gridCols = Math.ceil(window.innerWidth / spacing);
const highlightDuration = 500;

const baseColor = 'rgba(37, 37, 37, 1)';
const highlightColor = 'rgba(96, 52, 176, 1)';

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
        const distance = Math.hypot(rect.x + dotSize / 2 - e.clientX, rect.y + dotSize / 2 - e.clientY);
        const maxDistance = 500;
        const opacity = Math.max(0, (maxDistance - distance) / maxDistance);
        const baseRGBA = baseColor.match(/[\d.]+/g).map(Number);
        const highlightRGBA = highlightColor.match(/[\d.]+/g).map(Number);
        dot.style.backgroundColor = `rgba(
            ${Math.round(baseRGBA[0] + (highlightRGBA[0] - baseRGBA[0]) * opacity)},
            ${Math.round(baseRGBA[1] + (highlightRGBA[1] - baseRGBA[1]) * opacity)},
            ${Math.round(baseRGBA[2] + (highlightRGBA[2] - baseRGBA[2]) * opacity)},
            ${Math.min(1, baseRGBA[3] + (highlightRGBA[3] - baseRGBA[3]) * opacity)}
        )`;

        clearTimeout(dot.highlightTimeout);
        dot.highlightTimeout = setTimeout(() => {
            if (distance >= maxDistance)
                dot.style.backgroundColor = baseColor;
        }, highlightDuration);
    });
});
