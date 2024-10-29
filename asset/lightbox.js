const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
const galleryItems = document.querySelectorAll(".gallery-item");
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = galleryItems[index].src;
    //captionText.innerHTML = galleryItems[index].alt;
}
galleryItems.forEach((item, index) => {
    item.addEventListener("click", function() {
        openLightbox(index);
    });
});

closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

function showImage(index) {
    if (index < 0) {
        currentIndex = galleryItems.length - 1;
    } else if (index >= galleryItems.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    lightboxImg.src = galleryItems[currentIndex].src;
    captionText.innerHTML = galleryItems[currentIndex].alt;
}

prevBtn.addEventListener("click", function() {
    showImage(currentIndex - 1);
});

nextBtn.addEventListener("click", function() {
    showImage(currentIndex + 1);
});

document.addEventListener("keydown", function(event) {
    if (lightbox.style.display === "flex") {
        if (event.key === "Escape") {
            lightbox.style.display = "none";
        } else if (event.key === "ArrowLeft") {
            showImage(currentIndex - 1);
        } else if (event.key === "ArrowRight") {
            showImage(currentIndex + 1);
        }
    }
});
