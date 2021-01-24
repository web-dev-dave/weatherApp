// Init weather
const weather = new Weather('Auckland', 'NZ');
// Init ui
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(res => {
      ui.paint(res);
    })
    .catch(err => console.log(err));
}
