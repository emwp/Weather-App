// INITIALIZING WEATHER OBJECT
const weather = new Weather('BALNEARIO CAMBORIU', 'BR');
const ui = new UI();

// GET WEATHER ON PAGE LOAD
document.addEventListener('DOMContentLoaded', getWeather);

// CHANGE CITY
document.getElementById('change-btn').addEventListener('click', event => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(city, country);

  getWeather();

  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.displayWeather(results);
    })
    .catch(err => console.log(err));
}
