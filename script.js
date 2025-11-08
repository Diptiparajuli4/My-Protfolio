// Typewriter Effect
const typewriterText = document.querySelector(".typewriter-text");
const words = ["an Aspiring Web Developer", "a Passionate Learner", "a Future IT Professional"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    typewriterText.textContent = currentWord.substring(0, letterIndex);

    if (!isDeleting && letterIndex < currentWord.length) {
        letterIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && letterIndex > 0) {
        letterIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 700);
    }
}
typeEffect();

// Mobile Menu Toggle
const hamburger = document.querySelector(".hambung");
const dropdown = document.querySelector(".dropdown");
const closeBtn = document.querySelector(".close");

hamburger.addEventListener("click", () => {
    dropdown.style.display = "block";
});
closeBtn.addEventListener("click", () => {
    dropdown.style.display = "none";
});

// Scroll animations for fade-in
const fadeElements = document.querySelectorAll(".fade-in");
function checkFade() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);
