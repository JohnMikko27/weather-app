/* 
 * when the client searches something up in the search bar and enters, (controller.js)
 * then get that data (city) get that city's weather data from the api (api.js)
 * then display the information from that request onto the page (ui..js)
 * remember to look at programming notes and apply them, especially OOP principles/DRY/SOLID principles
 * make sure to utilize functions and api.js and ui.js should not have any functions within one another, it should only be within controller.js
 */

const fetchData = async() => {
    const input = document.querySelector('input');
    const apiKey = '90ba82aa379048c3b86181742232108';

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}`, {mode: 'cors'});
    console.log(response);
    const data = await response.json();
    console.log(data);
    // return data 
}

/* 
 * might have to move this event listener in controller or somthing
 * and have the callback be a displayWeather function or something 
 * where displayWeather will get data from the fetchData or whatever functions, create the appropriate ui, and display it
 *  
 */ 
export default function s() {
    const button = document.querySelector('button');
    button.addEventListener('click', fetchData);
}
