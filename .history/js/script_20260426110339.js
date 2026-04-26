// ============================================================
//  script.js — Yatrahere (Updated)
// ============================================================


// ============================================================
//  1. MOBILE MENU
// ============================================================
(function () {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("navMenu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("active");
        toggle.textContent = menu.classList.contains("active") ? "✕" : "☰";
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            toggle.textContent = "☰";
        });
    });

    document.addEventListener("click", () => {
        menu.classList.remove("active");
        toggle.textContent = "☰";
    });
})();


// ============================================================
//  2. DROPDOWN
// ============================================================
(function () {
    document.querySelectorAll(".nav-trigger").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const parent = btn.closest(".has-dropdown");

            document.querySelectorAll(".has-dropdown").forEach(el => el.classList.remove("open"));
            parent.classList.toggle("open");
        });
    });

    document.addEventListener("click", () => {
        document.querySelectorAll(".has-dropdown").forEach(el => el.classList.remove("open"));
    });
})();


// ============================================================
//  3. CAROUSEL
// ============================================================
(function () {
    const slides = document.querySelectorAll(".carousel img");
    if (!slides.length) return;

    let i = 0;
    setInterval(() => {
        slides[i].classList.remove("active");
        i = (i + 1) % slides.length;
        slides[i].classList.add("active");
    }, 3000);
})();


// ============================================================
//  4. TESTIMONIAL SCROLL
// ============================================================
(function () {
    const track = document.querySelector(".testimonial-track");
    if (!track) return;

    let scroll = 0;
    const t = setInterval(() => {
        scroll++;
        track.scrollLeft = scroll;
        if (scroll >= track.scrollWidth - track.clientWidth) scroll = 0;
    }, 20);

    track.addEventListener("touchstart", () => clearInterval(t));
})();


// ============================================================
//  5. CARD FLIP
// ============================================================
(function () {
    document.querySelectorAll(".package-card").forEach(card => {
        card.addEventListener("click", () => card.classList.toggle("active"));
    });
})();


// ============================================================
//  6. INDEX POPULAR PACKAGES
// ============================================================
(function () {
    const container = document.getElementById("popularPackageCards");
    if (!container || typeof PACKAGES === "undefined") return;

    const popular = PACKAGES.filter(p => p.popular);

    container.innerHTML = popular.map(p => `
        <a href="package.html?id=${p.id}" class="pop-pkg-card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>${p.routeShort}</p>
            <div>₹${p.price}</div>
        </a>
    `).join("");
})();


// ============================================================
//  7. TIRUPATI PAGE
// ============================================================
(function () {
    const container = document.getElementById("allPackageCards");
    if (!container || typeof PACKAGES === "undefined") return;

    function render(list) {
        container.innerHTML = list.map(p => `
            <div class="package-full-card">
                <h3>${p.name}</h3>
                <p>${p.routeShort}</p>
                <span>₹${p.price}</span>
                <a href="package.html?id=${p.id}">View</a>
            </div>
        `).join("");
    }

    render(PACKAGES);
})();


// ============================================================
//  8. PACKAGE DETAIL
// ============================================================
(function () {
    const detail = document.getElementById("packageDetail");
    if (!detail || typeof PACKAGES === "undefined") return;

    const id = new URLSearchParams(window.location.search).get("id");
    const pkg = PACKAGES.find(p => p.id === id);

    if (!pkg) {
        detail.innerHTML = `<h2>Package not found</h2>`;
        return;
    }

    detail.innerHTML = `
        <h1>${pkg.name}</h1>
        <p>${pkg.description}</p>
        <div>₹${pkg.price}</div>
        <a href="booking.html?package=${pkg.id}">Book Now</a>
    `;
})();


// ============================================================
//  9. BOOKING PAGE (MAIN LOGIC)
// ============================================================
(function () {

    const form = document.getElementById("bookingForm");
    if (!form || typeof PACKAGES === "undefined") return;

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwK2iJHY3h7BSFlUR7wPW-Q8FFdgwA5g7lLYM417QIYtT8BIEzMPImFFo4-PKAhUFvR/exec";

    const tripSelect = document.getElementById("tripSelect");
    const customMain = document.getElementById("customTripMain");
    const customBox  = document.getElementById("customTripOptions");
    const customList = document.getElementById("customTripList");

    const phoneInput = document.getElementById("phone");
    const dateInput  = document.getElementById("dateInput");

    const submitBtn = document.querySelector(".btn-book");
    const popup     = document.getElementById("successPopup");
    const closeBtn  = document.getElementById("closePopup");


    // =========================
    // LOAD PACKAGES
    // =========================
    PACKAGES.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = `${p.name} — ₹${p.price}`;
        tripSelect.appendChild(opt);
    });


    // =========================
    // DATE MIN TODAY
    // =========================
    dateInput.min = new Date().toISOString().split("T")[0];


    // =========================
    // CUSTOM TRIP TOGGLE
    // =========================
    customMain.addEventListener("change", () => {
        if (customMain.value) {
            customBox.style.display = "block";
            tripSelect.value = "";
            tripSelect.disabled = true;
        } else {
            customBox.style.display = "none";
            tripSelect.disabled = false;
        }
    });


    // =========================
    // PACKAGE SELECT
    // =========================
    tripSelect.addEventListener("change", () => {
        if (tripSelect.value) {
            customMain.value = "";
            customBox.style.display = "none";
        }
    });


    // =========================
    // PHONE LIVE VALIDATION
    // =========================
    phoneInput.addEventListener("input", () => {
        phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 10);

        phoneInput.style.borderColor =
            /^[6-9]\d{9}$/.test(phoneInput.value) ? "green" : "red";
    });


    // =========================
    // SUBMIT
    // =========================
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const phone = phoneInput.value.trim();
        const pkg   = tripSelect.value;
        const custom = Array.from(customList.selectedOptions).map(o => o.value);

        // validation
        if (!pkg && custom.length === 0) {
            alert("Select Package OR Design Trip");
            return;
        }

        if (pkg && custom.length > 0) {
            alert("Cannot select both Package & Custom Trip");
            return;
        }

        if (!/^[6-9]\d{9}$/.test(phone)) {
            alert("Invalid phone number");
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerText = "Processing...";

        // attach custom trip
        if (custom.length > 0) {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = "customTrip";
            input.value = custom.join(", ");
            form.appendChild(input);
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

            submitBtn.disabled = false;
            submitBtn.innerText = "Confirm Booking";
        })
        .catch(() => {
            alert("Submission failed");
            submitBtn.disabled = false;
            submitBtn.innerText = "Confirm Booking";
        });
    });


    // =========================
    // CLOSE POPUP
    // =========================
    closeBtn?.addEventListener("click", () => {
        window.location.href = "index.html";
    });

})();