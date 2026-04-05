import { places } from "../data/places.mjs";

const container = document.getElementById("cards");

// Create cards
places.forEach((place, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.gridArea = `card${index + 1}`;

    card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

    container.appendChild(card);
});


// ===== LocalStorage Visit Message =====
const visitMessage = document.getElementById("visitMessage");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (days < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);


// ===== Last Modified =====
const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
    "Last Modified: " + lastModified.toLocaleString();