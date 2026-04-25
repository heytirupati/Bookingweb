// ================================
// NAVBAR (FIXED MOBILE)
// ================================
(function () {
    const toggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const triggers = document.querySelectorAll(".nav-trigger");

    if (toggle && navMenu) {
        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.toggle("active");
            toggle.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
        });

        document.querySelectorAll("#navMenu a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                toggle.textContent = "☰";
            });
        });
    }

    triggers.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const li = btn.closest("li");
            li.classList.toggle("open");
        });
    });

    document.addEventListener("click", () => {
        document.querySelectorAll(".has-dropdown").forEach(el => el.classList.remove("open"));
    });
})();


// ================================
// HERO SLIDER
// ================================
const slides = document.querySelectorAll(".carousel img");
if (slides.length) {
    let index = 0;
    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 3000);
}


// ================================
// TESTIMONIAL AUTO SCROLL
// ================================
const testimonialTrack = document.querySelector(".testimonial-track");
if (testimonialTrack) {
    let scroll = 0;
    setInterval(() => {
        scroll += 1;
        testimonialTrack.scrollLeft = scroll;
        if (scroll >= testimonialTrack.scrollWidth - testimonialTrack.clientWidth) {
            scroll = 0;
        }
    }, 20);
}


// ================================
// BOOKING FORM (REALTIME VALIDATION)
// ================================
const form = document.getElementById("bookingForm");

if (form) {
    const phone = document.getElementById("phone");

    // create error element
    function showError(input, message) {
        let err = input.parentElement.querySelector(".error-text");
        if (!err) {
            err = document.createElement("small");
            err.className = "error-text";
            input.parentElement.appendChild(err);
        }
        err.innerText = message;
        input.classList.add("error");
    }

    function clearError(input) {
        const err = input.parentElement.querySelector(".error-text");
        if (err) err.remove();
        input.classList.remove("error");
    }

    // realtime phone validation
    phone.addEventListener("input", () => {
        const val = phone.value.trim();
        if (!/^[6-9]\d{9}$/.test(val)) {
            showError(phone, "Enter valid 10-digit number");
        } else {
            clearError(phone);
        }
    });

    // submit
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const val = phone.value.trim();
        if (!/^[6-9]\d{9}$/.test(val)) {
            showError(phone, "Invalid mobile number");
            return;
        }

        const submitBtn = document.querySelector(".btn-book");
        submitBtn.innerText = "Processing...";
        submitBtn.disabled = true;

        fetch("YOUR_GOOGLE_SCRIPT_URL", {
            method: "POST",
            body: new FormData(form)
        })
        .then(() => {
            document.getElementById("successPopup").style.display = "block";
            form.reset();
            submitBtn.innerText = "Confirm Booking";
            submitBtn.disabled = false;
        })
        .catch(() => {
            submitBtn.innerText = "Try Again";
            submitBtn.disabled = false;
        });
    });
}