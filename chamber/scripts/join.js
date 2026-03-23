// scripts/join.js

// Set timestamp before form submission
const form = document.getElementById("joinForm");
const timestampInput = document.getElementById("timestamp");

if (form && timestampInput) {
    form.addEventListener("submit", () => {
        timestampInput.value = new Date().toISOString();
        console.log("Timestamp set:", timestampInput.value);
    });
}

// Last modified and current year
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const lastModEl = document.getElementById("lastModified");
if (lastModEl) {
    const modifiedDate = new Date(document.lastModified);
    lastModEl.textContent = "Last Modified: " + modifiedDate.toLocaleString();
}

// Membership modal buttons
const membershipCards = [
    { card: "np", modal: "npModal" },
    { card: "bronze", modal: "bronzeModal" },
    { card: "silver", modal: "silverModal" },
    { card: "gold", modal: "goldModal" }
];

membershipCards.forEach(item => {
    const cardEl = document.querySelector(`.card.${item.card} a`);
    const modalEl = document.getElementById(item.modal);

    if (cardEl && modalEl) {
        cardEl.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent link default
            modalEl.showModal();
        });
    }
});