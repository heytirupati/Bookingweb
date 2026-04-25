(function () {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const pkg = PACKAGES.find(p => p.id === id);
    const detail = document.getElementById("packageDetail");

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

    const includesHTML = pkg.includes.map(i =>
        `<li><span class="inc-icon">✓</span><span>${i}</span></li>`
    ).join("");

    const excludesHTML = pkg.excludes.map(e =>
        `<li><span class="exc-icon">✗</span><span>${e}</span></li>`
    ).join("");

    const highlightsHTML = pkg.highlights.map(h =>
        `<div class="hl-chip">${h}</div>`
    ).join("");

    const routeHTML = pkg.routeFull.map((stop, i) => `
        <div class="route-node">
            <div class="route-dot ${i === 0 || i === pkg.routeFull.length - 1 ? 'route-dot-end' : ''}"></div>
            <span>${stop}</span>
        </div>
        ${i < pkg.routeFull.length - 1 ? '<div class="route-connector"></div>' : ''}
    `).join("");

    const templeFlowHTML = (pkg.templeFlow || []).map((stop, i) => `
        <div class="tf-item ${i % 2 !== 0 ? 'tf-reverse' : ''}">
            <div class="tf-icon-col">
                <div class="tf-icon-wrap">
                    <span class="tf-icon">${stop.icon}</span>
                </div>
                ${i < pkg.templeFlow.length - 1 ? '<div class="tf-vline"></div>' : ''}
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

    detail.innerHTML = `
        <div class="pkg-hero-strip">
            <div class="pkg-hero-img">
                <img src="${pkg.image}" alt="${pkg.name}">
                <div class="pkg-hero-overlay"></div>
            </div>

            <div class="container pkg-hero-content">
                <span class="pkg-hero-tag ${pkg.tagClass || ''}">${pkg.tag}</span>
                <h1>${pkg.name}</h1>
                <p>${pkg.routeShort}</p>

                <div class="pkg-hero-actions">
                    <a href="booking.html?package=${pkg.id}" class="btn btn-primary">Book Now</a>
                </div>
            </div>
        </div>

        <div class="container pkg-body">
            <div class="pkg-left">

                <div class="pkg-section">
                    <h2>About</h2>
                    <p>${pkg.description}</p>
                </div>

                <div class="pkg-section">
                    <h2>Highlights</h2>
                    <div class="pkg-highlights">${highlightsHTML}</div>
                </div>

                ${pkg.templeFlow?.length ? `
                <div class="pkg-section">
                    <h2>Your Journey</h2>
                    <div class="temple-flow">${templeFlowHTML}</div>
                </div>` : ''}

                <div class="pkg-section">
                    <h2>Route</h2>
                    <div class="pkg-route-full">${routeHTML}</div>
                </div>

                <div class="pkg-section pkg-inc-exc">
                    <div>
                        <h3>Included</h3>
                        <ul>${includesHTML}</ul>
                    </div>
                    <div>
                        <h3>Excluded</h3>
                        <ul>${excludesHTML}</ul>
                    </div>
                </div>

            </div>

            <div class="pkg-right">
                <div class="pkg-book-card">
                    <h2>₹${pkg.price.toLocaleString("en-IN")}</h2>
                    <p>${pkg.duration}</p>

                    <a href="booking.html?package=${pkg.id}" class="btn-book-pkg">
                        Book Package
                    </a>
                </div>
            </div>
        </div>
    `;

    renderRelated(pkg);
})();


// =======================
// RELATED PACKAGES
// =======================
function renderRelated(currentPkg) {

    const related = PACKAGES
        .filter(p => p.id !== currentPkg.id && (p.category === currentPkg.category || p.popular))
        .slice(0, 6);

    if (!related.length) return;

    document.getElementById("relatedSection").style.display = "block";

    document.getElementById("relatedCards").innerHTML = related.map(p => `
        <div class="related-card premium-card">
            <div class="related-img-wrap">
                <img src="${p.image}" alt="${p.name}">
                <div class="related-overlay"></div>
                <span class="related-tag">${p.tag}</span>
            </div>

            <div class="related-body">
                <h3>${p.name}</h3>
                <p>${p.routeShort}</p>

                <div class="related-footer">
                    <span>₹${p.price.toLocaleString("en-IN")}</span>
                    <a href="package.html?id=${p.id}" class="btn btn-primary">View</a>
                </div>
            </div>
        </div>
    `).join("");
}