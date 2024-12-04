//Toggle Menu
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navBar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Toggle menu open/close
    menuToggle.addEventListener("click", () => {
        navBar.classList.toggle("active");
    });

    // Close menu when clicking a menu item
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navBar.classList.remove("active");
        });
    });

    // Close menu when clicking outside the menu
    document.addEventListener("click", (e) => {
        if (!navBar.contains(e.target) && !menuToggle.contains(e.target)) {
            navBar.classList.remove("active");
        }
    });

    // Close menu when pressing Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            navBar.classList.remove("active");
        }
    });
});

