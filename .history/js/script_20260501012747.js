// ============================================================
//  script.js — Sri Balaji Travels
//  Shared utilities + page-specific logic (auto-detected by
//  the presence of key elements in the DOM).
//  NOW INCLUDES: Spiritual Journey & Customer Reviews rendering
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
//  3. TESTIMONIAL AUTO-SCROLL (Legacy - now replaced by dynamic)
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

    container.innerHTML = popular.map(p => {
        const markedPrice = Math.round(p.price * 1.49);
        return `
        <a href="package.html?id=${p.id}" class="pop-pkg-card">
            <div class="pop-pkg-img">
                <img src="${p.image}" alt="${p.name}">
                <span class="pop-pkg-tag ${p.tagClass || ''}">${p.tag}</span>
                <div class="pop-pkg-price-wrapper">
                    <div class="pop-pkg-price-strike">₹${markedPrice.toLocaleString("en-IN")}</div>
                    <div class="pop-pkg-price">₹${p.price.toLocaleString("en-IN")}</div>
                </div>
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
        `;
    }).join("");
})();


// ============================================================
//  7. SPIRITUAL JOURNEY — DYNAMIC RENDERING
//     Renders spiritual journey items from content-data.js
// ============================================================
(function initSpiritualJourney() {
    const track = document.querySelector(".spiritual-track");
    if (!track || typeof SPIRITUAL_JOURNEY === "undefined") return;

    // Duplicate items for seamless infinite scroll
    const items = [...SPIRITUAL_JOURNEY, ...SPIRITUAL_JOURNEY];

    track.innerHTML = items.map(journey => `
        <div class="spiritual-item">
            <div class="spiritual-image">
                <img src="${journey.image}" alt="${journey.title}" loading="lazy">
            </div>
            <div class="spiritual-content">
                <h3>${journey.title}</h3>
                <p>${journey.description}</p>
            </div>
        </div>
    `).join("");
})();


// ============================================================
//  8. CUSTOMER REVIEWS — DYNAMIC RENDERING
//     Renders customer testimonials from content-data.js
// ============================================================
(function initCustomerReviews() {
    const track = document.querySelector(".testimonial-track");
    if (!track || typeof CUSTOMER_REVIEWS === "undefined") return;

    // Duplicate reviews for seamless infinite scroll
    const reviews = [...CUSTOMER_REVIEWS, ...CUSTOMER_REVIEWS];

    track.innerHTML = reviews.map(review => `
        <div class="testimonial-card">
            <p>"${review.text}"</p>
            <h4>${review.name}</h4>
            <span>${review.location} · ${generateStarRating(review.rating)}</span>
        </div>
    `).join("");
})();


