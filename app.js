// Init weather
const weather = new Weather('Auckland', 'NZ')

weather.getWeather() 
  .then(res => console.log(res))
  .catch(err => console.log(err))