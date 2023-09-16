// Set up a blank HTML document with the appropriate links to your JavaScript and CSS files.

// Write the functions that hit the API. You’re going to want functions that can take a location and 
// return the weather data for that location. For now, just console.log() the information.

// Write the functions that process the JSON data you’re getting from the API and 
// return an object with only the data you require for your app.

// Set up a simple form that will let users input their location and will fetch the weather info (still just console.log() it).

// Display the information on your webpage! 
// create a function in api.js that returns the data, 
// then in controller.js run the display function that takes in the returned data from api.js

// Add any styling you like!

// Optional: add a ‘loading’ component that displays from the time the form is submitted until the 
// information comes back from the API. Use DevTools to test for low-end devices. Push that baby to github and share your solution below!

import handler from './components/controller';
import { onLoad } from './components/localStorage';

window.addEventListener('load', onLoad);
handler();