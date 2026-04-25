/* ============================================================
   PACKAGE.JS — Dynamic detail page renderer
   ============================================================ */

(function () {
  /* ─── READ URL PARAM ─── */
  const urlParams = new URLSearchParams(window.location.search);
  const pkgId = urlParams.get('id');

  /* ─── HELPERS ─── */
  function fmt(n) {
    return '₹' + n.toLocaleString('en-IN');
  }
  function el(id) {
    return document.getElementById(id);
  }
  function setText(id, val) {
    const e = el(id);
    if (e) e.textContent = val;
  }
  function setHTML(id, val) {
    const e = el(id);
    if (e) e.innerHTML = val;
  }

  /* ─── LOAD ─── */
  function load() {
    if (!pkgId) { showNotFound(); return; }
    const pkg = getPackageById(pkgId);
    if (!pkg) { showNotFound(); return; }

    document.title = `${pkg.name} — Tirupati Travels`;
    render(pkg);
  }

  function showNotFound() {
    const nf = el('notFound');
    const main = el('pkgMain');
    if (nf) nf.style.display = 'flex';
    if (main) main.style.display = 'none';
  }

  /* ─── RENDER ALL SECTIONS ─── */
  function render(pkg) {
    renderHero(pkg);
    renderIntro(pkg);
    renderHighlights(pkg);
    renderTempleFlow(pkg);
    renderAddOns(pkg);
    renderNotes(pkg);
    renderSimilar(pkg);
    initBookButtons(pkg);
    initScrollReveal();
  }

  /* ── HERO ── */
  function renderHero(pkg) {
    // Background
    const bg = el('pkgHeroBg');
    if (bg) {
      if (pkg.image) {
        bg.style.backgroundImage = `url(${pkg.image})`;
      } else {
        bg.style.background = pkg.heroGradient || 'linear-gradient(135deg, #1a0800, #0e0500)';
      }
    }

    // Badge
    const badge = el('pkgBadge');
    if (badge && pkg.badge) {
      badge.textContent = pkg.badge;
    } else if (badge) {
      badge.style.display = 'none';
    }

    setText('pkgHeroTitle', pkg.name);
    setText('pkgHeroTagline', pkg.tagline || '');
    setText('pkgDuration', pkg.duration);
    setText('pkgRoute', pkg.route);

    // Price
    const orig = el('pkgOriginalPrice');
    if (orig && pkg.originalPrice) {
      orig.textContent = fmt(pkg.originalPrice);
    } else if (orig) {
      orig.style.display = 'none';
    }
    setText('pkgPrice', fmt(pkg.price));

    // Accent color override
    if (pkg.accentColor) {
      document.documentElement.style.setProperty('--pkg-accent', pkg.accentColor);
    }
  }

  /* ── INTRO ── */
  function renderIntro(pkg) {
    const ov = pkg.overview;
    if (!ov) return;

    // Eyebrow
    setText('pkgIntroEyebrow', `About — ${pkg.name}`);

    // Intro text
    setText('pkgIntroBody', ov.intro || '');

    // Includes
    const incList = el('pkgIncludesList');
    if (incList && pkg.includes) {
      incList.innerHTML = pkg.includes.map(i => `<li>${i}</li>`).join('');
    }

    // Excludes
    const excList = el('pkgExcludesList');
    if (excList && pkg.excludes) {
      excList.innerHTML = pkg.excludes.map(i => `<li>${i}</li>`).join('');
    }
  }

  /* ── HIGHLIGHTS ── */
  function renderHighlights(pkg) {
    const grid = el('highlightsGrid');
    if (!grid || !pkg.overview?.highlights) return;

    const icons = ['🚗', '👨‍✈️', '🛕', '💰', '⏰', '🛡️', '📍', '✨'];
    grid.innerHTML = pkg.overview.highlights.map((h, i) => `
      <div class="highlight-item reveal" style="transition-delay:${i * 0.07}s">
        <div class="hl-icon">${icons[i % icons.length]}</div>
        <span class="hl-text">${h}</span>
      </div>
    `).join('');
  }

  /* ── TEMPLE FLOW (ZIG-ZAG) ── */
  function renderTempleFlow(pkg) {
    const flow = el('routeFlow');
    if (!flow || !pkg.overview?.templeFlow) return;

    const temples = pkg.overview.templeFlow;
    const gradients = [
      'linear-gradient(135deg, #1a0800, #2a1200)',
      'linear-gradient(135deg, #000d1a, #001833)',
      'linear-gradient(135deg, #0d001a, #1a0030)',
      'linear-gradient(135deg, #001a00, #003300)'
    ];

    flow.innerHTML = temples.map((t, i) => {
      const isEven = i % 2 !== 0; // even index = zig (flipped)
      return `
        ${i > 0 ? '<div class="route-divider"></div>' : ''}
        <div class="route-stop">
          <div class="route-img-col ${isEven ? 'reveal-right' : 'reveal-left'}" style="transition-delay:${i * 0.1}s">
            <div class="route-img-card">
              ${t.image
                ? `<img src="${t.image}" alt="${t.name}" loading="lazy" onerror="this.style.display='none';this.nextSibling.style.display='flex'">`
                : ''
              }
              <div class="route-img-placeholder" style="background:${gradients[i % gradients.length]};${t.image ? 'display:none' : ''}">
                ${t.icon || '🛕'}
              </div>
              ${t.duration ? `<div class="route-img-duration">⏱ ${t.duration}</div>` : ''}
            </div>
          </div>

          <div class="route-node-col">
            <div class="route-node">
              ${t.icon || '🛕'}
              <span class="route-node-number">${i + 1}</span>
            </div>
          </div>

          <div class="route-info-col ${isEven ? 'reveal-left' : 'reveal-right'}" style="transition-delay:${i * 0.1 + 0.05}s">
            <p class="route-stop-num">Stop ${i + 1} of ${temples.length}</p>
            <h3 class="route-stop-name">${t.name}</h3>
            ${t.subtitle ? `<p class="route-stop-subtitle">${t.subtitle}</p>` : ''}
            <p class="route-stop-desc">${t.desc}</p>
            <div class="route-info-tags">
              ${t.duration ? `<span class="route-tag">⏱ ${t.duration}</span>` : ''}
              <span class="route-tag">🛕 Sacred Site</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  /* ── ADD-ONS ── */
  function renderAddOns(pkg) {
    const section = el('addOnsSection');
    const grid = el('addonsGrid');
    if (!grid) return;

    if (!pkg.addOns || pkg.addOns.length === 0) {
      if (section) section.style.display = 'none';
      return;
    }

    grid.innerHTML = pkg.addOns.map(a => `
      <div class="addon-card reveal">
        <div class="addon-icon-wrap">${a.icon || '✨'}</div>
        <div class="addon-info">
          <div class="addon-name">${a.name}</div>
          ${a.price > 0
            ? `<div class="addon-price">+${fmt(a.price)}</div>`
            : `<span class="addon-free">Complimentary</span>`
          }
        </div>
      </div>
    `).join('');
  }

  /* ── NOTES ── */
  function renderNotes(pkg) {
    const grid = el('notesGrid');
    if (!grid || !pkg.overview?.notes) return;

    grid.innerHTML = pkg.overview.notes.map((note, i) => `
      <div class="note-item reveal" style="transition-delay:${i * 0.06}s">
        <div class="note-num">${i + 1}</div>
        <p class="note-text">${note}</p>
      </div>
    `).join('');
  }

  /* ── SIMILAR PACKAGES ── */
  function renderSimilar(pkg) {
    const track = el('similarTrack');
    const section = el('similarSection');
    if (!track) return;

    const others = PACKAGES.filter(p => p.id !== pkg.id);
    if (others.length === 0) {
      if (section) section.style.display = 'none';
      return;
    }

    const gradients = {
      'tirupati': 'linear-gradient(135deg, #2a1200, #3d1f00)',
      'outstation': 'linear-gradient(135deg, #0d0019, #1a0033)'
    };

    track.innerHTML = others.map(p => `
      <div class="similar-card" onclick="location.href='package.html?id=${p.id}'">
        <div class="similar-card-img">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextSibling.style.display='flex'">`
            : ''
          }
          <div class="similar-card-img-placeholder" style="background:${gradients[p.category] || gradients.tirupati};${p.image ? 'display:none' : ''}">
            🛕
          </div>
        </div>
        <div class="similar-card-body">
          <div class="similar-card-name">${p.name}</div>
          <div class="similar-card-dur">⏱ ${p.duration}</div>
          <div class="similar-card-footer">
            <div class="similar-card-price">${fmt(p.price)}</div>
            <button class="similar-card-btn">View</button>
          </div>
        </div>
      </div>
    `).join('');

    // Arrow scroll
    const left = el('similarLeft');
    const right = el('similarRight');
    if (left) left.addEventListener('click', () => { track.scrollBy({ left: -320, behavior: 'smooth' }); });
    if (right) right.addEventListener('click', () => { track.scrollBy({ left: 320, behavior: 'smooth' }); });
  }

  /* ── BOOK BUTTONS ── */
  function initBookButtons(pkg) {
    const bookUrl = `booking.html?id=${pkg.id}`;

    ['pkgHeroBookBtn', 'pkgBottomBookBtn', 'navBookBtn'].forEach(id => {
      const btn = el(id);
      if (btn) btn.href = bookUrl;
    });
  }

  /* ── SCROLL REVEAL ── */
  function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    targets.forEach(t => observer.observe(t));
  }

  /* ─── RUN ─── */
  document.addEventListener('DOMContentLoaded', load);

})();