let currentImageIndex = 0;
const images = [
    "../public/image/slide1.jpg",
    "../public/image/slide2.jpg",
    "../public/image/slide3.jpg",
    "../public/image/slide4.jpg",
    "../public/image/slide5.jpg"
];

function openlightbox(index) {
    currentImageIndex = index;
    document.getElementById("displayed-image").src = images[currentImageIndex];
    document.getElementById("image-counter").textContent = `${currentImageIndex + 1} / ${images.length}`;
    const lightbox = document.querySelector(".lightbox");

    // Add show class to trigger fade-in effect
    lightbox.classList.add("show");
    document.body.classList.add("show-lightbox");

    // Add keydown listener
    document.addEventListener("keydown", handleKeydown);
}

function closelightbox() {
    const lightbox = document.querySelector(".lightbox");

    // Remove show class to trigger fade-out effect
    lightbox.classList.remove("show");
    document.body.classList.remove("show-lightbox");

    // Remove keydown listener to prevent actions outside lightbox
    document.removeEventListener("keydown", handleKeydown);
}

// Function to go to the next image
function nextImage() {
    updateImage("right");
}

function prevImage() {
    updateImage("left");
}

function updateImage(direction) {
    const displayedImage = document.getElementById("displayed-image");

    // Determine slide-out direction based on the specified direction
    if (direction === "right") {
        displayedImage.classList.add("slide-out-left");  // Current image slides out to the left
    } else if (direction === "left") {
        displayedImage.classList.add("slide-out-right");  // Current image slides out to the right
    }

    // Wait for slide-out transition to finish
    displayedImage.addEventListener("transitionend", function handleTransition() {
        // Update the current image index
        if (direction === "right") {
            currentImageIndex = (currentImageIndex + 1) % images.length; // Move to next image
        } else if (direction === "left") {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Move to previous image
        }

        // Change the image source and update the image counter
        displayedImage.src = images[currentImageIndex];
        document.getElementById("image-counter").textContent = `${currentImageIndex + 1} / ${images.length}`;

        // Remove slide-out classes
        displayedImage.classList.remove("slide-out-left", "slide-out-right");

        // Add slide-in classes based on direction
        if (direction === "left") {
            displayedImage.classList.add("slide-in-right"); // New image comes in from the right
        } else if (direction === "right") {
            displayedImage.classList.add("slide-in-left"); // New image comes in from the left
        }

        // After slide-in transition, remove the slide-in class to reset
        setTimeout(() => {
            displayedImage.classList.remove("slide-in-right", "slide-in-left");
        }, 500);

        // Remove the transitionend event listener to avoid multiple triggers
        displayedImage.removeEventListener("transitionend", handleTransition);
    });
}

// Handle keyboard events for navigation and closing
function handleKeydown(event) {
    if (event.key === "ArrowRight") {
        nextImage();
    } else if (event.key === "ArrowLeft") {
        prevImage();
    } else if (event.key === "Escape") {
        closelightbox();
    }
}

// Attach click event handlers to buttons
document.querySelector(".close-btn").onclick = closelightbox;
document.querySelector(".next-arrow").onclick = nextImage;
document.querySelector(".prev-arrow").onclick = prevImage;
