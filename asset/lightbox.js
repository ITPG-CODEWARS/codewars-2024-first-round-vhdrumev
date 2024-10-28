// Get the modal
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0; // Track the current image index

// Get all images in the gallery
const galleryItems = document.querySelectorAll(".gallery-item");

// Function to open the lightbox with the selected image
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = galleryItems[index].src;
    captionText.innerHTML = galleryItems[index].alt; // Set the caption to the image's alt text
}

// Loop through each gallery item
galleryItems.forEach((item, index) => {
    item.addEventListener("click", function() {
        openLightbox(index);
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Navigation functions
function showImage(index) {
    if (index < 0) {
        currentIndex = galleryItems.length - 1; // Wrap around to last image
    } else if (index >= galleryItems.length) {
        currentIndex = 0; // Wrap around to first image
    } else {
        currentIndex = index;
    }
    lightboxImg.src = galleryItems[currentIndex].src;
    captionText.innerHTML = galleryItems[currentIndex].alt; // Update caption
}

// Event listeners for navigation buttons
prevBtn.addEventListener("click", function() {
    showImage(currentIndex - 1);
});

nextBtn.addEventListener("click", function() {
    showImage(currentIndex + 1);
});

// Keyboard controls
document.addEventListener("keydown", function(event) {
    if (lightbox.style.display === "flex") {
        if (event.key === "Escape") {
            lightbox.style.display = "none"; // Close lightbox on Esc
        } else if (event.key === "ArrowLeft") {
            showImage(currentIndex - 1); // Show previous image
        } else if (event.key === "ArrowRight") {
            showImage(currentIndex + 1); // Show next image
        }
    }
});
