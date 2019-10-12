export class Weather {
  
  constructor(city) {
    this.apiKey = 'cbfb1b9f0f11663b3541ab31ce1bdac4';
    this.city = city;
   
  }

  async getWeather() {   
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }
  

  changeLocation(city) {
    this.city = city;
    
  }

}
