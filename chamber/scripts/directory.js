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
<img src="images/${member.image}" alt="${member.name}">
<p>${member.address}</p>
<p>${member.phone}</p>
<p><a href="${member.website}" target="_blank">Visit Website</a></p>
`;

        container.appendChild(card);

    });

}

document.getElementById("gridBtn").addEventListener("click", () => {

    container.classList.add("grid");
    container.classList.remove("list");

});

document.getElementById("listBtn").addEventListener("click", () => {

    container.classList.add("list");
    container.classList.remove("grid");

});

document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

getMembers();