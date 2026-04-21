const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});



// IMAGE SLIDER (3 sec)
let images = document.querySelectorAll(".carousel img");
let index = 0;

setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
}, 3000);


// TYPING EFFECT
const text = "Relax, we will take care of your trip";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("type-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

typing();