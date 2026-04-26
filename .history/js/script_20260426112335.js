// ============================================================
//  script.js — Sri Balaji Travels (UPDATED)
// ============================================================


// ============================================================
//  1. MOBILE MENU TOGGLE
// ============================================================
(function initNavbar() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu    = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.toggle("active");
            menuToggle.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
        });

        navMenu.querySelectorAll("a").forEach(link =>
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.textContent = "☰";
            })
        );
    }

    document.querySelectorAll(".nav-trigger").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const li = btn.closest(".has-dropdown");
            const isOpen = li.classList.contains("open");

            document.querySelectorAll(".has-dropdown").forEach(el => el.classList.remove("open"));
            if (!isOpen) li.classList.add("open");
        });
    });

    document.addEventListener("click", () => {
        document.querySelectorAll(".has-dropdown").forEach(el => el.classList.remove("open"));
    });
})();


// ============================================================
//  2. HERO SLIDER
// ============================================================
(function initCarousel() {
    const slides = document.querySelectorAll(".carousel img");
    if (!slides.length) return;

    let index = 0;
    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 3000);
})();


// ============================================================
//  3. TESTIMONIAL SCROLL
// ============================================================
(function initTestimonialScroll() {
    const track = document.querySelector(".testimonial-track");
    if (!track) return;

    let scrollAmount = 0;
    const ticker = setInterval(() => {
        scrollAmount += 1;
        track.scrollLeft = scrollAmount;

        if (scrollAmount >= track.scrollWidth - track.clientWidth) {
            scrollAmount = 0;
        }
    }, 20);

    track.addEventListener("touchstart", () => clearInterval(ticker));
})();


// ============================================================
//  4. SPIRITUAL TRACK
// ============================================================
(function initSpiritualTrack() {
    const track = document.querySelector(".spiritual-track");
    if (!track) return;

    track.addEventListener("mouseenter", () => track.style.animationPlayState = "paused");
    track.addEventListener("mouseleave", () => track.style.animationPlayState = "running");
    track.addEventListener("touchstart", () => track.style.animationPlayState = "paused");
    track.addEventListener("touchend", () => track.style.animationPlayState = "running");
})();


// ============================================================
//  5. CARD FLIP
// ============================================================
(function initCardFlip() {
    document.querySelectorAll(".package-card").forEach(card => {
        let startY = 0;

        card.addEventListener("touchstart", e => startY = e.touches[0].clientY);

        card.addEventListener("touchmove", e => {
            const moveY = e.touches[0].clientY;
            if (startY - moveY > 20) card.classList.add("active");
            if (moveY - startY > 20) card.classList.remove("active");
        });

        card.addEventListener("click", () => card.classList.toggle("active"));
    });
})();


// ============================================================
//  9. BOOKING PAGE (FULLY FIXED)
// ============================================================
(function initBookingPage() {
    const form = document.getElementById("bookingForm");
    if (!form || typeof PACKAGES === "undefined") return;

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwK2iJHY3h7BSFlUR7wPW-Q8FFdgwA5g7lLYM417QIYtT8BIEzMPImFFo4-PKAhUFvR/exec";

    const tripSelect = document.getElementById("tripSelect");
    const designBtn  = document.getElementById("designTripBtn");
    const customArea = document.getElementById("customTripArea");
    const checkboxes = document.querySelectorAll(".dest-checkbox");

    const phoneInput = document.getElementById("phone");
    const dateInput  = document.getElementById("dateInput");

    const popup     = document.getElementById("successPopup");
    const closeBtn  = document.getElementById("closePopup");
    const submitBtn = document.querySelector(".btn-book");

    let isSubmitting = false;

    // =============================
    // DATE LIMIT
    // =============================
    dateInput.min = new Date().toISOString().split("T")[0];

    // =============================
    // PACKAGE DROPDOWN BUILD
    // =============================
    const grouped = {};
    PACKAGES.forEach(p => {
        if (!grouped[p.category]) grouped[p.category] = [];
        grouped[p.category].push(p);
    });

    Object.keys(grouped).forEach(cat => {
        const optgroup = document.createElement("optgroup");
        optgroup.label = cat.toUpperCase();

        grouped[cat].forEach(p => {
            const opt = document.createElement("option");
            opt.value = p.id;
            opt.textContent = `${p.name} — ₹${p.price}`;
            optgroup.appendChild(opt);
        });

        tripSelect.appendChild(optgroup);
    });

    // =============================
    // DESIGN TRIP TOGGLE
    // =============================
    designBtn.addEventListener("click", () => {
        customArea.classList.toggle("active");

        if (customArea.classList.contains("active")) {
            tripSelect.value = "";
        }
    });

    // =============================
    // PACKAGE SELECT
    // =============================
    tripSelect.addEventListener("change", () => {
        if (tripSelect.value) {
            customArea.classList.remove("active");
            checkboxes.forEach(cb => cb.checked = false);
        }
    });

    // =============================
    // CHECKBOX SELECT
    // =============================
    checkboxes.forEach(cb => {
        cb.addEventListener("change", () => {
            if (cb.checked) tripSelect.value = "";
        });
    });

    // =============================
    // PHONE VALIDATION
    // =============================
    phoneInput.addEventListener("input", () => {
        phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 10);

        if (/^[6-9]\d{9}$/.test(phoneInput.value)) {
            phoneInput.style.borderColor = "green";
        } else {
            phoneInput.style.borderColor = "red";
        }
    });

    // =============================
    // FORM SUBMIT (FIXED)
    // =============================
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (isSubmitting) return; // 🔥 prevent multiple clicks
        isSubmitting = true;

        const phone = phoneInput.value.trim();
        const pkg   = tripSelect.value;

        const selectedDest = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        // ❌ validation
        if (!pkg && selectedDest.length === 0) {
            alert("Please select Package OR Design Your Trip");
            isSubmitting = false;
            return;
        }

        if (pkg && selectedDest.length > 0) {
            alert("Choose either Package OR Custom Trip");
            isSubmitting = false;
            return;
        }

        if (!/^[6-9]\d{9}$/.test(phone)) {
            alert("Invalid phone number");
            phoneInput.focus();
            isSubmitting = false;
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerText = "Processing...";

        // attach custom trip
        if (selectedDest.length > 0) {
            const hidden = document.createElement("input");
            hidden.type = "hidden";
            hidden.name = "customTrip";
            hidden.value = selectedDest.join(", ");
            form.appendChild(hidden);
        }

        fetch(SCRIPT_URL, {
            method: "POST",
            body: new FormData(form)
        })
        .then(() => {
            popup.style.display = "flex";
            form.reset();
            customArea.classList.remove("active");

            submitBtn.disabled = false;
            submitBtn.innerText = "Confirm Booking";
            isSubmitting = false;
        })
        .catch(() => {
            alert("Something went wrong");
            submitBtn.disabled = false;
            submitBtn.innerText = "Confirm Booking";
            isSubmitting = false;
        });
    });

    // =============================
    // CLOSE POPUP
    // =============================
    closeBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });

})();