/* 
 * when the client searches something up in the search bar and enters, (controller.js)
 * then get that data (city) get that city's weather data from the api (api.js)
 * then display the information from that request onto the page (ui..js)
 * remember to look at programming notes and apply them, especially OOP principles/DRY/SOLID principles
 * make sure to utilize functions and api.js and ui.js should not have any functions within one another, it should only be within controller.js
 */

// set an onload function that fetches the previously requested city after each reload into the webpage



const processData = async(response) => {
  const data = await response.json();
  const dataCurrent = data.current;
  const dataLocation = data.location;
    
  // object destructuring requires exact names
  // eslint-disable-next-line camelcase
  const { condition, humidity, temp_c, temp_f, wind_mph } = dataCurrent; 
  const { country, name, region } = dataLocation;
  const weatherCondition = condition.text;

  // eslint-disable-next-line camelcase
  return { country, name, region, weatherCondition, humidity, temp_c, temp_f, wind_mph };
};


// the fetchData should send an error if the city sent was empty or not a city

// eslint-disable-next-line import/prefer-default-export, consistent-return
export async function fetchData() {
  try {
    const input = document.querySelector('input');
    const apiKey = '90ba82aa379048c3b86181742232108';
    
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}`, {mode: 'cors'});
    const processedData = await processData(response);
    console.log(processedData);
    return processedData;
  } catch(error) {
    // console.log(error);
    return error;
  }

};

/* 
 * might have to move this event listener in controller or somthing
 * and have the callback be a displayWeather function or something 
 * where displayWeather will get data from the fetchData or whatever functions, create the appropriate ui, and display it
 */ 

