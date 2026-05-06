// ============================================================
//  package.js - Package detail page rendering
// ============================================================

(function initEnhancedPackageDetail() {
    const detail = document.getElementById("packageDetail");
    if (!detail || typeof PACKAGES === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const pkg = PACKAGES.find(p => p.id === params.get("id"));

    if (!pkg) {
        detail.innerHTML = `
            <div class="pkg-error">
                <div class="pkg-error-icon"></div>
                <h2>Package Not Found</h2>
                <p>Please select a valid package.</p>
                <a href="tirupathi.html#packages" class="btn btn-primary">Browse Packages</a>
            </div>`;
        return;
    }

    document.title = `${pkg.name} - Yatrahere`;

    const markedPrice = Math.round(pkg.price * 1.49);
    const savePercent = Math.round(((markedPrice - pkg.price) / markedPrice) * 100);
    const formatPrice = value => value.toLocaleString("en-IN");
    const heroImage = pkg.cardImage;

    const includesHTML = pkg.includes.map(item =>
        `<li><span class="inc-icon">&check;</span><span>${item}</span></li>`
    ).join("");

    const excludesHTML = pkg.excludes.map(item =>
        `<li><span class="exc-icon">&times;</span><span>${item}</span></li>`
    ).join("");

    const highlightsHTML = pkg.highlights.map(item =>
        `<div class="hl-chip">${item}</div>`
    ).join("");

    const routeHTML = pkg.routeFull.map((stop, index) => `
        <div class="route-node">
            <div class="route-dot ${index === 0 || index === pkg.routeFull.length - 1 ? "route-dot-end" : ""}"></div>
            <span>${stop}</span>
        </div>
        ${index < pkg.routeFull.length - 1 ? '<div class="route-connector"></div>' : ""}
    `).join("");

    const templeFlowHTML = (pkg.templeFlow || []).map((stop, index) => `
        <div class="tf-item ${index % 2 !== 0 ? "tf-reverse" : ""}">
            <div class="tf-icon-col">
                <div class="tf-icon-wrap"><span>${stop.icon}</span></div>
                ${index < pkg.templeFlow.length - 1 ? '<div class="tf-vline"></div>' : ""}
            </div>
            <div class="tf-content-col">
                <div class="tf-card">
                    <span class="tf-step">Stop ${index + 1}</span>
                    <h3>${stop.name}</h3>
                    <p>${stop.desc}</p>
                </div>
            </div>
        </div>
    `).join("");

    detail.innerHTML = `
        <div class="pkg-breadcrumb">
            <div class="container">
                <a href="index.html">Home</a>
                <span class="bc-sep">&rsaquo;</span>
                <a href="tirupathi.html#packages">Packages</a>
                <span class="bc-sep">&rsaquo;</span>
                <span>${pkg.name}</span>
            </div>
        </div>

        <div class="pkg-hero-enhanced">
            <div class="container">
                <div class="pkg-hero-container">
                    <div class="pkg-hero-left">
                        <span class="pkg-hero-tag-new ${pkg.tagClass || ""}">${pkg.tag}</span>
                        <h1 class="pkg-title-new">${pkg.name}</h1>
                        <p class="pkg-subtitle-new">${pkg.routeShort}</p>

                        <div class="pkg-meta-pills">
                            <div class="pkg-meta-pill">${pkg.duration}</div>
                            <div class="pkg-meta-pill">Pickup Included</div>
                            <div class="pkg-meta-pill">24/7 Support</div>
                            <div class="pkg-meta-pill">&check; No Hidden Charges</div>
                        </div>

                        <div class="pkg-hero-cta">
                            <a href="booking.html?package=${pkg.id}#book-form" class="pkg-btn-primary">Book This Package</a>
                            <a href="https://wa.me/918639429948?text=Hi, I'm interested in ${encodeURIComponent(pkg.name)}" target="_blank" class="pkg-btn-whatsapp">
                                <img src="images/whatsapplogo.webp" alt="WhatsApp"> WhatsApp
                            </a>
                        </div>

                        <div class="pkg-trust-row">
                            <div class="pkg-trust-item"><span>&check;</span><span>5000+ Happy Customers</span></div>
                            <div class="pkg-trust-item"><span>&check;</span><span>10+ Years Experience</span></div>
                            <div class="pkg-trust-item"><span>&check;</span><span>Verified Reviews</span></div>
                        </div>
                    </div>

                    <div class="pkg-hero-right">
                        <div class="pkg-gallery-grid">
                            <div class="pkg-gallery-main">
                                <img src="${heroImage}" alt="${pkg.name}">
                                <div class="pkg-gallery-price-badge">
                                    <span class="pkg-gallery-price-old">&#8377;${formatPrice(markedPrice)}</span>
                                    <span class="pkg-gallery-price-new">&#8377;${formatPrice(pkg.price)}</span>
                                    <span class="pkg-gallery-save">${savePercent}% OFF</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container pkg-body">
            <div class="pkg-left">
                <div class="pkg-section">
                    <h2 class="pkg-section-title">About This Package</h2>
                    <p class="pkg-description">${pkg.description}</p>
                    ${pkg.note ? `<div class="pkg-note">${pkg.note}</div>` : ""}
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
                        <div class="pkg-price-comparison">
                            <span class="pkg-price-old">&#8377;${formatPrice(markedPrice)}</span>
                            <span class="pkg-price-value">&#8377;${formatPrice(pkg.price)}</span>
                        </div>
                        <span class="pkg-save-percent">${savePercent}% OFF</span>
                        <span class="pkg-price-sub">${pkg.duration}</span>
                    </div>
                    <a href="booking.html?package=${pkg.id}#book-form" class="btn-book-pkg">Book Now</a>
                    <a href="https://wa.me/918639429948?text=Hi, I'm interested in ${encodeURIComponent(pkg.name)}" class="booking-wa-pill pkg-wa-btn" target="_blank">
                        <img src="images/whatsapplogo.webp" alt="WhatsApp" class="wa-btn-icon"> WhatsApp Us
                    </a>
                </div>
            </div>
        </div>
    `;

    renderRelatedPackages(pkg.id, formatPrice);
})();

function renderRelatedPackages(currentPackageId, formatPrice) {
    const relatedSection = document.getElementById("relatedSection");
    const relatedCards = document.getElementById("relatedCards");
    if (!relatedSection || !relatedCards || typeof PACKAGES === "undefined") return;

    const related = PACKAGES
        .filter(item => item.id !== currentPackageId)
        .sort((a, b) => (b.popular === true) - (a.popular === true))
        .slice(0, 6);

    if (!related.length) return;

    relatedSection.classList.add("is-visible");
    relatedCards.innerHTML = related.map(pkg => {
        const markedPrice = Math.round(pkg.price * 1.49);
        return `
            <a href="package.html?id=${pkg.id}" class="related-card">
                <div class="related-img-wrap">
                    <img src="${pkg.cardImage}" alt="${pkg.name}">
                    ${pkg.tag ? `<span class="related-tag ${pkg.tagClass || ""}">${pkg.tag}</span>` : ""}
                </div>
                <div class="related-body">
                    <h3>${pkg.name}</h3>
                    <p>${pkg.routeShort}</p>
                    <div class="related-footer">
                        <div class="related-price-group">
                            <span class="related-price-old">&#8377;${formatPrice(markedPrice)}</span>
                            <span class="related-price">&#8377;${formatPrice(pkg.price)}</span>
                        </div>
                        <span class="related-btn btn btn-outline">View</span>
                    </div>
                </div>
            </a>
        `;
    }).join("");
} 