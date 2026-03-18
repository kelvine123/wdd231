/* HAMBURGER MENU */

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* LAST MODIFIED */

document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;



/* WEATHER API */

const apiKey = "60b7822b1eba34def8e7755ecd4cafa6";

const lat = "-1.286389";
const lon = "36.817223";

const weatherURL =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;



async function getWeather() {

    try {

        const response = await fetch(weatherURL);

        const data = await response.json();


        document.querySelector("#current-temp").textContent =
            data.list[0].main.temp + " °C";


        document.querySelector("#weather-desc").textContent =
            data.list[0].weather[0].description;


        const forecastContainer =
            document.querySelector("#forecast");

        forecastContainer.innerHTML = "";


        for (let i = 0; i < 3; i++) {

            const day = data.list[i * 8];

            const p = document.createElement("p");

            const date =
                new Date(day.dt_txt).toDateString();

            p.textContent = `${date} : ${day.main.temp} °C`;

            forecastContainer.appendChild(p);

        }

    } catch (error) {

        console.log("Weather error:", error);

    }

}

getWeather();



/* MEMBER SPOTLIGHTS */

const membersURL = "data/members.json";


async function getSpotlights() {

    try {

        const response = await fetch(membersURL);

        const data = await response.json();


        const members = data.members;


        const filtered = members.filter(member =>

            member.membership === "Gold" ||
            member.membership === "Silver"

        );


        const shuffled =
            filtered.sort(() => Math.random() - 0.5);


        const randomMembers =
            shuffled.slice(0, 3);


        displaySpotlights(randomMembers);

    } catch (error) {

        console.log("Members error:", error);

    }

}



function displaySpotlights(members) {

    const container =
        document.querySelector("#spotlight-container");

    container.innerHTML = "";


    members.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("spotlight");


        card.innerHTML = `

<h3>${member.name}</h3>

<img src="images/${member.image}" alt="${member.name}">

<p>${member.address}</p>

<p>${member.phone}</p>

<p><strong>${member.membership}</strong> Member</p>

<a href="${member.website}" target="_blank">Visit Website</a>

`;

        container.appendChild(card);

    });

}

getSpotlights();