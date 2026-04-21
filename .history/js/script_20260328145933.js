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

const packageCards = document.querySelectorAll(".package-card");

packageCards.forEach(card => {
    let startY = 0;

    // TOUCH START
    card.addEventListener("touchstart", (e) => {
        startY = e.touches[0].clientY;
    });

    // TOUCH MOVE (SCROLL UP → SHOW BACK)
    card.addEventListener("touchmove", (e) => {
        let moveY = e.touches[0].clientY;

        if (startY - moveY > 20) {
            card.classList.add("active"); // show back
        }

        if (moveY - startY > 20) {
            card.classList.remove("active"); // show front
        }
    });

    // TAP TO TOGGLE
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });

});

const spiritualTrack = document.querySelector(".spiritual-track");

spiritualTrack.addEventListener("mouseenter", () => {
    spiritualTrack.style.animationPlayState = "paused";
});

spiritualTrack.addEventListener("mouseleave", () => {
    spiritualTrack.style.animationPlayState = "running";
});

spiritualTrack.addEventListener("touchstart", () => {
    spiritualTrack.style.animationPlayState = "paused";
});

spiritualTrack.addEventListener("touchend", () => {
    spiritualTrack.style.animationPlayState = "running";
});

// HERO IMAGE SLIDER
const slides = document.querySelectorAll(".carousel img");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3000);