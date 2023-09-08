/* 
 * when the client searches something up in the search bar and enters, 
 * then get that data (city) get that city's weather data from the api
 */

// weather api key: 90ba82aa379048c3b86181742232108
const apiKey = '90ba82aa379048c3b86181742232108'
const city = document.querySelector('input');
const button = document.querySelector('button');
export default function s() {
    button.addEventListener('click', async() => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city.value}`, {mode: 'cors'})
        console.log(response)
        const data = await response.json();
        console.log(data);
        
    })
}
