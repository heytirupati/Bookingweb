/* ============================================================
   package.js — Dynamic Package Detail Page
   ============================================================ */

// Get package ID from URL
const urlParams = new URLSearchParams(window.location.search);
const packageId = urlParams.get('id');

// Pricing configuration
const PRICING_CONFIG = {
    markupPercentage: 49, // 49% markup to show as strikethrough
    enabled: true
};

/**
 * Calculate markup price (49% more than original)
 * @param {number} originalPrice - The base price
 * @returns {number} - The marked up price
 */
function calculateMarkupPrice(originalPrice) {
    if (!PRICING_CONFIG.enabled) return null;
    
    const markup = originalPrice * (PRICING_CONFIG.markupPercentage / 100);
    const markedUpPrice = originalPrice + markup;
    
    // Round to nearest whole number for cleaner display
    return Math.round(markedUpPrice);
}

/**
 * Format currency for display
 * @param {number} price - Price to format
 * @returns {string} - Formatted price string
 */
function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

/**
 * Create price HTML with strikethrough markup
 * @param {number} originalPrice - The actual final price
 * @returns {string} - HTML string with pricing
 */
function createPriceHTML(originalPrice) {
    const markupPrice = calculateMarkupPrice(originalPrice);
    
    if (markupPrice) {
        return `
            <span class="pkg-price-original">${formatPrice(markupPrice)}</span>
            <span class="pkg-price-value">${formatPrice(originalPrice)}</span>
            <span class="pkg-price-discount">${PRICING_CONFIG.markupPercentage}% OFF</span>
        `;
    }
    
    return `<span class="pkg-price-value">${formatPrice(originalPrice)}</span>`;
}

// Load package on page load
document.addEventListener('DOMContentLoaded', () => {
    if (!packageId) {
        showError('No package selected. Please go back and choose a package.');
        return;
    }

    const pkg = PACKAGES.find(p => p.id === packageId);
    
    if (!pkg) {
        showError('Package not found. Please go back and choose a valid package.');
        return;
    }

    renderPackage(pkg);
    loadRelatedPackages(pkg);
});

/**
 * Render the complete package detail page
 */
