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

    function buildModal() {
        const pkgs = PACKAGES.filter(p => TIRUPATI_CATS.includes(p.category));
        modalList.innerHTML = pkgs.map(p => `
            <a href="booking.html?package=${p.id}" class="modal-pkg-row">
                <div class="modal-pkg-info">
                    <span class="modal-pkg-tag ${p.tagClass || ''}">${p.tag}</span>
                    <strong>${p.name}</strong>
                    <span class="modal-pkg-route">${p.routeShort}</span>
                </div>
                <div class="modal-pkg-right">
                    <span class="modal-pkg-price">₹${p.price.toLocaleString("en-IN")}</span>
                    <span class="modal-pkg-duration">${p.duration}</span>
                </div>
            </a>
        `).join("");
    }

    heroBtn?.addEventListener("click", () => {
        buildModal();
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });

    closeModal?.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
    });

    modal?.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "";
        }
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
                <a href="tirupathi.html#packages" class="btn btn-primary">Browse Packages</a>
            </div>`;
        return;
    }

    document.title = pkg.name + " – Sri Balaji Travels";

    // ── Build HTML fragments ───────────────────────────────
    const includesHTML = pkg.includes.map(i =>
        `<li><span class="inc-icon">✓</span><span>${i}</span></li>`).join("");

    const excludesHTML = pkg.excludes.map(e =>
        `<li><span class="exc-icon">✗</span><span>${e}</span></li>`).join("");

    const highlightsHTML = pkg.highlights.map(h =>
        `<div class="hl-chip">${h}</div>`).join("");

    const routeHTML = pkg.routeFull.map((stop, i) => `
        <div class="route-node">
            <div class="route-dot ${i === 0 || i === pkg.routeFull.length - 1 ? "route-dot-end" : ""}"></div>
            <span>${stop}</span>
        </div>
        ${i < pkg.routeFull.length - 1 ? '<div class="route-connector"></div>' : ""}
    `).join("");

    const templeFlowHTML = (pkg.templeFlow || []).map((stop, i) => `
        <div class="tf-item ${i % 2 !== 0 ? "tf-reverse" : ""}">
            <div class="tf-icon-col">
                <div class="tf-icon-wrap"><span>${stop.icon}</span></div>
                ${i < pkg.templeFlow.length - 1 ? '<div class="tf-vline"></div>' : ""}
            </div>
            <div class="tf-content-col">
                <div class="tf-card">
                    <span class="tf-step">Stop ${i + 1}</span>
                    <h3>${stop.name}</h3>
                    <p>${stop.desc}</p>
                </div>
            </div>
        </div>
    `).join("");

    // ── Main UI ────────────────────────────────────────────
    detail.innerHTML = `
        <div class="pkg-breadcrumb">
            <div class="container">
                <a href="index.html">Home</a>
                <span class="bc-sep">›</span>
                <a href="tirupathi.html#packages">Packages</a>
                <span class="bc-sep">›</span>
                <span>${pkg.name}</span>
            </div>
        </div>

        <div class="pkg-hero-strip">
            <div class="pkg-hero-img">
                <img src="${pkg.image}" alt="${pkg.name}">
                <div class="pkg-hero-overlay"></div>
            </div>
            <div class="container pkg-hero-content">
                <span class="pkg-hero-tag ${pkg.tagClass || ''}">${pkg.tag}</span>
                <h1 class="pkg-title">${pkg.name}</h1>
                <p class="pkg-hero-subtitle">${pkg.routeShort}</p>
                <div class="pkg-hero-meta">
                    <span>⏱ ${pkg.duration}</span>
                    <span>🚗 Pickup Included</span>
                    <span>📞 24/7 Support</span>
                </div>
                <div class="pkg-hero-actions">
                    <a href="booking.html?package=${pkg.id}" class="btn btn-primary">Book This Package</a>
                    <a href="https://wa.me/919876543210?text=Hi, I'm interested in ${encodeURIComponent(pkg.name)}"
                       target="_blank" class="btn btn-outline">💬 WhatsApp</a>
                </div>
            </div>
        </div>

        <div class="container pkg-body">
            <div class="pkg-left">
                <div class="pkg-section">
                    <h2 class="pkg-section-title">About This Package</h2>
                    <p class="pkg-description">${pkg.description}</p>
                    ${pkg.note ? `<div class="pkg-note">💡 ${pkg.note}</div>` : ""}
                </div>

                <div class="pkg-section">
                    <h2 class="pkg-section-title">Highlights</h2>
                    <div class="pkg-highlights">${highlightsHTML}</div>
                </div>

                ${pkg.templeFlow?.length ? `
                <div class="pkg-section pkg-section-tf">
                    <h2 class="pkg-section-title">Your Journey</h2>
                    <div class="temple-flow">${templeFlowHTML}</div>
                </div>` : ""}

                <div class="pkg-section">
                    <h2 class="pkg-section-title">Route</h2>
                    <div class="pkg-route-full">${routeHTML}</div>
                </div>

                <div class="pkg-section pkg-inc-exc">
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
//  9. BOOKING PAGE (UPDATED LOGIC)
// ============================================================
(function initBookingPage() {
    const form = document.getElementById("bookingForm");
    if (!form || typeof PACKAGES === "undefined") return;

    const SCRIPT_URL  = "https://script.google.com/macros/s/AKfycbwK2iJHY3h7BSFlUR7wPW-Q8FFdgwA5g7lLYM417QIYtT8BIEzMPImFFo4-PKAhUFvR/exec";

    const tripSelect  = document.getElementById("tripSelect");
    const customMain  = document.getElementById("customTripMain");
    const customBox   = document.getElementById("customTripOptions");
    const customList  = document.getElementById("customTripList");

    const dateInput   = document.getElementById("dateInput");
    const phoneInput  = document.getElementById("phone");

    const popup       = document.getElementById("successPopup");
    const closeBtn    = document.getElementById("closePopup");
    const submitBtn   = document.querySelector(".btn-book");

    // =============================
    // BUILD PACKAGE DROPDOWN
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
            opt.textContent = `${p.name} — ₹${p.price.toLocaleString("en-IN")}`;
            optgroup.appendChild(opt);
        });

        tripSelect.appendChild(optgroup);
    });

    // =============================
    // PRESELECT PACKAGE
    // =============================
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
                        <strong>${foundPkg.name}</strong>
                        <span>₹${foundPkg.price.toLocaleString("en-IN")}</span>
                    </div>
                `;
            }
        }
    }

    // =============================
    // DATE VALIDATION
    // =============================
    if (dateInput) {
        dateInput.min = new Date().toISOString().split("T")[0];
    }

    // =============================
    // CUSTOM TRIP TOGGLE
    // =============================
    customMain?.addEventListener("change", () => {
        if (customMain.value) {
            customBox.style.display = "block";
            tripSelect.value = "";
            tripSelect.disabled = true;
        } else {
            customBox.style.display = "none";
            tripSelect.disabled = false;
        }
    });

    // =============================
    // PACKAGE SELECT
    // =============================
    tripSelect?.addEventListener("change", () => {
        if (tripSelect.value) {
            customMain.value = "";
            customBox.style.display = "none";
        }
    });

    // =============================
    // PHONE VALIDATION (LIVE)
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
    // FORM SUBMIT
    // =============================
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const phone = phoneInput.value.trim();
        const pkg   = tripSelect.value;
        const custom = customList
            ? Array.from(customList.selectedOptions).map(o => o.value)
            : [];

        // ❌ Must choose one
        if (!pkg && custom.length === 0) {
            alert("Please select Package OR Design Your Trip");
            return;
        }

        // ❌ Cannot choose both
        if (pkg && custom.length > 0) {
            alert("Choose either Package OR Custom Trip, not both");
            return;
        }

        // ❌ Phone validation
        if (!/^[6-9]\d{9}$/.test(phone)) {
            alert("Invalid phone number");
            phoneInput.focus();
            return;
        }

        submitBtn.disabled  = true;
        submitBtn.innerText = "Processing...";

        // Attach custom trip
        if (custom.length > 0) {
            const hidden = document.createElement("input");
            hidden.type = "hidden";
            hidden.name = "customTrip";
            hidden.value = custom.join(", ");
            form.appendChild(hidden);
        }

        fetch(SCRIPT_URL, {
            method: "POST",
            body: new FormData(form)
        })
        .then(() => {
            popup.style.display = "block";
            form.reset();

            customBox.style.display = "none";
            tripSelect.disabled = false;

            submitBtn.disabled  = false;
            submitBtn.innerText = "Confirm Booking";
        })
        .catch(() => {
            alert("Something went wrong. Try again!");
            submitBtn.disabled  = false;
            submitBtn.innerText = "Confirm Booking";
        });
    });

    // =============================
    // CLOSE POPUP
    // =============================
    closeBtn?.addEventListener("click", () => {
        window.location.href = "index.html";
    });

})();