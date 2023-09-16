import { fetchData } from './api';
import displayWeatherData from './ui';

export default function setLocation(city) {
  localStorage.setItem('location', `${city}`);
}

export async function onLoad() {
  const city = localStorage.getItem('location');
  const data = await fetchData(city);
  displayWeatherData(data);
}