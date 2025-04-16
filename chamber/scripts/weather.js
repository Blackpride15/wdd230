const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=4.99&lon=8.35&units=imperial&appid=b01cb4ec8bec0c657be7110db8ac74ba';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=4.99&lon=8.35&units=imperial&appid=b01cb4ec8bec0c657be7110db8ac74ba';

// Current Weather
fetch(weatherURL)
    .then((response) => response.json())
    .then((data) => {
        const temperature = data.main.temp.toFixed(1);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        document.getElementById('current-temp').textContent = `${temperature}°F`;
        const weatherIcon = document.getElementById('weather-icon');
        weatherIcon.setAttribute('src', iconURL);
        weatherIcon.setAttribute('alt', description);
        document.querySelector('figcaption').textContent = description;
    })
    .catch((error) => {
        console.error('Error fetching current weather:', error);
    });

// 3-Day Forecast
fetch(forecastURL)
    .then((response) => response.json())
    .then((data) => {
        const forecastSection = document.createElement('section');
        forecastSection.innerHTML = `<h3>3-Day Forecast</h3>`;

        let dayCounter = 0;
        let lastDate = '';

        data.list.forEach((forecast) => {
            const dateTime = forecast.dt_txt;
            const [date, time] = dateTime.split(' ');

            // pick 12:00 PM forecasts for the next 3 unique days
            if (time === '12:00:00' && date !== lastDate && dayCounter < 3) {
                const dayName = new Date(dateTime).toLocaleDateString('en-US', { weekday: 'long' });
                const temp = forecast.main.temp.toFixed(1);
                const desc = forecast.weather[0].description;
                const icon = forecast.weather[0].icon;
                const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

                const dayForecast = document.createElement('div');
                dayForecast.classList.add('forecast-day');
                dayForecast.innerHTML = `
          <h4>${dayName}</h4>
          <img src="${iconURL}" alt="${desc}">
          <p>${temp}°F - ${desc}</p>
        `;

                forecastSection.appendChild(dayForecast);
                dayCounter++;
                lastDate = date;
            }
        });
        document.querySelector('.weather #forecast-container').appendChild(forecastSection);
        
    })
    .catch((error) => {
        console.error('Error fetching forecast:', error);
    });
