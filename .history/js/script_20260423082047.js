/* ============================================================
   SCRIPT.JS — Shared logic for index.html & tirupati.html
   ============================================================ */

/* ─── NAV SCROLL ─── */
const mainNav = document.getElementById('mainNav');
if (mainNav) {
  window.addEventListener('scroll', () => {
    mainNav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* ─── MOBILE NAV ─── */
const burger = document.getElementById('navBurger');
if (burger) {
  burger.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    if (links) links.classList.toggle('open');
  });
}

/* ─── PARTICLES ─── */
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  const count = 28;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      animation-delay: ${Math.random() * 8}s;
      animation-duration: ${8 + Math.random() * 12}s;
      opacity: ${Math.random() * 0.5 + 0.1};
    `;
    container.appendChild(p);
  }
}
initParticles();

/* ─── CARD TEMPLATE ─── */
function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

function createCard(pkg) {
  const hl = (pkg.overview?.highlights || []).slice(0, 3);
  const gradients = {
    'tirupati': 'linear-gradient(135deg, #2a1200 0%, #3d1f00 100%)',
    'outstation': 'linear-gradient(135deg, #0d0019 0%, #1a0033 100%)'
  };
  const bg = pkg.heroGradient || gradients[pkg.category] || gradients['tirupati'];

  const card = document.createElement('div');
  card.className = 'pkg-card';
  card.setAttribute('data-category', pkg.category);
  card.innerHTML = `
    <div class="card-img-wrap">
      ${pkg.image
        ? `<img src="${pkg.image}" alt="${pkg.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
        : ''
      }
      <div class="card-img-placeholder" style="background:${bg};${pkg.image ? 'display:none' : ''}">🛕</div>
      ${pkg.badge ? `<div class="card-badge">${pkg.badge}</div>` : ''}
      <div class="card-duration-pill">⏱ ${pkg.duration}</div>
    </div>
    <div class="card-body">
      <h3 class="card-title">${pkg.name}</h3>
      <p class="card-route">🗺 ${pkg.route}</p>
      <div class="card-highlights">
        ${hl.map(h => `<span class="card-hl-tag">${h}</span>`).join('')}
      </div>
      <div class="card-footer">
        <div class="card-price-block">
          ${pkg.originalPrice ? `<div class="card-price-original">${formatPrice(pkg.originalPrice)}</div>` : ''}
          <div class="card-price-main">${formatPrice(pkg.price)}</div>
        </div>
        <button class="card-book-btn" onclick="goToPackage('${pkg.id}', event)">
          View Details
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  `;
  card.addEventListener('click', () => goToPackage(pkg.id));
  return card;
}

function goToPackage(id, e) {
  if (e) e.stopPropagation();
  window.location.href = `package.html?id=${id}`;
}

/* ─── RENDER CARDS ─── */
function renderCards(category) {
  const grid = document.getElementById('cardsGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const list = category && category !== 'all'
    ? PACKAGES.filter(p => p.category === category)
    : PACKAGES;

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;">
        <p style="font-family:var(--font-body);font-size:1.2rem;color:rgba(255,255,255,0.4);font-style:italic;">
          No packages found.
        </p>
      </div>`;
    return;
  }

  list.forEach((pkg, i) => {
    const card = createCard(pkg);
    card.style.animationDelay = `${i * 0.08}s`;
    grid.appendChild(card);
  });
}

/* ─── FILTER BUTTONS ─── */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards(btn.dataset.filter);
    });
  });
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  const category = window.PAGE_CATEGORY || null;
  renderCards(category);
  initFilters();
});