// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

if (toggle && menu) {
    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}


// TESTIMONIAL AUTO SCROLL (RIGHT → LEFT)
const track = document.querySelector(".testimonial-track");

if (track) {
    let scrollAmount = 0;

    setInterval(() => {
        scrollAmount += 1;
        track.scrollLeft = scrollAmount;

        if (scrollAmount >= track.scrollWidth - track.clientWidth) {
            scrollAmount = 0;
        }
    }, 20);

    // TOUCH CONTROL (STOP ON HOLD)
    track.addEventListener("touchstart", () => clearInterval());
}


// SPIRITUAL TEXT AUTO SCROLL CONTROL
const scrollText = document.querySelector(".scroll-text p");

if (scrollText) {
    scrollText.addEventListener("touchstart", () => {
        scrollText.style.animationPlayState = "paused";
    });

    scrollText.addEventListener("touchend", () => {
        scrollText.style.animationPlayState = "running";
    });
}

