// Related packages — STATIC GRID (NO SCROLL / NO ANIMATION)
const related = PACKAGES
    .filter(p => p.id !== pkg.id && (p.category === pkg.category || p.popular))
    .slice(0, 6);

if (related.length) {
    document.getElementById("relatedSection").style.display = "block";

    document.getElementById("relatedCards").innerHTML = related.map(p => `
        <div class="related-card">
            <div class="related-img-wrap">
                <img src="${p.image}" alt="${p.name}">
                <span class="related-tag ${p.tagClass || ''}">${p.tag}</span>
            </div>
            <div class="related-body">
                <h3>${p.name}</h3>
                <p>${p.routeShort}</p>
                <div class="related-footer">
                    <span class="related-price">₹${p.price.toLocaleString('en-IN')}</span>
                    <a href="package.html?id=${p.id}" class="btn btn-primary related-btn">View</a>
                </div>
            </div>
        </div>
    `).join('');
}