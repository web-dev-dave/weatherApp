class Weather {
  constructor(city, country) {
    (this.apiKey = 'adb374e709dd58e5d62b2b5f44627661'),
      (this.city = city),
      (this.country = country);
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    (this.city = city), (this.country = country);
  }
}
