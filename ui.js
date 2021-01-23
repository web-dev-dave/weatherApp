class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.description = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.windDir = document.getElementById('w-wind-dir')
    this.feelsLike = document.getElementById('w-feels-like')
    this.windSpd = document.getElementById('w-wind-spd')
  }

  paint(weather) {
    this.location.textContent = weather.name
    this.description.textContent = weather.weather[0].description
    this.string.textContent = weather.main.temp + '°C'
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`
    this.windDir.textContent = `Wind Direction: ${weather.wind.deg}°`
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}°C`
    this.windSpd.textContent = `Wind Speed: ${weather.wind.speed}m/s`
  }
}