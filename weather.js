class Weather {
  constructor(city, country) {
    this.apiKey = '493cf9b3f74afd4861f70a32b7d4b9c1';
    this.city = city;
    this.country = country;
  }

  // FUNCTION TO GET THE WEATHER INFO
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${
        this.apiKey
      }`,
    );

    const responseData = await response.json();

    return responseData;
  }

  // CHANGE THE LOCATION
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
