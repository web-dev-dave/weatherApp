// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init ui
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-changebtn').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  console.log(city);
  console.log(country);

  // Call changeLocaton function
  weather.changeLocation(city, country);

  // Set location data in LS
  storage.setLocationData(city, country);

  // Call getWeather function
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then(res => {
      ui.paint(res);
    })
    .catch(err => console.log(err));
}
