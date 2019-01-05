// INITIALIZING WEATHER OBJECT
const weather = new Weather('Balneario Camboriu', 'BR');
const ui = new UI();

// GET WEATHER ON PAGE LOAD
document.addEventListener(DOMContentLoaded, getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.displayWeather();
    })
    .catch(err => console.log('Something Went Wrong...'));
}
