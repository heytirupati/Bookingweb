// ============================================================
//  script.js — Sri Balaji Travels
//  Shared utilities + page-specific logic (auto-detected by
//  the presence of key elements in the DOM).
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

    // ── Hero "Book Now" modal (Tirupati/Tirumala packages only) ──
    const TIRUPATI_CATS = ["tirumala", "tirupati"];
    const modal      = document.getElementById("pkgModal");
    const modalList  = document.getElementById("pkgModalList");
    const closeModal = document.getElementById("pkgModalClose");
    const heroBtn    = document.getElementById("heroBookBtn");

    if (modal && modalList && heroBtn) {
        heroBtn.addEventListener("click", () => {
            modal.style.display = "flex";

            const tirupatiPackages = PACKAGES.filter(p => TIRUPATI_CATS.includes(p.category));

            modalList.innerHTML = tirupatiPackages.map(p => `
                <div class="modal-pkg-card">
                    <img src="${p.image}" alt="${p.name}">
                    <div class="modal-pkg-details">
                        <h3>${p.name}</h3>
                        <p>${p.routeShort}</p>
                        <span class="modal-pkg-price">₹${p.price.toLocaleString("en-IN")}</span>
                    </div>
                    <a href="booking.html?package=${p.id}" class="modal-pkg-btn">Book</a>
                </div>
            `).join("");
        });

        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

        modal.addEventListener("click", e => {
            if (e.target === modal) modal.style.display = "none";
        });
    }
})();


// ============================================================
//  8. PACKAGE DETAIL PAGE
//     Runs only when #packageDetail exists (package.html)
// ============================================================
(function initPackageDetailPage() {
    const container = document.getElementById("packageDetail");
    if (!container || typeof PACKAGES === "undefined") return;

    const pkgId = new URLSearchParams(window.location.search).get("id");
    const pkg   = PACKAGES.find(p => p.id === pkgId);

    if (!pkg) {
        container.innerHTML = `
            <div class="error-box">
                <h2>Package Not Found</h2>
                <a href="tirupathi.html" class="btn btn-primary">View All Packages</a>
            </div>
        `;
        return;
    }

    // ── Build includes / excludes HTML ─────────────────────
    const includesHTML = (pkg.includes || []).map(item => `<li>✓ ${item}</li>`).join("");
    const excludesHTML = (pkg.excludes || []).map(item => `<li>✗ ${item}</li>`).join("");

    container.innerHTML = `
        <div class="pkg-layout">
            <div class="pkg-left">
                <div class="pkg-hero-img">
                    <img src="${pkg.image}" alt="${pkg.name}">
                    ${pkg.tag ? `<span class="pkg-hero-tag ${pkg.tagClass || ''}">${pkg.tag}</span>` : ""}
                </div>

                <div class="pkg-info-section">
                    <h1 class="pkg-title">${pkg.name}</h1>
                    <p class="pkg-route">${pkg.route || pkg.routeShort}</p>

                    <div class="pkg-highlights">
                        <h2 class="pkg-section-title">Package Highlights</h2>
                        <ul>${pkg.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
                    </div>

                    ${pkg.itinerary ? `
                        <div class="pkg-itinerary">
                            <h2 class="pkg-section-title">Itinerary</h2>
                            ${pkg.itinerary}
                        </div>
                    ` : ""}
                </div>

                <div class="pkg-inc-exc">
                    <div class="pkg-inc">
                        <h2 class="pkg-section-title">Included</h2>
                        <ul>${includesHTML}</ul>
                    </div>
                    <div class="pkg-exc">
                        <h2 class="pkg-section-title">Not Included</h2>
                        <ul>${excludesHTML}</ul>
                    </div>
                </div>
            </div>

            <div class="pkg-right">
                <div class="pkg-book-card">
                    <div class="pkg-price-block">
                        <span class="pkg-price-label">Starting from</span>
                        <span class="pkg-price-value">₹${pkg.price.toLocaleString("en-IN")}</span>
                        <span class="pkg-price-sub">${pkg.duration}</span>
                    </div>
                    <a href="booking.html?package=${pkg.id}" class="btn-book-pkg">🛕 Book Now</a>
                    <a href="https://wa.me/919876543210" class="btn-whatsapp-pkg" target="_blank">
                        💬 Ask on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    `;

    // ── Related packages ───────────────────────────────────
    const related = PACKAGES
        .filter(p => p.id !== pkg.id)
        .sort((a, b) => (b.popular === true) - (a.popular === true))
        .slice(0, 6);

    if (related.length) {
        const relatedSection = document.getElementById("relatedSection");
        const relatedCards   = document.getElementById("relatedCards");

        if (relatedSection) relatedSection.style.display = "block";

        if (relatedCards) {
            relatedCards.innerHTML = related.map(p => `
                <a href="package.html?id=${p.id}" class="related-card">
                    <div class="related-img-wrap">
                        <img src="${p.image}" alt="${p.name}">
                        ${p.tag ? `<span class="related-tag ${p.tagClass || ''}">${p.tag}</span>` : ""}
                    </div>
                    <div class="related-body">
                        <h3>${p.name}</h3>
                        <p>${p.routeShort}</p>
                        <div class="related-footer">
                            <span class="related-price">₹${p.price.toLocaleString("en-IN")}</span>
                            <span class="related-btn btn btn-outline">View</span>
                        </div>
                    </div>
                </a>
            `).join("");
        }
    }
})();


