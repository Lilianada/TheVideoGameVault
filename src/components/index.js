const toggle = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("change");
    navbar.classList.toggle("active-navbar");
});
