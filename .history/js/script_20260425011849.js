// ================================
// MOBILE MENU TOGGLE
// ================================
const menuToggle = document.querySelector(".menu-toggle");
const navMenu    = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(link =>
        link.addEventListener("click", () => navMenu.classList.remove("active"))
    );
}

// ================================
// DROPDOWN (LOCATIONS FIX - MOBILE SAFE)
// ================================
const triggers = document.querySelectorAll(".nav-trigger");

triggers.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.stopPropagation();

        const li = this.closest(".has-dropdown");
        const isOpen = li.classList.contains("open");

        // close all
        document.querySelectorAll(".has-dropdown").forEach(el => el.classList.remove("open"));

        // open current if not already open
        if (!isOpen) li.classList.add("open");
    });
});

// close dropdown when clicking outside
document.addEventListener("click", () => {
    document.querySelectorAll(".has-dropdown").forEach(el => el.classList.remove("open"));
});

// ================================
// TESTIMONIAL AUTO-SCROLL
// ================================
const testimonialTrack = document.querySelector(".testimonial-track");

if (testimonialTrack) {
    let scrollAmount = 0;
    const ticker = setInterval(() => {
        scrollAmount += 1;
        testimonialTrack.scrollLeft = scrollAmount;

        if (scrollAmount >= testimonialTrack.scrollWidth - testimonialTrack.clientWidth) {
            scrollAmount = 0;
        }
    }, 20);

    testimonialTrack.addEventListener("touchstart", () => clearInterval(ticker));
}

// ================================
// SPIRITUAL TRACK PAUSE
// ================================
const spiritualTrack = document.querySelector(".spiritual-track");

if (spiritualTrack) {
    spiritualTrack.addEventListener("mouseenter", () => spiritualTrack.style.animationPlayState = "paused");
    spiritualTrack.addEventListener("mouseleave", () => spiritualTrack.style.animationPlayState = "running");
    spiritualTrack.addEventListener("touchstart", () => spiritualTrack.style.animationPlayState = "paused");
    spiritualTrack.addEventListener("touchend", () => spiritualTrack.style.animationPlayState = "running");
}

// ================================
// PACKAGE CARD TOUCH FLIP
// ================================
document.querySelectorAll(".package-card").forEach(card => {
    let startY = 0;

    card.addEventListener("touchstart", e => { startY = e.touches[0].clientY; });

    card.addEventListener("touchmove", e => {
        const moveY = e.touches[0].clientY;

        if (startY - moveY > 20) card.classList.add("active");
        if (moveY - startY > 20) card.classList.remove("active");
    });

    card.addEventListener("click", () => card.classList.toggle("active"));
});

// ================================
// HERO IMAGE SLIDER
// ================================
const slides = document.querySelectorAll(".carousel img");

if (slides.length) {
    let index = 0;

    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 3000);
}