// ============================================================
//  9. BOOKING PAGE
//     Runs only when #bookingForm exists (booking.html)
// ============================================================
(function initBookingPage() {
    const form = document.getElementById("bookingForm");
    if (!form || typeof PACKAGES === "undefined") return;

    const SCRIPT_URL      = "https://script.google.com/macros/s/AKfycbwK2iJHY3h7BSFlUR7wPW-Q8FFdgwA5g7lLYM417QIYtT8BIEzMPImFFo4-PKAhUFvR/exec";
    const tripSelect      = document.getElementById("tripSelect");
    const customTripArea  = document.getElementById("customTripArea");
    const designTripBtn   = document.getElementById("designTripBtn");
    const destinationGrid = document.getElementById("destinationGrid");
    const selectedCount   = document.getElementById("selectedCount");
    const dateInput       = document.getElementById("dateInput");
    const phoneInput      = document.getElementById("phone");
    const pickupInput     = document.getElementById("pickup");
    const vehicleSelect   = document.getElementById("vehicleType");
    const popup           = document.getElementById("successPopup");
    const closeBtn        = document.getElementById("closePopup");
    const submitBtn       = document.querySelector(".btn-book");

    let customDestinations = [];
    let bookingMode = "package"; // "package" or "custom"

    // ── Build package dropdown ─────────────────────────────
    const CATEGORY_LABELS = {
        tirumala:    "— Tirumala Darshan —",
        tirupati:    "— Tirupati Temples —",
        outstation:  "— Outstation —",
        "one-day":   "— One-Day Routes —",
        "multi-day": "— Multi-Day —",
        transfer:    "— Transfers —"
    };

    const grouped = {};
    PACKAGES.forEach(p => {
        if (!grouped[p.category]) grouped[p.category] = [];
        grouped[p.category].push(p);
    });

    Object.entries(CATEGORY_LABELS).forEach(([cat, label]) => {
        if (!grouped[cat]) return;
        const optgroup = document.createElement("optgroup");
        optgroup.label = label;
        grouped[cat].forEach(p => {
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
            bookingMode = "package";

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

    // ── "Design Your Trip" toggle logic ────────────────────
    if (designTripBtn) {
        designTripBtn.addEventListener("click", () => {
            if (customTripArea.style.display === "block") {
                // Hide custom trip
                customTripArea.style.display = "none";
                designTripBtn.textContent = "🗺️ Design Your Own Trip";
                designTripBtn.classList.remove("active");
                bookingMode = "package";
                tripSelect.disabled = false;
                tripSelect.value = "";
                
                // Clear selected destinations
                customDestinations = [];
                updateDestinationUI();
            } else {
                // Show custom trip
                customTripArea.style.display = "block";
                designTripBtn.textContent = "✕ Use Package Instead";
                designTripBtn.classList.add("active");
                bookingMode = "custom";
                tripSelect.value = "";
                tripSelect.disabled = true;
                
                const banner = document.getElementById("selectedPkgBanner");
                if (banner) banner.style.display = "none";
            }
        });
    }

    // ── Package selection clears custom trip ───────────────
    if (tripSelect) {
        tripSelect.addEventListener("change", () => {
            if (tripSelect.value) {
                bookingMode = "package";
                customTripArea.style.display = "none";
                designTripBtn.textContent = "🗺️ Design Your Own Trip";
                designTripBtn.classList.remove("active");
                customDestinations = [];
                updateDestinationUI();
            }
        });
    }

    // ── Destination checkbox logic ─────────────────────────
    function updateDestinationUI() {
        document.querySelectorAll(".dest-checkbox").forEach(cb => {
            cb.checked = customDestinations.includes(cb.value);
        });
        selectedCount.textContent = `${customDestinations.length} selected`;
    }

    if (destinationGrid) {
        destinationGrid.addEventListener("change", (e) => {
            if (e.target.classList.contains("dest-checkbox")) {
                const value = e.target.value;
                if (e.target.checked) {
                    if (!customDestinations.includes(value)) {
                        customDestinations.push(value);
                    }
                } else {
                    customDestinations = customDestinations.filter(d => d !== value);
                }
                updateDestinationUI();
            }
        });
    }

    // ── Enhanced Validation ────────────────────────────────
    function validateForm() {
        const errors = [];
        
        // Name validation
        const name = document.getElementById("name").value.trim();
        if (!name) {
            errors.push("Name is required");
            showFieldError("name", "Please enter your name");
        } else if (name.length < 2) {
            errors.push("Name must be at least 2 characters");
            showFieldError("name", "Name must be at least 2 characters");
        } else {
            clearFieldError("name");
        }

        // Phone validation
        const phone = phoneInput.value.trim();
        if (!phone) {
            errors.push("Phone number is required");
            showFieldError("phone", "Please enter your phone number");
        } else if (!/^[6-9]\d{9}$/.test(phone)) {
            errors.push("Invalid phone number");
            showFieldError("phone", "Enter valid 10-digit mobile number (starts with 6-9)");
        } else {
            clearFieldError("phone");
        }

        // Email validation
        const email = document.getElementById("email").value.trim();
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.push("Invalid email format");
            showFieldError("email", "Please enter a valid email address");
        } else {
            clearFieldError("email");
        }

        // Date validation
        const date = dateInput.value;
        if (!date) {
            errors.push("Travel date is required");
            showFieldError("dateInput", "Please select your travel date");
        } else {
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                errors.push("Date cannot be in the past");
                showFieldError("dateInput", "Please select a future date");
            } else {
                clearFieldError("dateInput");
            }
        }

        // People count validation
        const people = parseInt(document.getElementById("people").value);
        if (!people || people < 1) {
            errors.push("Number of people is required");
            showFieldError("people", "Please enter number of people");
        } else if (people > 50) {
            errors.push("Maximum 50 people allowed");
            showFieldError("people", "Maximum 50 people per booking");
        } else {
            clearFieldError("people");
        }

        // Vehicle type validation
        if (!vehicleSelect.value) {
            errors.push("Vehicle type is required");
            showFieldError("vehicleType", "Please select a vehicle type");
        } else {
            clearFieldError("vehicleType");
        }

        // Booking mode validation (package OR custom trip)
        if (bookingMode === "package") {
            if (!tripSelect.value) {
                errors.push("Please select a package or design your own trip");
                showFieldError("tripSelect", "Please select a package");
            } else {
                clearFieldError("tripSelect");
            }
        } else if (bookingMode === "custom") {
            if (customDestinations.length === 0) {
                errors.push("Please select at least one destination");
                const errorDiv = document.createElement("div");
                errorDiv.className = "error-text";
                errorDiv.textContent = "Please select at least one destination";
                const existing = destinationGrid.parentElement.querySelector(".error-text");
                if (existing) existing.remove();
                destinationGrid.parentElement.appendChild(errorDiv);
            } else {
                const existing = destinationGrid.parentElement.querySelector(".error-text");
                if (existing) existing.remove();
            }
        }

        return errors.length === 0;
    }

    function showFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        if (!field) return;
        
        field.classList.add("error");
        
        // Remove existing error message
        const existingError = field.parentElement.querySelector(".error-text");
        if (existingError) existingError.remove();
        
        // Add new error message
        const errorDiv = document.createElement("span");
        errorDiv.className = "error-text";
        errorDiv.textContent = message;
        field.parentElement.appendChild(errorDiv);
    }

    function clearFieldError(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field) return;
        
        field.classList.remove("error");
        const errorMsg = field.parentElement.querySelector(".error-text");
        if (errorMsg) errorMsg.remove();
    }

    // Clear errors on input
    document.querySelectorAll("input, select").forEach(el => {
        el.addEventListener("input", () => {
            clearFieldError(el.id);
        });
    });

    // ── Form submission ────────────────────────────────────
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            return;
        }

        // Prepare form data
        const formData = new FormData(form);
        
        // Add booking mode and custom destinations
        if (bookingMode === "custom") {
            formData.set("trip", "Custom Trip");
            formData.set("customDestinations", customDestinations.join(", "));
        } else {
            formData.delete("customDestinations");
        }

        submitBtn.disabled   = true;
        submitBtn.innerText  = "Processing...";

        fetch(SCRIPT_URL, { method: "POST", body: formData })
            .then(() => {
                if (popup) popup.style.display = "block";
                form.reset();
                customDestinations = [];
                updateDestinationUI();
                customTripArea.style.display = "none";
                designTripBtn.textContent = "🗺️ Design Your Own Trip";
                designTripBtn.classList.remove("active");
                bookingMode = "package";
                tripSelect.disabled = false;
                submitBtn.disabled  = false;
                submitBtn.innerText = "Confirm Booking";
            })
            .catch(() => {
                alert("Something went wrong. Please try again!");
                submitBtn.disabled  = false;
                submitBtn.innerText = "Confirm Booking";
            });
    });

    // ── Close popup → go home ──────────────────────────────
    closeBtn?.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    // ── Input focus effects ────────────────────────────────
    document.querySelectorAll("input, select, textarea").forEach(el => {
        el.addEventListener("focus", () => {
            if (!el.classList.contains("error")) {
                el.style.borderColor = "#d4af37";
                el.style.boxShadow   = "0 0 0 2px rgba(212,175,55,0.2)";
            }
        });
        el.addEventListener("blur", () => {
            if (!el.classList.contains("error")) {
                el.style.borderColor = "#ddd";
                el.style.boxShadow   = "none";
            }
        });
    });
})();