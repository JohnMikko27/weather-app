export default function displayWeatherData(data) {
  console.log(data);
  const location = document.querySelector('#location');
  const weatherCondition = document.querySelector('#weatherCondition');
  const fahrenheit = document.querySelector('#fahrenheit');
  const celsius = document.querySelector('#celsius');
  const windSpeed = document.querySelector('#windSpeed');
  const humidity = document.querySelector('#humidity');

  location.textContent = `${data.name}, ${data.country}`;
  weatherCondition.textContent = `${data.weatherCondition}`;
  celsius.textContent = `CELSIUS: ${data.temp_c}`;
  fahrenheit.textContent = `${data.temp_f}`;
  windSpeed.textContent = `WIND SPEED: ${data.wind_mph} MPH`;
  humidity.textContent = `HUMIDITY: ${data.humidity}%`;
};