function renderPackage(pkg) {
    const main = document.getElementById('packageDetail');
    
    main.innerHTML = `
        <!-- BREADCRUMB -->
        <section class="pkg-breadcrumb">
            <div class="container">
                <a href="index.html">Home</a>
                <span class="bc-sep">›</span>
                <a href="tirupathi.html#packages">Packages</a>
                <span class="bc-sep">›</span>
                <span>${pkg.name}</span>
            </div>
        </section>

        <!-- HERO STRIP -->
        <section class="pkg-hero-strip">
            <div class="pkg-hero-img">
                <img src="${pkg.image}" alt="${pkg.name}" />
            </div>
            <div class="pkg-hero-overlay"></div>
            <div class="pkg-hero-content container">
                ${pkg.tag ? `<span class="pkg-hero-tag ${pkg.tagClass || ''}">${pkg.tag}</span>` : ''}
                <h1 class="pkg-title">${pkg.name}</h1>
                <p class="pkg-hero-subtitle">${pkg.routeShort}</p>
                
                <div class="pkg-hero-meta">
                    <span>⏱️ ${pkg.duration}</span>
                    ${pkg.routeFull ? `<span>🗺️ ${pkg.routeFull.join(' → ')}</span>` : ''}
                </div>

                <div class="pkg-hero-actions">
                    <a href="#bookingCard" class="btn btn-primary">Book Now</a>
                    <a href="https://wa.me/918639429948?text=Hi! I'm interested in ${encodeURIComponent(pkg.name)}" 
                       class="btn btn-outline" target="_blank">WhatsApp Inquiry</a>
                </div>
            </div>
        </section>

        <!-- BODY — 2 COLUMN -->
        <section class="pkg-body container">
            <!-- LEFT COLUMN -->
            <div class="pkg-left">
                
                <!-- OVERVIEW -->
                <div class="pkg-section">
                    <h2 class="pkg-section-title">Overview</h2>
                    <p class="pkg-description">${pkg.description}</p>
                    ${pkg.note ? `<div class="pkg-note">💡 <strong>Note:</strong> ${pkg.note}</div>` : ''}
                </div>

                <!-- HIGHLIGHTS -->
                ${pkg.highlights && pkg.highlights.length > 0 ? `
                <div class="pkg-section">
                    <h2 class="pkg-section-title">Highlights</h2>
                    <div class="pkg-highlights">
                        ${pkg.highlights.map(h => `<span class="hl-chip">${h}</span>`).join('')}
                    </div>
                </div>
                ` : ''}

                <!-- TEMPLE FLOW / ITINERARY -->
                ${pkg.templeFlow && pkg.templeFlow.length > 0 ? `
                <div class="pkg-section pkg-section-tf">
                    <h2 class="pkg-section-title">Journey Itinerary</h2>
                    <div class="temple-flow">
                        ${pkg.templeFlow.map((step, i) => `
                            <div class="tf-item ${i % 2 === 1 ? 'tf-reverse' : ''}">
                                <div class="tf-icon-col">
                                    <div class="tf-icon-wrap">${step.icon}</div>
                                    ${i < pkg.templeFlow.length - 1 ? '<div class="tf-line"></div>' : ''}
                                </div>
                                <div class="tf-content-col">
                                    <div class="tf-card">
                                        <span class="tf-step">Step ${i + 1}</span>
                                        <h3>${step.name}</h3>
                                        <p>${step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                <!-- INCLUDES & EXCLUDES -->
                <div class="pkg-section">
                    <h2 class="pkg-section-title">What's Included & Excluded</h2>
                    <div class="pkg-inc-exc">
                        ${pkg.includes && pkg.includes.length > 0 ? `
                        <div class="inc-col">
                            <h4>✅ Included</h4>
                            <ul>
                                ${pkg.includes.map(item => `<li><span class="inc-icon">✓</span> ${item}</li>`).join('')}
                            </ul>
                        </div>
                        ` : ''}
                        
                        ${pkg.excludes && pkg.excludes.length > 0 ? `
                        <div class="exc-col">
                            <h4>❌ Not Included</h4>
                            <ul>
                                ${pkg.excludes.map(item => `<li><span class="exc-icon">✗</span> ${item}</li>`).join('')}
                            </ul>
                        </div>
                        ` : ''}
                    </div>
                </div>

            </div>

            <!-- RIGHT COLUMN — STICKY BOOKING CARD -->
            <aside class="pkg-right" id="bookingCard">
                <div class="pkg-book-card">
                    <div class="pkg-price-block">
                        <span class="pkg-price-label">Starting From</span>
                        ${createPriceHTML(pkg.price)}
                        <span class="pkg-price-sub">per vehicle</span>
                    </div>

                    <ul class="pkg-quick-facts">
                        <li><span>Duration</span> <strong>${pkg.duration}</strong></li>
                        <li><span>Category</span> <strong>${getCategoryLabel(pkg.category)}</strong></li>
                        ${pkg.popular ? '<li><span>Status</span> <strong style="color: var(--primary-gold);">⭐ Popular</strong></li>' : ''}
                    </ul>

                    <a href="https://wa.me/918639429948?text=Hi! I want to book ${encodeURIComponent(pkg.name)} for ${formatPrice(pkg.price)}" 
                       class="btn-book-pkg" target="_blank">
                        Book This Package
                    </a>

                    <a href="https://wa.me/918639429948?text=Hi! I need more info about ${encodeURIComponent(pkg.name)}" 
                       class="btn-whatsapp-pkg" target="_blank">
                        💬 Chat on WhatsApp
                    </a>

                    <p class="pkg-book-note">
                        Instant confirmation • Flexible timing • 24/7 support
                    </p>
                </div>
            </aside>
        </section>
    `;
}

/**
 * Get human-readable category label
 */
function getCategoryLabel(category) {
    const labels = {
        'tirumala': 'Tirumala Darshan',
        'tirupati': 'Tirupati Temples',
        'outstation': 'Outstation Tour',
        'multi-day': 'Multi-Day Package',
        'transfer': 'Transfer Service',
        'one-day': 'One Day Tour'
    };
    return labels[category] || category;
}

/**
 * Load related packages (same category, excluding current)
 */
function loadRelatedPackages(currentPkg) {
    const related = PACKAGES
        .filter(p => p.category === currentPkg.category && p.id !== currentPkg.id)
        .slice(0, 4); // Show max 4 related

    if (related.length === 0) {
        document.getElementById('relatedSection').style.display = 'none';
        return;
    }

    const container = document.getElementById('relatedCards');
    
    container.innerHTML = related.map(pkg => {
        const markupPrice = calculateMarkupPrice(pkg.price);
        
        return `
            <div class="related-card">
                <div class="related-img-wrap">
                    <img src="${pkg.image}" alt="${pkg.name}" />
                    ${pkg.tag ? `<span class="related-tag ${pkg.tagClass || ''}">${pkg.tag}</span>` : ''}
                </div>
                <div class="related-body">
                    <h3>${pkg.name}</h3>
                    <p>${pkg.routeShort}</p>
                    <div class="related-footer">
                        <div class="related-price-wrapper">
                            ${markupPrice ? `<span class="related-price-strike">${formatPrice(markupPrice)}</span>` : ''}
                            <span class="related-price">${formatPrice(pkg.price)}</span>
                        </div>
                        <a href="package.html?id=${pkg.id}" class="btn btn-primary btn-sm related-btn">View</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('relatedSection').style.display = 'block';
}

/**
 * Show error message
 */
function showError(message) {
    const main = document.getElementById('packageDetail');
    main.innerHTML = `
        <div class="pkg-error">
            <div class="pkg-error-icon">⚠️</div>
            <h2>Oops!</h2>
            <p>${message}</p>
            <a href="tirupathi.html#packages" class="btn btn-primary">View All Packages</a>
        </div>
    `;
}