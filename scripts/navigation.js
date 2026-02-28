const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navigation");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});