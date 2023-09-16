import { fetchData } from './api';
import displayWeatherData from './ui';
import setLocation from './localStorage';

export default function handler() {
  //   const searchCityButton = document.querySelector('#searchCityButton');
  //   searchCityButton.addEventListener('click', fetchData);
  const searchCityForm = document.querySelector('#searchCityForm');
  const input = document.querySelector('input');
  const error = document.querySelector('#error');
  searchCityForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const data = await fetchData(input.value);
    console.log(data);
    
    if (data instanceof Error) {
      console.log('error!!!sdfsfds');
      error.classList.remove('hidden');
    } else {
      error.classList.add('hidden');
      displayWeatherData(data);
      setLocation(input.value);
    }
    searchCityForm.reset();
  });
}

