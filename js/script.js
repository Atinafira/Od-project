function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const toggle = item.querySelector(".faq-toggle");

        question.addEventListener("click", function () {
            answer.classList.toggle("active");

            if (answer.classList.contains("active")) {
                answer.style.display = "block";
                toggle.textContent = "-";
            } else {
                answer.style.display = "none";
                toggle.textContent = "+";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
