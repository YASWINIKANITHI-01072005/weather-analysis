async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "311a636741567b426cb802f8b966135e"; // Replace with your actual OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    const result = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById("weatherResult").innerHTML = result;
  } else {
    document.getElementById("weatherResult").innerHTML = `<p>City not found. Try again.</p>`;
  }
}
