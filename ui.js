class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.description = document.getElementById('description');
    this.temperature = document.getElementById('temperature');
    this.icon = document.getElementById('icon');
    this.maxTemp = document.getElementById('max-temp');
    this.minTemp = document.getElementById('min-temp');
    this.humidity = document.getElementById('humidity');
    this.wind = document.getElementById('wind');
    this.clouds = document.getElementById('clouds');
  }

  displayWeather(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.description.textContent = weather.weather[0].description;
    this.temperature.textContent = `Temperature: ${(weather.main.temp - 273.15).toFixed(1)} °C`;

    this.maxTemp.textContent = `Minimun Temperature: ${(weather.main.temp_min - 273.15).toFixed(
      1,
    )} °C`;
    this.minTemp.textContent = `Maximum Temperature: ${(weather.main.temp_max - 273.15).toFixed(
      1,
    )} °C`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
    this.clouds.textContent = `Clouds: ${weather.clouds.all}%`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
  }
}