// ============================================================
//  9. TIRUPATI PAGE — ALL PACKAGES + FILTER + HERO MODAL
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

        container.innerHTML = list.map(p => {
            const markedPrice = Math.round(p.price * 1.49);
            return `
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
                    <div class="price-box">
                        <span class="old-price">₹${markedPrice.toLocaleString("en-IN")}</span>
                        <span class="new-price">₹${p.price.toLocaleString("en-IN")}</span>
                        <span class="save-badge">${Math.round(((markedPrice - p.price) / markedPrice) * 100)}% OFF</span>
                    </div>
                    <span class="pkg-duration">${p.duration}</span>
                </div>
                <a href="package.html?id=${p.id}" class="btn btn-primary">View Details</a>
            </div>
            `;
        }).join("");
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
//  10. PACKAGE DETAIL PAGE
//      Runs only when #packageDetail exists (package.html)
// ============================================================
(function initPackageDetail() {
    const detailSection = document.getElementById("packageDetail");
    if (!detailSection || typeof PACKAGES === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const id     = params.get("id");
    const pkg    = PACKAGES.find(p => p.id === id);

    if (!pkg) {
        detailSection.innerHTML = `
            <div class="container" style="text-align:center; padding:100px 0;">
                <h2>Package Not Found</h2>
                <p>Sorry, we couldn't find the package you're looking for.</p>
                <a href="tirupathi.html" class="btn btn-primary" style="margin-top:20px;">Browse All Packages</a>
            </div>
        `;
        return;
    }

    const markedPrice = Math.round(pkg.price * 1.49);

    detailSection.innerHTML = `
        <div class="container package-detail-container">
            <div class="package-detail-left">
                <div class="detail-hero-img">
                    <img src="${pkg.image}" alt="${pkg.name}">
                    <span class="detail-tag ${pkg.tagClass || ''}">${pkg.tag}</span>
                </div>
            </div>

            <div class="package-detail-right">
                <h1 class="detail-title">${pkg.name}</h1>
                <p class="detail-route">${pkg.routeShort}</p>

                <div class="detail-price-box">
                    <div class="detail-price-row">
                        <span class="detail-old-price">₹${markedPrice.toLocaleString("en-IN")}</span>
                        <span class="detail-new-price">₹${pkg.price.toLocaleString("en-IN")}</span>
                    </div>
                    <span class="detail-save-badge">${Math.round(((markedPrice - pkg.price) / markedPrice) * 100)}% OFF</span>
                    <span class="detail-duration">⏱ ${pkg.duration}</span>
                </div>

                <div class="detail-section">
                    <h3>About This Package</h3>
                    <p>${pkg.description}</p>
                    ${pkg.note ? `<p class="detail-note"><strong>Note:</strong> ${pkg.note}</p>` : ''}
                </div>

                <div class="detail-section">
                    <h3>Highlights</h3>
                    <ul class="detail-highlights">
                        ${pkg.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>

                <div class="detail-section">
                    <h3>Route</h3>
                    <div class="detail-route-path">
                        ${pkg.routeFull.map((stop, i) => `
                            <span class="route-stop">${stop}</span>
                            ${i < pkg.routeFull.length - 1 ? '<span class="route-arrow">→</span>' : ''}
                        `).join('')}
                    </div>
                </div>

                ${pkg.templeFlow && pkg.templeFlow.length > 0 ? `
                    <div class="detail-section">
                        <h3>Your Sacred Journey</h3>
                        <div class="temple-flow">
                            ${pkg.templeFlow.map(step => `
                                <div class="flow-step">
                                    <div class="flow-icon">${step.icon}</div>
                                    <div class="flow-content">
                                        <h4>${step.name}</h4>
                                        <p>${step.desc}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <div class="detail-section">
                    <div class="detail-inclusions">
                        <div class="inclusion-col">
                            <h4>✅ Includes</h4>
                            <ul>
                                ${pkg.includes.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="inclusion-col">
                            <h4>❌ Excludes</h4>
                            <ul>
                                ${pkg.excludes.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="detail-cta">
                    <a href="booking.html?package=${pkg.id}" class="btn btn-primary btn-large">
                        Book This Package →
                    </a>
                    <a href="tirupathi.html" class="btn btn-secondary">
                        ← Browse More
                    </a>
                </div>
            </div>
        </div>
    `;
})();


// ============================================================
//  11. BOOKING PAGE — FORM LOGIC
//      Runs only when #bookingForm exists (booking.html)
// ============================================================
(function initBookingForm() {
    const form      = document.getElementById("bookingForm");
    const popup     = document.getElementById("successPopup");
    const closeBtn  = document.getElementById("closePopup");
    const submitBtn = form?.querySelector(".btn-book");
    const phoneInput = form?.querySelector('input[name="phone"]');
    const tripSelect = form?.querySelector('select[name="trip"]');
    const dateInput  = form?.querySelector('input[name="date"]');

    if (!form || typeof PACKAGES === "undefined") return;

    // Google Apps Script URL for form submission
    const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

    // ── Populate trip select grouped by category ──────────
    const categories = {
        "Tirumala Darshan": PACKAGES.filter(p => p.category === "tirumala"),
        "Tirupati Temples": PACKAGES.filter(p => p.category === "tirupati"),
        "Outstation Trips": PACKAGES.filter(p => p.category === "outstation"),
        "One-Day Routes": PACKAGES.filter(p => p.category === "one-day"),
        "Multi-Day Packages": PACKAGES.filter(p => p.category === "multi-day"),
        "Transfers": PACKAGES.filter(p => p.category === "transfer")
    };

    Object.entries(categories).forEach(([label, pkgs]) => {
        if (pkgs.length === 0) return;

        const optgroup = document.createElement("optgroup");
        optgroup.label = label;

        pkgs.forEach(p => {
            const opt = document.createElement("option");
            opt.value = p.id;
            opt.textContent = `${p.name} — ₹${p.price.toLocaleString("en-IN")} (${p.duration})`;
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
            return;
        }
        if (phone.length !== 10) {
            showError(phoneInput, "Please enter exactly 10 digits");
            return;
        }
        if (!/^[6-9]\d{9}$/.test(phone)) {
            showError(phoneInput, "Invalid mobile number. Must start with 6-9");
            return;
        }

        // Validate other required fields
        const nameField = form.querySelector('[name="name"]');
        if (!nameField.value.trim()) {
            showError(nameField, "Name is required");
            return;
        }

        const tripField = form.querySelector('[name="trip"]');
        if (!tripField.value) {
            showError(tripField, "Please select a package");
            return;
        }

        const dateField = form.querySelector('[name="date"]');
        if (!dateField.value) {
            showError(dateField, "Please select a date");
            return;
        }

        const peopleField = form.querySelector('[name="people"]');
        if (!peopleField.value) {
            showError(peopleField, "Please select number of people");
            return;
        }

        const pickupField = form.querySelector('[name="pickup"]');
        if (!pickupField.value.trim()) {
            showError(pickupField, "Pickup location is required");
            return;
        }

        const vehicleField = form.querySelector('[name="vehicle"]');
        if (!vehicleField.value) {
            showError(vehicleField, "Please select a vehicle type");
            return;
        }

        // All validations passed - submit form
        isSubmitting = true;
        submitBtn.disabled = true;
        submitBtn.innerText = "Processing...";
        submitBtn.style.opacity = "0.6";
        submitBtn.style.cursor = "not-allowed";

        // ✅ URLSearchParams so Apps Script e.postData.contents can parse correctly
        const params = new URLSearchParams(new FormData(form));
        fetch(SCRIPT_URL, { method: "POST", body: params })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    if (popup) popup.style.display = "block";
                    form.reset();
                } else {
                    showError(submitBtn, "Submission failed: " + (data.message || "Unknown error"));
                }
                isSubmitting = false;
            })
            .catch(() => {
                showError(submitBtn, "Something went wrong. Please try again!");
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