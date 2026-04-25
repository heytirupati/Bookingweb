// ================================
// GET PACKAGE ID FROM URL
// ================================
const params = new URLSearchParams(window.location.search);
const pkgId = params.get("id");

// ================================
// FIND PACKAGE
// ================================
const pkg = PACKAGES.find(p => p.id === pkgId);

// ================================
// ELEMENTS
// ================================
const container = document.getElementById("package-container");

// ================================
// ERROR STATE
// ================================
if (!pkg) {
    container.innerHTML = `
        <div class="pkg-error">
            <div class="pkg-error-icon">⚠️</div>
            <h2>Package Not Found</h2>
            <p>The package you are looking for does not exist.</p>
            <a href="tirupati.html" class="btn">Browse Packages</a>
        </div>
    `;
} else {
    renderPackage(pkg);
}

// ================================
// RENDER PACKAGE
// ================================
function renderPackage(pkg) {

    document.title = pkg.name + " | Sri Balaji Travels";

    container.innerHTML = `
    
    <!-- HERO -->
    <section class="pkg-hero-strip">
        <div class="pkg-hero-img">
            <img src="${pkg.image}" alt="${pkg.name}">
        </div>
        <div class="pkg-hero-overlay"></div>

        <div class="container pkg-hero-content">
            <span class="pkg-hero-tag ${pkg.tagClass || ""}">${pkg.tag}</span>

            <h1 class="pkg-title">${pkg.name}</h1>
            <p class="pkg-hero-subtitle">${pkg.routeShort}</p>

            <div class="pkg-hero-meta">
                <span>⏱ ${pkg.duration}</span>
                <span>🚗 Private Cab</span>
                <span>🙏 Spiritual Tour</span>
            </div>

            <div class="pkg-hero-actions">
                <a href="booking.html?id=${pkg.id}" class="btn">Book Now</a>
                <a href="https://wa.me/91XXXXXXXXXX" class="btn btn-outline">WhatsApp</a>
            </div>
        </div>
    </section>

    <!-- BODY -->
    <section class="container pkg-body">

        <!-- LEFT -->
        <div>

            <!-- DESCRIPTION -->
            <div class="pkg-section">
                <h2 class="pkg-section-title">About This Package</h2>
                <p class="pkg-description">${pkg.description}</p>
                ${pkg.note ? `<div class="pkg-note">${pkg.note}</div>` : ""}
            </div>

            <!-- HIGHLIGHTS -->
            <div class="pkg-section">
                <h2 class="pkg-section-title">Highlights</h2>
                <div class="pkg-highlights">
                    ${pkg.highlights.map(h => `<span class="hl-chip">${h}</span>`).join("")}
                </div>
            </div>

            <!-- TEMPLE FLOW -->
            <div class="pkg-section pkg-section-tf">
                <h2 class="pkg-section-title">Temple Flow</h2>
                <div class="temple-flow">
                    ${pkg.templeFlow.map((step, i) => `
                        <div class="tf-item ${i % 2 ? "tf-reverse" : ""}">
                            <div class="tf-icon-col">
                                <div class="tf-icon-wrap">${step.icon}</div>
                                ${i !== pkg.templeFlow.length - 1 ? `<div class="tf-vline"></div>` : ""}
                            </div>
                            <div class="tf-content-col">
                                <div class="tf-card">
                                    <span class="tf-step">Step ${i + 1}</span>
                                    <h3>${step.name}</h3>
                                    <p>${step.desc}</p>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- INCLUDES / EXCLUDES -->
            <div class="pkg-section">
                <h2 class="pkg-section-title">Includes & Excludes</h2>

                <div class="pkg-inc-exc">
                    <div class="pkg-inc">
                        <ul>
                            ${pkg.includes.map(i => `<li><span class="inc-icon">✔</span>${i}</li>`).join("")}
                        </ul>
                    </div>
                    <div class="pkg-exc">
                        <ul>
                            ${pkg.excludes.map(i => `<li><span class="exc-icon">✖</span>${i}</li>`).join("")}
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <!-- RIGHT (BOOKING CARD) -->
        <div class="pkg-right">
            <div class="pkg-book-card">

                <div class="pkg-price-block">
                    <span class="pkg-price-label">Starting From</span>
                    <span class="pkg-price-value">₹${pkg.price}</span>
                    <span class="pkg-price-sub">per trip</span>
                </div>

                <ul class="pkg-quick-facts">
                    <li><span>Duration</span><strong>${pkg.duration}</strong></li>
                    <li><span>Route</span><strong>${pkg.routeShort}</strong></li>
                    <li><span>Category</span><strong>${pkg.category}</strong></li>
                </ul>

                <a href="booking.html?id=${pkg.id}" class="btn-book-pkg">Book This Package</a>

                <a href="https://wa.me/91XXXXXXXXXX" class="btn-whatsapp-pkg">
                    Chat on WhatsApp
                </a>

                <p class="pkg-book-note">
                    Instant confirmation • No hidden charges
                </p>

            </div>
        </div>

    </section>
    `;
}