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

// eslint-disable-next-line import/prefer-default-export, consistent-return
export async function fetchData(city) {
  try {
    const apiKey = '90ba82aa379048c3b86181742232108';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`, {mode: 'cors'});
    const processedData = await processData(response);
    console.log(processedData);
    return processedData;
  } catch(error) {
    return error;
  }

};

