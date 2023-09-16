import { fetchData } from './api';
import displayWeatherData from './ui';

export default function handler() {
  //   const searchCityButton = document.querySelector('#searchCityButton');
  //   searchCityButton.addEventListener('click', fetchData);
  const searchCityForm = document.querySelector('#searchCityForm');
  const error = document.querySelector('#error');
  searchCityForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const data = await fetchData();
    console.log(data);
    
    if (data instanceof Error) {
      console.log('error!!!sdfsfds');
      error.classList.toggle('hidden');
    } else {
      error.classList.toggle('error');
      displayWeatherData(data);
    }
    
    searchCityForm.reset();
  });
}

