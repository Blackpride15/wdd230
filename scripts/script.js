const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.rockstar');


hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open')
});


const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});



const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `You are the first visit. Welcome!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?'; // Base URL for the Current Weather API

const latitude = -23;
const longitude = -51;

// API key
const apiKey = '9e230d3576f759836a3f9cddddfe63d7';

// Construct the complete URL with query parameters
const completeUrl = `${url}lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;


async function apiFetch() {
    try {
        const response = await fetch(completeUrl); // Use completeUrl variable here
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`; // Display current temperature
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // Construct URL for weather icon
    let desc = data.weather[0].description; // Get weather description
    weatherIcon.setAttribute('src', iconsrc); // Set weather icon src attribute
    weatherIcon.setAttribute('alt', desc); // Set weather icon alt attribute
    captionDesc.textContent = `${desc}`; // Display weather description
}