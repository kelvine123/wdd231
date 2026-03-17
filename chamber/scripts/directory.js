const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {

    container.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `
        <h3>${member.name}</h3>

        <img src="images/${member.image}" 
             alt="${member.name} logo"
             loading="lazy">

        <p><strong>Address:</strong> ${member.address}</p>

        <p><strong>Phone:</strong> ${member.phone}</p>

        <p><strong>Membership:</strong> ${member.membership}</p>

        <p>
        <a href="${member.website}" target="_blank">
        Visit Website
        </a>
        </p>
        `;

        container.appendChild(card);
    });
}

getMembers();


// GRID VIEW
document.querySelector("#gridBtn").addEventListener("click", () => {
    container.classList.add("grid-view");
    container.classList.remove("list-view");
});


// LIST VIEW
document.querySelector("#listBtn").addEventListener("click", () => {
    container.classList.add("list-view");
    container.classList.remove("grid-view");
});


// HAMBURGER MENU
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}


// LAST MODIFIED
document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;