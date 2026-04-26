// ============================================================
//  script.js — Sri Balaji Travels
//  Shared utilities + page-specific logic
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
//  2. HERO IMAGE SLIDER
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
//  5. PACKAGE CARD TOUCH FLIP
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
// ============================================================
(function initTirupatiPage() {
    const container = document.getElementById("allPackageCards");
    if (!container || typeof PACKAGES === "undefined") return;

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

        closeModal.addEventListener("click", () => { modal.style.display = "none"; });
        modal.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });
    }
})();


// ============================================================
//  8. PACKAGE DETAIL PAGE
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
                    <a href="https://wa.me/919876543210" class="btn-whatsapp-pkg" target="_blank">💬 Ask on WhatsApp</a>
                </div>
            </div>
        </div>
    `;

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
// ============================================================
(function initBookingPage() {
    const form = document.getElementById("bookingForm");
    if (!form || typeof PACKAGES === "undefined") return;

    const SCRIPT_URL     = "https://script.google.com/macros/s/AKfycbwK2iJHY3h7BSFlUR7wPW-Q8FFdgwA5g7lLYM417QIYtT8BIEzMPImFFo4-PKAhUFvR/exec";

    // ── Element references ─────────────────────────────────
    const tripSelect      = document.getElementById("tripSelect");
    const customTripArea  = document.getElementById("customTripArea");
    const designTripBtn   = document.getElementById("designTripBtn");
    const destinationGrid = document.getElementById("destinationGrid");
    const selectedCount   = document.getElementById("selectedCount");
    const customTripError = document.getElementById("customTripError");
    const dateInput       = document.getElementById("dateInput");
    const phoneInput      = document.getElementById("phone");
    const phoneGroup      = document.getElementById("phoneGroup");
    const popup           = document.getElementById("successPopup");
    const submitBtn       = document.getElementById("submitBtn");
    const formToast       = document.getElementById("formToast");
    const formToastMsg    = document.getElementById("formToastMsg");
    const pkgStar         = document.getElementById("pkgStar");

    let customDestinations = [];
    let bookingMode        = "package"; // "package" | "custom"
    // Track which fields have been "touched" (blurred at least once)
    const touched          = new Set();

    // ── Build package dropdown ─────────────────────────────
    const CATEGORY_LABELS = {
        tirumala   : "— Tirumala Darshan —",
        tirupati   : "— Tirupati Temples —",
        outstation : "— Outstation —",
        "one-day"  : "— One-Day Routes —",
        "multi-day": "— Multi-Day —",
        transfer   : "— Transfers —"
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
            const opt       = document.createElement("option");
            opt.value       = p.id;
            opt.textContent = `${p.name}  —  ₹${p.price.toLocaleString("en-IN")}`;
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
            bookingMode      = "package";
            showPackageBanner(foundPkg);
        }
    }

    function showPackageBanner(pkg) {
        const banner = document.getElementById("selectedPkgBanner");
        if (!banner) return;
        banner.style.display = "block";
        banner.innerHTML = `
            <div class="pkg-banner-inner">
                <span class="pkg-banner-tag ${pkg.tagClass || ''}">${pkg.tag}</span>
                <div class="pkg-banner-name">${pkg.name}</div>
                <div class="pkg-banner-meta">
                    <span>⏱ ${pkg.duration}</span>
                    <span>₹${pkg.price.toLocaleString("en-IN")}</span>
                </div>
                <p class="pkg-banner-route">${pkg.routeShort}</p>
            </div>
        `;
    }

    // ── Minimum date = today ───────────────────────────────
    const todayStr = new Date().toISOString().split("T")[0];
    if (dateInput) dateInput.setAttribute("min", todayStr);

    // ── Smooth scroll form into view on load ──────────────
    window.addEventListener("load", () => {
        const formEl = document.getElementById("formStart");
        if (formEl) formEl.scrollIntoView({ behavior: "smooth", block: "center" });
    });


    // ============================================================
    //  VALIDATION HELPERS
    // ============================================================

    /**
     * Show an error on a field (or phone group for phone).
     * For the phone group, we style the wrapper, not the input.
     */
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        // For phone, manage the wrapper
        if (fieldId === "phone") {
            phoneGroup.classList.add("error");
            phoneGroup.classList.remove("valid");
        } else {
            field.classList.add("error");
            field.classList.remove("valid");
        }

        // Remove old error for this field
        const parent   = field.closest(".form-group") || field.parentElement;
        const oldError = parent.querySelector(".error-text");
        if (oldError) oldError.remove();

        // Remove old valid icon
        const oldIcon = parent.querySelector(".field-valid-icon");
        if (oldIcon) oldIcon.remove();

        // Insert error message
        const span       = document.createElement("span");
        span.className   = "error-text";
        span.textContent = message;
        parent.appendChild(span);
    }

    /**
     * Clear error from a field and optionally show the green ✓.
     */
    function clearError(fieldId, showValid = false) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        if (fieldId === "phone") {
            phoneGroup.classList.remove("error");
            if (showValid) phoneGroup.classList.add("valid");
            else phoneGroup.classList.remove("valid");
        } else {
            field.classList.remove("error");
            if (showValid) field.classList.add("valid");
            else field.classList.remove("valid");
        }

        const parent   = field.closest(".form-group") || field.parentElement;
        const oldError = parent.querySelector(".error-text");
        if (oldError) oldError.remove();

        // Manage ✓ icon (only for non-phone groups that have room)
        const oldIcon = parent.querySelector(".field-valid-icon");
        if (oldIcon) oldIcon.remove();

        if (showValid && fieldId !== "phone") {
            const icon       = document.createElement("span");
            icon.className   = "field-valid-icon";
            icon.textContent = "✓";
            parent.appendChild(icon);
        }
    }

    /**
     * Validate a single field by ID. Returns true if valid.
     * Only shows error if field was touched OR forceShow is true.
     */
    function validateField(fieldId, forceShow = false) {
        const show = forceShow || touched.has(fieldId);

        switch (fieldId) {

            case "name": {
                const val = document.getElementById("name").value.trim();
                if (!val) {
                    if (show) showError("name", "Full name is required");
                    else clearError("name");
                    return false;
                }
                if (val.length < 2) {
                    if (show) showError("name", "Name must be at least 2 characters");
                    else clearError("name");
                    return false;
                }
                if (!/^[A-Za-z\u0900-\u097F\s.'-]+$/.test(val)) {
                    if (show) showError("name", "Name can only contain letters and spaces");
                    else clearError("name");
                    return false;
                }
                clearError("name", show);
                return true;
            }

            case "phone": {
                const val = phoneInput.value.trim();
                if (!val) {
                    if (show) showError("phone", "Phone number is required");
                    else { phoneGroup.classList.remove("error", "valid"); }
                    return false;
                }
                if (!/^[6-9]\d{9}$/.test(val)) {
                    if (show) showError("phone", "Enter a valid 10-digit number starting with 6–9");
                    else { phoneGroup.classList.remove("error", "valid"); }
                    return false;
                }
                if (show) {
                    phoneGroup.classList.remove("error");
                    phoneGroup.classList.add("valid");
                    const parent   = phoneInput.closest(".form-group");
                    const oldError = parent ? parent.querySelector(".error-text") : null;
                    if (oldError) oldError.remove();
                }
                return true;
            }

            case "email": {
                const val = document.getElementById("email").value.trim();
                if (!val) {
                    clearError("email"); // optional field
                    return true;
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)) {
                    if (show) showError("email", "Enter a valid email address");
                    else clearError("email");
                    return false;
                }
                clearError("email", show);
                return true;
            }

            case "dateInput": {
                const val = dateInput.value;
                if (!val) {
                    if (show) showError("dateInput", "Travel date is required");
                    else clearError("dateInput");
                    return false;
                }
                const picked = new Date(val);
                const today  = new Date();
                today.setHours(0, 0, 0, 0);
                if (picked < today) {
                    if (show) showError("dateInput", "Travel date cannot be in the past");
                    else clearError("dateInput");
                    return false;
                }
                // Warn if date is more than 2 years away (likely a typo)
                const twoYears = new Date();
                twoYears.setFullYear(twoYears.getFullYear() + 2);
                if (picked > twoYears) {
                    if (show) showError("dateInput", "Date seems too far ahead — please double-check");
                    else clearError("dateInput");
                    return false;
                }
                clearError("dateInput", show);
                return true;
            }

            case "people": {
                const raw = document.getElementById("people").value;
                const val = parseInt(raw, 10);
                if (!raw || isNaN(val)) {
                    if (show) showError("people", "Number of people is required");
                    else clearError("people");
                    return false;
                }
                if (val < 1) {
                    if (show) showError("people", "Must be at least 1 person");
                    else clearError("people");
                    return false;
                }
                if (val > 50) {
                    if (show) showError("people", "Maximum 50 people per booking — call us for larger groups");
                    else clearError("people");
                    return false;
                }
                clearError("people", show);
                return true;
            }

            case "vehicleType": {
                const val = document.getElementById("vehicleType").value;
                if (!val) {
                    if (show) showError("vehicleType", "Please select a vehicle type");
                    else clearError("vehicleType");
                    return false;
                }
                clearError("vehicleType", show);
                return true;
            }

            case "tripSelect": {
                if (bookingMode !== "package") return true; // not applicable in custom mode
                const val = tripSelect.value;
                if (!val) {
                    if (show) showError("tripSelect", "Please select a package or design your own trip");
                    else clearError("tripSelect");
                    return false;
                }
                clearError("tripSelect", show);
                return true;
            }

            default:
                return true;
        }
    }

    // Validate custom trip destinations (not a normal field, separate logic)
    function validateCustomDestinations(forceShow = false) {
        const show = forceShow || touched.has("destinations");
        if (bookingMode !== "custom") {
            if (customTripError) customTripError.style.display = "none";
            return true;
        }
        if (customDestinations.length === 0) {
            if (show && customTripError) customTripError.style.display = "flex";
            return false;
        }
        if (customTripError) customTripError.style.display = "none";
        return true;
    }

    /**
     * Run all validations. Returns true only if every field is valid.
     * forceShow = true is used on form submit to surface all errors at once.
     */
    function validateAll(forceShow = false) {
        const fields  = ["name", "phone", "email", "dateInput", "people", "vehicleType", "tripSelect"];
        let allValid  = true;

        fields.forEach(id => {
            if (!validateField(id, forceShow)) allValid = false;
        });

        if (!validateCustomDestinations(forceShow)) allValid = false;

        return allValid;
    }


    // ============================================================
    //  REAL-TIME VALIDATION (on blur → touch + validate; on input → re-validate if touched)
    // ============================================================

    // All real inputs + selects (skip phone group wrapper)
    const liveFields = ["name", "phone", "email", "dateInput", "people", "vehicleType", "tripSelect"];

    liveFields.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        // On blur: mark as touched, run validation
        el.addEventListener("blur", () => {
            touched.add(id);
            validateField(id, true);
        });

        // On input/change: if already touched, re-validate immediately
        const event = (el.tagName === "SELECT" || el.type === "date" || el.type === "number") ? "change" : "input";
        el.addEventListener(event, () => {
            if (touched.has(id)) validateField(id, true);
            // Hide the global toast as user corrects errors
            if (formToast) formToast.style.display = "none";
        });
    });

    // Phone: only allow numeric input, block non-digits
    phoneInput.addEventListener("input", () => {
        phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 10);
        if (touched.has("phone")) validateField("phone", true);
        if (formToast) formToast.style.display = "none";
    });

    // People: block non-integer and out-of-range input live
    const peopleInput = document.getElementById("people");
    peopleInput.addEventListener("input", () => {
        const val = parseInt(peopleInput.value, 10);
        if (!isNaN(val) && val > 50) peopleInput.value = 50;
        if (!isNaN(val) && val < 1) peopleInput.value = "";
        if (touched.has("people")) validateField("people", true);
        if (formToast) formToast.style.display = "none";
    });


    // ============================================================
    //  DESIGN YOUR TRIP TOGGLE
    // ============================================================
    if (designTripBtn) {
        designTripBtn.addEventListener("click", () => {
            const isOpen = customTripArea.style.display === "block";

            if (isOpen) {
                // Close custom trip → revert to package mode
                customTripArea.style.display = "none";
                designTripBtn.innerHTML      = "🗺️ Design Your Own Trip";
                designTripBtn.classList.remove("active");
                bookingMode                  = "package";
                tripSelect.disabled          = false;
                tripSelect.value             = "";
                pkgStar.style.display        = "inline";

                customDestinations = [];
                updateDestinationUI();
                if (customTripError) customTripError.style.display = "none";

                // Re-validate package select if already touched
                if (touched.has("tripSelect")) validateField("tripSelect", true);

            } else {
                // Open custom trip → switch to custom mode
                customTripArea.style.display = "block";
                designTripBtn.innerHTML      = "✕ Use a Package Instead";
                designTripBtn.classList.add("active");
                bookingMode                  = "custom";
                tripSelect.value             = "";
                tripSelect.disabled          = true;
                pkgStar.style.display        = "none";
                clearError("tripSelect");

                // Hide the package banner if present
                const banner = document.getElementById("selectedPkgBanner");
                if (banner) banner.style.display = "none";
            }
        });
    }

    // Package selection clears custom trip
    if (tripSelect) {
        tripSelect.addEventListener("change", () => {
            if (tripSelect.value) {
                bookingMode = "package";
                customTripArea.style.display = "none";
                designTripBtn.innerHTML      = "🗺️ Design Your Own Trip";
                designTripBtn.classList.remove("active");
                tripSelect.disabled          = false;
                pkgStar.style.display        = "inline";
                customDestinations           = [];
                updateDestinationUI();
                if (customTripError) customTripError.style.display = "none";
            }
            touched.add("tripSelect");
            validateField("tripSelect", true);
        });
    }


    // ============================================================
    //  DESTINATION CHECKBOX LOGIC
    // ============================================================
    function updateDestinationUI() {
        document.querySelectorAll(".dest-checkbox").forEach(cb => {
            cb.checked = customDestinations.includes(cb.value);
        });
        if (selectedCount) {
            selectedCount.textContent = customDestinations.length === 0
                ? "0 selected"
                : `${customDestinations.length} selected`;
        }
    }

    if (destinationGrid) {
        destinationGrid.addEventListener("change", (e) => {
            if (!e.target.classList.contains("dest-checkbox")) return;
            const value = e.target.value;
            if (e.target.checked) {
                if (!customDestinations.includes(value)) customDestinations.push(value);
            } else {
                customDestinations = customDestinations.filter(d => d !== value);
            }
            updateDestinationUI();
            touched.add("destinations");
            validateCustomDestinations(true);
            if (formToast) formToast.style.display = "none";
        });
    }


    // ============================================================
    //  FORM SUBMISSION
    // ============================================================
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Force-show all validation errors
        if (!validateAll(true)) {
            // Show top-level toast
            const errorCount = form.querySelectorAll(".error-text").length +
                               (customTripError && customTripError.style.display !== "none" ? 1 : 0);
            if (formToast && formToastMsg) {
                formToastMsg.textContent = errorCount === 1
                    ? "Please fix 1 error below before submitting."
                    : `Please fix ${errorCount} errors below before submitting.`;
                formToast.style.display = "flex";
                formToast.scrollIntoView({ behavior: "smooth", block: "center" });
            }
            // Shake the submit button
            submitBtn.classList.add("shake");
            setTimeout(() => submitBtn.classList.remove("shake"), 500);
            return;
        }

        // Hide toast if visible
        if (formToast) formToast.style.display = "none";

        // Prepare data
        const formData = new FormData(form);
        if (bookingMode === "custom") {
            formData.set("trip", "Custom Trip");
            formData.set("customDestinations", customDestinations.join(", "));
        } else {
            formData.delete("customDestinations");
        }

        // Disable button, show loading
        submitBtn.disabled   = true;
        submitBtn.classList.add("loading");
        submitBtn.textContent = ""; // text hidden by loading CSS

        fetch(SCRIPT_URL, { method: "POST", body: formData })
            .then(() => {
                // Show success popup
                if (popup) popup.style.display = "block";

                // Reset form state
                form.reset();
                touched.clear();
                customDestinations = [];
                updateDestinationUI();
                form.querySelectorAll(".error-text").forEach(el => el.remove());
                form.querySelectorAll(".error, .valid").forEach(el => el.classList.remove("error", "valid"));
                form.querySelectorAll(".field-valid-icon").forEach(el => el.remove());
                phoneGroup && phoneGroup.classList.remove("error", "valid");

                customTripArea.style.display = "none";
                designTripBtn.innerHTML      = "🗺️ Design Your Own Trip";
                designTripBtn.classList.remove("active");
                bookingMode                  = "package";
                tripSelect.disabled          = false;
                pkgStar.style.display        = "inline";
                if (customTripError) customTripError.style.display = "none";

                submitBtn.disabled   = false;
                submitBtn.classList.remove("loading");
                submitBtn.textContent = "Confirm Booking";
            })
            .catch(() => {
                // Inline error — no alert()
                if (formToast && formToastMsg) {
                    formToastMsg.textContent = "Something went wrong. Please try again or call us directly.";
                    formToast.style.display  = "flex";
                    formToast.scrollIntoView({ behavior: "smooth", block: "center" });
                }
                submitBtn.disabled    = false;
                submitBtn.classList.remove("loading");
                submitBtn.textContent = "Confirm Booking";
            });
    });

    // ── Close popup → go home ──────────────────────────────
    document.getElementById("closePopup")?.addEventListener("click", () => {
        window.location.href = "index.html";
    });

})();