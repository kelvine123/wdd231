const apiKey = "60b7822b1eba34def8e7755ecd4cafa6";
const lat = "-1.286389";
const lon = "36.817223";

const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;


/* WEATHER */

async function getWeather() {

    const response = await fetch(weatherURL);
    const data = await response.json();

    document.querySelector("#current-temp").textContent =
        data.list[0].main.temp + "°C";

    document.querySelector("#weather-desc").textContent =
        data.list[0].weather[0].description;


    const forecastContainer = document.querySelector("#forecast");
    forecastContainer.innerHTML = "";

    for (let i = 0; i < 3; i++) {

        const day = data.list[i * 8];

        const div = document.createElement("p");

        div.textContent =
            new Date(day.dt_txt).toDateString() +
            " : " +
            day.main.temp + "°C";

        forecastContainer.appendChild(div);

    }

}

getWeather();


/* SPOTLIGHT MEMBERS */

const membersURL = "data/members.json";

async function getSpotlights() {

    const response = await fetch(membersURL);
    const data = await response.json();

    const members = data.members;

    const filtered =
        members.filter(member =>
            member.membership == "Gold" ||
            member.membership == "Silver"
        );


    const randomMembers =
        filtered.sort(() => 0.5 - Math.random()).slice(0, 3);


    displaySpotlights(randomMembers);

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

<p>Membership: ${member.membership}</p>

<a href="${member.website}" target="_blank">Visit Website</a>
`;

        container.appendChild(card);

    });

}

getSpotlights();