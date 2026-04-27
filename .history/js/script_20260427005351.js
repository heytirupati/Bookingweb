// ============================================================
//  script.js — Sri Balaji Travels
//  Shared utilities + page-specific logic (auto-detected by
//  the presence of key elements in the DOM).
// ============================================================

// ============================================================
//  GOOGLE APPS SCRIPT URL — REPLACE WITH YOUR ACTUAL URL
// ============================================================
const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
// Example: https://script.google.com/macros/s/AKfycbx.../exec


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

    // Dropdown triggers (Locations menu)
    document.querySelectorAll(".nav-trigger").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const li     = btn.closest(".has-dropdown");
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
//  2. HERO IMAGE SLIDER  (carousel)
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
//  3. TESTIMONIAL AUTO-SCROLL
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
//  4. SPIRITUAL TRACK — PAUSE ON HOVER / TOUCH
// ============================================================
(function initSpiritualTrack() {
    const track = document.querySelector(".spiritual-track");
    if (!track) return;

    track.addEventListener("mouseenter", () => track.style.animationPlayState = "paused");
    track.addEventListener("mouseleave", () => track.style.animationPlayState = "running");
    track.addEventListener("touchstart",  () => track.style.animationPlayState = "paused");
    track.addEventListener("touchend",    () => track.style.animationPlayState = "running");
})();


// ============================================================
//  5. PACKAGE CARD TOUCH FLIP  (legacy flip cards)
// ============================================================
(function initCardFlip() {
    document.querySelectorAll(".package-card").forEach(card => {
        let startY = 0;

        card.addEventListener("touchstart", e => { startY = e.touches[0].clientY; });
        card.addEventListener("touchmove",  e => {
            const moveY = e.touches[0].clientY;
            if (startY - moveY > 20) card.classList.add("active");
            if (moveY - startY > 20) card.classList.remove("active");
        });
        card.addEventListener("click", () => card.classList.toggle("active"));
    });
})();


// ============================================================
//  6. INDEX PAGE — POPULAR PACKAGES
//     Renders popular package cards on index.html
// ============================================================
(function initPopularPackages() {
    const container = document.getElementById("popularPackageCards");
    if (!container || typeof PACKAGES === "undefined") return;

    const popular = PACKAGES.filter(p => p.popular);

    container.innerHTML = popular.map(p => `
        <a href="package.html?id=${p.id}" class="pop-pkg-card">
            <div class="pop-pkg-img">
                <img src="${p.image}" alt="${p.name}">
                <span class="pop-pkg-tag ${p.tagClass || ''}">${p.tag}</span>
                <div class="pop-pkg-price">₹${p.price.toLocaleString("en-IN")}</div>
            </div>
            <div class="pop-pkg-body">
                <h3>${p.name}</h3>
                <p>${p.routeShort}</p>
                <ul class="pop-pkg-highlights">
                    ${p.highlights.slice(0, 3).map(h => `<li>${h}</li>`).join("")}
                </ul>
                <span class="pop-pkg-cta">View Details →</span>
            </div>
        </a>
    `).join("");
})();


// ============================================================
//  7. TIRUPATI PAGE — ALL PACKAGES + FILTER + HERO MODAL
//     Runs only when #allPackageCards exists (tirupathi.html)
// ============================================================
(function initTirupatiPage() {
    const container = document.getElementById("allPackageCards");
    if (!container || typeof PACKAGES === "undefined") return;

    // ── Render filtered cards ──────────────────────────────
    function renderCards(filter) {
        const list = filter === "all"
            ? PACKAGES
            : PACKAGES.filter(p => p.category === filter);

        container.innerHTML = list.map(p => `
            <div class="package-full-card ${p.tagClass === "tag-premium" ? "highlight" : ""}">
                <div class="package-top">
                    <img src="${p.image}" alt="${p.name}">
                    <div>
                        <span class="pkg-tag ${p.tagClass || ''}">${p.tag}</span>
                        <h3>${p.name}</h3>
                        <p class="package-desc">${p.routeShort}</p>
                    </div>
                </div>
                <ul>${p.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
                <div class="price-row">
                    <span class="new-price">₹${p.price.toLocaleString("en-IN")}</span>
                    <span class="pkg-duration">${p.duration}</span>
                </div>
                <a href="package.html?id=${p.id}" class="btn btn-primary">View Details</a>
            </div>
        `).join("");
    }

    renderCards("all");

    document.querySelectorAll(".pkg-filter").forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".pkg-filter").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            renderCards(this.dataset.filter);
        });
    });
})();


