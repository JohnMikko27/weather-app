/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData)
/* harmony export */ });
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
// this function should have a parameter instead of selecting input

// eslint-disable-next-line import/prefer-default-export, consistent-return
async function fetchData(city) {
  try {
    const apiKey = '90ba82aa379048c3b86181742232108';
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`, {mode: 'cors'});
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



/***/ }),

/***/ "./src/components/controller.js":
/*!**************************************!*\
  !*** ./src/components/controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/components/api.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/components/ui.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/components/localStorage.js");




function handler() {
  //   const searchCityButton = document.querySelector('#searchCityButton');
  //   searchCityButton.addEventListener('click', fetchData);
  const searchCityForm = document.querySelector('#searchCityForm');
  const input = document.querySelector('input');
  const error = document.querySelector('#error');
  searchCityForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const data = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)(input.value);
    console.log(data);
    
    if (data instanceof Error) {
      console.log('error!!!sdfsfds');
      error.classList.remove('hidden');
    } else {
      error.classList.add('hidden');
      (0,_ui__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__["default"])(input.value);
    }
    searchCityForm.reset();
  });
}



/***/ }),

/***/ "./src/components/localStorage.js":
/*!****************************************!*\
  !*** ./src/components/localStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setLocation),
/* harmony export */   onLoad: () => (/* binding */ onLoad)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/components/api.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/components/ui.js");



function setLocation(city) {
  localStorage.setItem('location', `${city}`);
}

async function onLoad() {
  const city = localStorage.getItem('location');
  const data = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)(city);
  (0,_ui__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
}

/***/ }),

/***/ "./src/components/ui.js":
/*!******************************!*\
  !*** ./src/components/ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayWeatherData)
/* harmony export */ });
function displayWeatherData(data) {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/controller */ "./src/components/controller.js");
/* harmony import */ var _components_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/localStorage */ "./src/components/localStorage.js");
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




window.addEventListener('load', _components_localStorage__WEBPACK_IMPORTED_MODULE_1__.onLoad);
(0,_components_controller__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdEQUFnRDtBQUMxRCxVQUFVLHdCQUF3QjtBQUNsQzs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtGQUFrRixPQUFPLEtBQUssS0FBSyxJQUFJLGFBQWE7QUFDcEg7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERrQztBQUNJO0FBQ0c7O0FBRTFCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0NBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU0sK0NBQWtCO0FBQ3hCLE1BQU0seURBQVc7QUFDakI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCa0M7QUFDSTs7QUFFdkI7QUFDZixzQ0FBc0MsS0FBSztBQUMzQzs7QUFFTztBQUNQO0FBQ0EscUJBQXFCLCtDQUFTO0FBQzlCLEVBQUUsK0NBQWtCO0FBQ3BCOzs7Ozs7Ozs7Ozs7OztBQ1hlO0FBQ2Y7QUFDQTtBQUNBLG9EQUFvRCxhQUFhLElBQUksVUFBVSxJQUFJLFlBQVksSUFBSSxzQkFBc0I7QUFDekgsb0RBQW9ELGNBQWMsSUFBSSxZQUFZLElBQUksWUFBWSxJQUFJLGNBQWM7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixVQUFVLElBQUksYUFBYTtBQUN2RCxvQ0FBb0Msc0JBQXNCO0FBQzFELG9DQUFvQyxZQUFZO0FBQ2hELDhCQUE4QixZQUFZO0FBQzFDLHlDQUF5QyxlQUFlO0FBQ3hELHNDQUFzQyxjQUFjOztBQUVwRDs7Ozs7O1VDbkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUU4QztBQUNLOztBQUVuRCxnQ0FBZ0MsNERBQU07QUFDdEMsa0VBQU8sRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gKiB3aGVuIHRoZSBjbGllbnQgc2VhcmNoZXMgc29tZXRoaW5nIHVwIGluIHRoZSBzZWFyY2ggYmFyIGFuZCBlbnRlcnMsIChjb250cm9sbGVyLmpzKVxuICogdGhlbiBnZXQgdGhhdCBkYXRhIChjaXR5KSBnZXQgdGhhdCBjaXR5J3Mgd2VhdGhlciBkYXRhIGZyb20gdGhlIGFwaSAoYXBpLmpzKVxuICogdGhlbiBkaXNwbGF5IHRoZSBpbmZvcm1hdGlvbiBmcm9tIHRoYXQgcmVxdWVzdCBvbnRvIHRoZSBwYWdlICh1aS4uanMpXG4gKiByZW1lbWJlciB0byBsb29rIGF0IHByb2dyYW1taW5nIG5vdGVzIGFuZCBhcHBseSB0aGVtLCBlc3BlY2lhbGx5IE9PUCBwcmluY2lwbGVzL0RSWS9TT0xJRCBwcmluY2lwbGVzXG4gKiBtYWtlIHN1cmUgdG8gdXRpbGl6ZSBmdW5jdGlvbnMgYW5kIGFwaS5qcyBhbmQgdWkuanMgc2hvdWxkIG5vdCBoYXZlIGFueSBmdW5jdGlvbnMgd2l0aGluIG9uZSBhbm90aGVyLCBpdCBzaG91bGQgb25seSBiZSB3aXRoaW4gY29udHJvbGxlci5qc1xuICovXG5cbi8vIHNldCBhbiBvbmxvYWQgZnVuY3Rpb24gdGhhdCBmZXRjaGVzIHRoZSBwcmV2aW91c2x5IHJlcXVlc3RlZCBjaXR5IGFmdGVyIGVhY2ggcmVsb2FkIGludG8gdGhlIHdlYnBhZ2VcblxuXG5cbmNvbnN0IHByb2Nlc3NEYXRhID0gYXN5bmMocmVzcG9uc2UpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgZGF0YUN1cnJlbnQgPSBkYXRhLmN1cnJlbnQ7XG4gIGNvbnN0IGRhdGFMb2NhdGlvbiA9IGRhdGEubG9jYXRpb247XG4gICAgXG4gIC8vIG9iamVjdCBkZXN0cnVjdHVyaW5nIHJlcXVpcmVzIGV4YWN0IG5hbWVzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgY29uc3QgeyBjb25kaXRpb24sIGh1bWlkaXR5LCB0ZW1wX2MsIHRlbXBfZiwgd2luZF9tcGggfSA9IGRhdGFDdXJyZW50OyBcbiAgY29uc3QgeyBjb3VudHJ5LCBuYW1lLCByZWdpb24gfSA9IGRhdGFMb2NhdGlvbjtcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGNvbmRpdGlvbi50ZXh0O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgcmV0dXJuIHsgY291bnRyeSwgbmFtZSwgcmVnaW9uLCB3ZWF0aGVyQ29uZGl0aW9uLCBodW1pZGl0eSwgdGVtcF9jLCB0ZW1wX2YsIHdpbmRfbXBoIH07XG59O1xuXG5cbi8vIHRoZSBmZXRjaERhdGEgc2hvdWxkIHNlbmQgYW4gZXJyb3IgaWYgdGhlIGNpdHkgc2VudCB3YXMgZW1wdHkgb3Igbm90IGEgY2l0eVxuLy8gdGhpcyBmdW5jdGlvbiBzaG91bGQgaGF2ZSBhIHBhcmFtZXRlciBpbnN0ZWFkIG9mIHNlbGVjdGluZyBpbnB1dFxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCwgY29uc2lzdGVudC1yZXR1cm5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IGFwaUtleSA9ICc5MGJhODJhYTM3OTA0OGMzYjg2MTgxNzQyMjMyMTA4JztcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtjaXR5fWAsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhID0gYXdhaXQgcHJvY2Vzc0RhdGEocmVzcG9uc2UpO1xuICAgIGNvbnNvbGUubG9nKHByb2Nlc3NlZERhdGEpO1xuICAgIHJldHVybiBwcm9jZXNzZWREYXRhO1xuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuXG59O1xuXG4vKiBcbiAqIG1pZ2h0IGhhdmUgdG8gbW92ZSB0aGlzIGV2ZW50IGxpc3RlbmVyIGluIGNvbnRyb2xsZXIgb3Igc29tdGhpbmdcbiAqIGFuZCBoYXZlIHRoZSBjYWxsYmFjayBiZSBhIGRpc3BsYXlXZWF0aGVyIGZ1bmN0aW9uIG9yIHNvbWV0aGluZyBcbiAqIHdoZXJlIGRpc3BsYXlXZWF0aGVyIHdpbGwgZ2V0IGRhdGEgZnJvbSB0aGUgZmV0Y2hEYXRhIG9yIHdoYXRldmVyIGZ1bmN0aW9ucywgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB1aSwgYW5kIGRpc3BsYXkgaXRcbiAqLyBcblxuIiwiaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IGRpc3BsYXlXZWF0aGVyRGF0YSBmcm9tICcuL3VpJztcbmltcG9ydCBzZXRMb2NhdGlvbiBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gIC8vICAgY29uc3Qgc2VhcmNoQ2l0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hDaXR5QnV0dG9uJyk7XG4gIC8vICAgc2VhcmNoQ2l0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZldGNoRGF0YSk7XG4gIGNvbnN0IHNlYXJjaENpdHlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaENpdHlGb3JtJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3InKTtcbiAgc2VhcmNoQ2l0eUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKGlucHV0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IhISFzZGZzZmRzJyk7XG4gICAgICBlcnJvci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkaXNwbGF5V2VhdGhlckRhdGEoZGF0YSk7XG4gICAgICBzZXRMb2NhdGlvbihpbnB1dC52YWx1ZSk7XG4gICAgfVxuICAgIHNlYXJjaENpdHlGb3JtLnJlc2V0KCk7XG4gIH0pO1xufVxuXG4iLCJpbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgZGlzcGxheVdlYXRoZXJEYXRhIGZyb20gJy4vdWknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRMb2NhdGlvbihjaXR5KSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhdGlvbicsIGAke2NpdHl9YCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gIGNvbnN0IGNpdHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb24nKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YShjaXR5KTtcbiAgZGlzcGxheVdlYXRoZXJEYXRhKGRhdGEpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyRGF0YShkYXRhKSB7XG4vLyAgIGNvbnN0IHdlYXRoZXJJbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVySW5mb3JtYXRpb25Db250YWluZXInKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIC8vICAgd2VhdGhlckluZm9ybWF0aW9uQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jb3VudHJ5fSwgJHtkYXRhLm5hbWV9LCAke2RhdGEucmVnaW9ufSwgJHtkYXRhLndlYXRoZXJDb25kaXRpb259LCBcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkYXRhLmh1bWlkaXR5fSwgJHtkYXRhLnRlbXBfY30sICR7ZGF0YS50ZW1wX2Z9LCAke2RhdGEud2luZF9tcGh9YDtcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKTtcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyQ29uZGl0aW9uJyk7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmFocmVuaGVpdCcpO1xuICBjb25zdCBjZWxzaXVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NlbHNpdXMnKTtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRTcGVlZCcpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuXG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLmNvdW50cnl9YDtcbiAgd2VhdGhlckNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEud2VhdGhlckNvbmRpdGlvbn1gO1xuICBjZWxzaXVzLnRleHRDb250ZW50ID0gYENFTFNJVVM6ICR7ZGF0YS50ZW1wX2N9YDtcbiAgZmFocmVuaGVpdC50ZXh0Q29udGVudCA9IGAke2RhdGEudGVtcF9mfWA7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGBXSU5EIFNQRUVEOiAke2RhdGEud2luZF9tcGh9IE1QSGA7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEhVTUlESVRZOiAke2RhdGEuaHVtaWRpdHl9JWA7XG5cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBTZXQgdXAgYSBibGFuayBIVE1MIGRvY3VtZW50IHdpdGggdGhlIGFwcHJvcHJpYXRlIGxpbmtzIHRvIHlvdXIgSmF2YVNjcmlwdCBhbmQgQ1NTIGZpbGVzLlxuXG4vLyBXcml0ZSB0aGUgZnVuY3Rpb25zIHRoYXQgaGl0IHRoZSBBUEkuIFlvdeKAmXJlIGdvaW5nIHRvIHdhbnQgZnVuY3Rpb25zIHRoYXQgY2FuIHRha2UgYSBsb2NhdGlvbiBhbmQgXG4vLyByZXR1cm4gdGhlIHdlYXRoZXIgZGF0YSBmb3IgdGhhdCBsb2NhdGlvbi4gRm9yIG5vdywganVzdCBjb25zb2xlLmxvZygpIHRoZSBpbmZvcm1hdGlvbi5cblxuLy8gV3JpdGUgdGhlIGZ1bmN0aW9ucyB0aGF0IHByb2Nlc3MgdGhlIEpTT04gZGF0YSB5b3XigJlyZSBnZXR0aW5nIGZyb20gdGhlIEFQSSBhbmQgXG4vLyByZXR1cm4gYW4gb2JqZWN0IHdpdGggb25seSB0aGUgZGF0YSB5b3UgcmVxdWlyZSBmb3IgeW91ciBhcHAuXG5cbi8vIFNldCB1cCBhIHNpbXBsZSBmb3JtIHRoYXQgd2lsbCBsZXQgdXNlcnMgaW5wdXQgdGhlaXIgbG9jYXRpb24gYW5kIHdpbGwgZmV0Y2ggdGhlIHdlYXRoZXIgaW5mbyAoc3RpbGwganVzdCBjb25zb2xlLmxvZygpIGl0KS5cblxuLy8gRGlzcGxheSB0aGUgaW5mb3JtYXRpb24gb24geW91ciB3ZWJwYWdlISBcbi8vIGNyZWF0ZSBhIGZ1bmN0aW9uIGluIGFwaS5qcyB0aGF0IHJldHVybnMgdGhlIGRhdGEsIFxuLy8gdGhlbiBpbiBjb250cm9sbGVyLmpzIHJ1biB0aGUgZGlzcGxheSBmdW5jdGlvbiB0aGF0IHRha2VzIGluIHRoZSByZXR1cm5lZCBkYXRhIGZyb20gYXBpLmpzXG5cbi8vIEFkZCBhbnkgc3R5bGluZyB5b3UgbGlrZSFcblxuLy8gT3B0aW9uYWw6IGFkZCBhIOKAmGxvYWRpbmfigJkgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgZnJvbSB0aGUgdGltZSB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgdW50aWwgdGhlIFxuLy8gaW5mb3JtYXRpb24gY29tZXMgYmFjayBmcm9tIHRoZSBBUEkuIFVzZSBEZXZUb29scyB0byB0ZXN0IGZvciBsb3ctZW5kIGRldmljZXMuIFB1c2ggdGhhdCBiYWJ5IHRvIGdpdGh1YiBhbmQgc2hhcmUgeW91ciBzb2x1dGlvbiBiZWxvdyFcblxuaW1wb3J0IGhhbmRsZXIgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgb25Mb2FkIH0gZnJvbSAnLi9jb21wb25lbnRzL2xvY2FsU3RvcmFnZSc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcbmhhbmRsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=