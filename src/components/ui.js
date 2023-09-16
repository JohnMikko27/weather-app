export default function displayWeatherData(data) {
//   const weatherInformationContainer = document.querySelector('#weatherInformationContainer');
  console.log(data);
  //   weatherInformationContainer.textContent = `${data.country}, ${data.name}, ${data.region}, ${data.weatherCondition}, 
  //                                              ${data.humidity}, ${data.temp_c}, ${data.temp_f}, ${data.wind_mph}`;
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