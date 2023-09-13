import { fetchData } from './api';
import displayData from './ui';

export default function handler() {
  //   const searchCityButton = document.querySelector('#searchCityButton');
  //   searchCityButton.addEventListener('click', fetchData);
  const searchCityForm = document.querySelector('#searchCityForm');
  searchCityForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const data = await fetchData();
    console.log(data);
    displayData(data);
    searchCityForm.reset();
  });
}