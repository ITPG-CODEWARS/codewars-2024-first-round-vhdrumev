document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const menuContent = document.getElementById("menu-content");
    const contactSection = document.getElementById("contact");

    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("hamburger-active");
        console.log(hamburgerMenu.classList.contains("active"));
        menuContent.classList.toggle("active");
        contactSection.classList.toggle("active");
    });
});