// ============================================================
//  8. PACKAGE DETAIL PAGE
//     Runs only when #packageDetail exists (package.html)
// ============================================================
(function initPackageDetail() {
    const detail = document.getElementById("packageDetail");
    if (!detail || typeof PACKAGES === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const pkg    = PACKAGES.find(p => p.id === params.get("id"));

    // ── Not found ──────────────────────────────────────────
    if (!pkg) {
        detail.innerHTML = `
            <div class="pkg-error">
                <div class="pkg-error-icon">🛕</div>
                <h2>Package Not Found</h2>
                <p>Please select a valid package.</p>
                <a href="tirupathi.html" class="btn btn-primary">Browse Packages</a>
            </div>
        `;
        return;
    }

    // ── Render full detail ─────────────────────────────────
    detail.innerHTML = `
        <div class="pkg-banner">
            <img src="${pkg.image}" alt="${pkg.name}">
            <div class="pkg-banner-overlay">
                <span class="pkg-banner-tag ${pkg.tagClass || ''}">${pkg.tag}</span>
                <h1>${pkg.name}</h1>
                <div class="pkg-banner-meta">
                    <span>⏱ ${pkg.duration}</span>
                    <span>₹${pkg.price.toLocaleString("en-IN")}</span>
                </div>
            </div>
        </div>

        <div class="pkg-content">
            <div class="pkg-section">
                <h2>Package Details</h2>
                <p class="pkg-route">${pkg.routeShort}</p>
                <div class="pkg-highlights-grid">
                    ${pkg.highlights.map(h => `<div class="pkg-highlight-item">${h}</div>`).join("")}
                </div>
            </div>

            ${pkg.itinerary ? `
            <div class="pkg-section">
                <h2>Itinerary</h2>
                <div class="pkg-itinerary">
                    ${pkg.itinerary.map((day, idx) => `
                        <div class="itinerary-day">
                            <div class="itinerary-day-number">Day ${idx + 1}</div>
                            <div class="itinerary-day-content">
                                ${day.split("\n").map(line => `<p>${line}</p>`).join("")}
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
            ` : ""}

            ${pkg.inclusions ? `
            <div class="pkg-section">
                <h2>What's Included</h2>
                <ul class="pkg-list">
                    ${pkg.inclusions.map(inc => `<li>${inc}</li>`).join("")}
                </ul>
            </div>
            ` : ""}

            ${pkg.exclusions ? `
            <div class="pkg-section">
                <h2>What's Not Included</h2>
                <ul class="pkg-list">
                    ${pkg.exclusions.map(exc => `<li>${exc}</li>`).join("")}
                </ul>
            </div>
            ` : ""}

            <div class="pkg-booking-cta">
                <a href="booking.html?package=${pkg.id}" class="btn btn-primary btn-large">
                    Book This Package →
                </a>
            </div>
        </div>
    `;
})();


// ============================================================
//  9. BOOKING PAGE — FORM LOGIC + VALIDATION + SUBMISSION
// ============================================================
(function initBookingForm() {
    const form = document.getElementById("bookingForm");
    if (!form) return;

    const tripSelect  = document.getElementById("tripSelect");
    const dateInput   = document.getElementById("dateInput");
    const phoneInput  = document.getElementById("phone");
    const submitBtn   = form.querySelector('[type="submit"]');
    const popup       = document.getElementById("successPopup");
    const closeBtn    = document.getElementById("closePopup");

    if (!tripSelect || typeof PACKAGES === "undefined") return;

    // ── Build package dropdown with categories ─────────────
    const categories = [...new Set(PACKAGES.map(p => p.category))];
    
    categories.forEach(cat => {
        const pkgList = PACKAGES.filter(p => p.category === cat);
        
        const optgroup = document.createElement("optgroup");
        optgroup.label = cat.charAt(0).toUpperCase() + cat.slice(1) + " Packages";
        
        pkgList.forEach(p => {
            const opt = document.createElement("option");
            opt.value       = p.id;
            opt.textContent = p.name + " — ₹" + p.price.toLocaleString("en-IN");
            optgroup.appendChild(opt);
        });
        tripSelect.appendChild(optgroup);
    });

    // ── Pre-select package from URL ────────────────────────
    const pkgId = new URLSearchParams(window.location.search).get("package");
    if (pkgId) {
        const foundPkg = PACKAGES.find(p => p.id === pkgId);
        if (foundPkg) {
            tripSelect.value = pkgId;

            const banner = document.getElementById("selectedPkgBanner");
            if (banner) {
                banner.style.display = "block";
                banner.innerHTML = `
                    <div class="pkg-banner-inner">
                        <span class="pkg-banner-tag ${foundPkg.tagClass || ''}">${foundPkg.tag}</span>
                        <div class="pkg-banner-name">${foundPkg.name}</div>
                        <div class="pkg-banner-meta">
                            <span>⏱ ${foundPkg.duration}</span>
                            <span>₹${foundPkg.price.toLocaleString("en-IN")}</span>
                        </div>
                        <p class="pkg-banner-route">${foundPkg.routeShort}</p>
                    </div>
                `;
            }
        }
    }

    // ── Minimum date = today ───────────────────────────────
    if (dateInput) {
        dateInput.setAttribute("min", new Date().toISOString().split("T")[0]);
    }

    // ── Scroll form into view on load ─────────────────────
    window.addEventListener("load", () => {
        document.getElementById("formStart")?.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    // ── Helper: Show error message below field ─────────────
    function showError(field, message) {
        clearError(field);
        field.classList.add("error");
        const errorSpan = document.createElement("span");
        errorSpan.className = "error-text";
        errorSpan.textContent = message;
        field.parentElement.appendChild(errorSpan);
    }

    function clearError(field) {
        field.classList.remove("error");
        const existingError = field.parentElement.querySelector(".error-text");
        if (existingError) existingError.remove();
    }

    // ── Phone validation on input ──────────────────────────
    phoneInput?.addEventListener("input", function() {
        // Remove non-digit characters
        this.value = this.value.replace(/\D/g, "");
        
        // Limit to 10 digits
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }

        // Clear error while typing
        clearError(this);
    });

    // ── Phone validation on blur ───────────────────────────
    phoneInput?.addEventListener("blur", function() {
        const phone = this.value.trim();
        
        if (phone.length === 0) {
            clearError(this);
            return;
        }

        if (phone.length < 10) {
            showError(this, "Please enter 10 digits");
        } else if (!/^[6-9]/.test(phone)) {
            showError(this, "start with 6, 7, 8, or 9");
        } else {
            clearError(this);
        }
    });

    // ── Clear error on focus ───────────────────────────────
    document.querySelectorAll("input, select, textarea").forEach(field => {
        field.addEventListener("focus", function() {
            clearError(this);
            this.style.borderColor = "#d4af37";
            this.style.boxShadow = "0 0 0 2px rgba(212,175,55,0.15)";
        });

        field.addEventListener("blur", function() {
            if (!this.classList.contains("error")) {
                this.style.borderColor = "#ddd";
                this.style.boxShadow = "none";
            }
        });
    });

    // ── Form submission ────────────────────────────────────
    let isSubmitting = false;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Prevent double submission
        if (isSubmitting) return;

        // Clear all previous errors
        document.querySelectorAll(".error-text").forEach(err => err.remove());
        document.querySelectorAll(".error").forEach(field => field.classList.remove("error"));

        // Validate phone number
        const phone = phoneInput.value.trim();
        if (phone.length === 0) {
            showError(phoneInput, "Mobile number is required");
            phoneInput.focus();
            return;
        }
        if (phone.length !== 10) {
            showError(phoneInput, "Please enter exactly 10 digits");
            phoneInput.focus();
            return;
        }
        if (!/^[6-9]\d{9}$/.test(phone)) {
            showError(phoneInput, "Invalid mobile number. Must start with 6-9");
            phoneInput.focus();
            return;
        }

        // Validate other required fields
        const nameField = form.querySelector('[name="name"]');
        if (!nameField.value.trim()) {
            showError(nameField, "Name is required");
            nameField.focus();
            return;
        }

        const tripField = form.querySelector('[name="trip"]');
        if (!tripField.value) {
            showError(tripField, "Please select a package");
            tripField.focus();
            return;
        }

        const dateField = form.querySelector('[name="date"]');
        if (!dateField.value) {
            showError(dateField, "Please select a date");
            dateField.focus();
            return;
        }

        const peopleField = form.querySelector('[name="people"]');
        if (!peopleField.value) {
            showError(peopleField, "Please select number of people");
            peopleField.focus();
            return;
        }

        const pickupField = form.querySelector('[name="pickup"]');
        if (!pickupField.value.trim()) {
            showError(pickupField, "Pickup location is required");
            pickupField.focus();
            return;
        }

        const vehicleField = form.querySelector('[name="vehicle"]');
        if (!vehicleField.value) {
            showError(vehicleField, "Please select a vehicle type");
            vehicleField.focus();
            return;
        }

        // All validations passed - submit form
        isSubmitting = true;
        submitBtn.disabled = true;
        submitBtn.innerText = "Processing...";
        submitBtn.style.opacity = "0.6";
        submitBtn.style.cursor = "not-allowed";

        // Prepare form data
        const formData = new FormData(form);
        const params = new URLSearchParams(formData);

        // Submit to Google Apps Script
        fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            body: params
        })
        .then(() => {
            // Success - show popup
            if (popup) popup.style.display = "block";
            form.reset();
            isSubmitting = false;
        })
        .catch((error) => {
            // Error handling
            console.error("Submission error:", error);
            alert("There was an error submitting your booking. Please try again or contact us directly.");
            isSubmitting = false;
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = "Confirm Booking";
            submitBtn.style.opacity = "1";
            submitBtn.style.cursor = "pointer";
        });
    });

    // ── Close popup → go home ──────────────────────────────
    closeBtn?.addEventListener("click", () => {
        window.location.href = "index.html";
    });
})();