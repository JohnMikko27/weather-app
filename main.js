/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData)
/* harmony export */ });
const processData = async(response) => {
  const data = await response.json();
  const dataCurrent = data.current;
  const dataLocation = data.location;



  // I ACCIDENTALLY COMMIT AMENDED A PUSHED COMMIT SO I HAVE TO FIX THAT FIRST!



  // object destructuring requires exact names
  // eslint-disable-next-line camelcase
  const { condition, humidity, temp_c, temp_f, wind_mph } = dataCurrent; 
  const { country, name, region } = dataLocation;
  const weatherCondition = condition.text;

  // eslint-disable-next-line camelcase
  return { country, name, region, weatherCondition, humidity, temp_c, temp_f, wind_mph };
};

// eslint-disable-next-line import/prefer-default-export, consistent-return
async function fetchData(city) {
  try {
    const apiKey = '90ba82aa379048c3b86181742232108';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`, {mode: 'cors'});
    const processedData = await processData(response);
    console.log(processedData);
    return processedData;
  } catch(error) {
    console.log(error);
    return error;
  }
};



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
  const searchCityForm = document.querySelector('#searchCityForm');
  const input = document.querySelector('input');
  const error = document.querySelector('#error');
  searchCityForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const data = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)(input.value);
    console.log(data);
    
    if (data instanceof Error) {
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
  console.log(data);
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7O0FBSUE7QUFDQTtBQUNBLFVBQVUsZ0RBQWdEO0FBQzFELFVBQVUsd0JBQXdCO0FBQ2xDOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0EsbUZBQW1GLE9BQU8sS0FBSyxLQUFLLElBQUksYUFBYTtBQUNySDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ2tDO0FBQ0k7QUFDRzs7QUFFMUI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtDQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTSwrQ0FBa0I7QUFDeEIsTUFBTSx5REFBVztBQUNqQjtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJrQztBQUNJOztBQUV2QjtBQUNmLHNDQUFzQyxLQUFLO0FBQzNDOztBQUVPO0FBQ1A7QUFDQSxxQkFBcUIsK0NBQVM7QUFDOUIsRUFBRSwrQ0FBa0I7QUFDcEI7Ozs7Ozs7Ozs7Ozs7O0FDWGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsVUFBVSxJQUFJLGFBQWE7QUFDdkQsb0NBQW9DLHNCQUFzQjtBQUMxRCxvQ0FBb0MsWUFBWTtBQUNoRCw4QkFBOEIsWUFBWTtBQUMxQyx5Q0FBeUMsZUFBZTtBQUN4RCxzQ0FBc0MsY0FBYztBQUNwRDs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUU4QztBQUNLO0FBQzlCOztBQUVyQixnQ0FBZ0MsNERBQU07QUFDdEMsa0VBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBwcm9jZXNzRGF0YSA9IGFzeW5jKHJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGRhdGFDdXJyZW50ID0gZGF0YS5jdXJyZW50O1xuICBjb25zdCBkYXRhTG9jYXRpb24gPSBkYXRhLmxvY2F0aW9uO1xuXG5cblxuICAvLyBJIEFDQ0lERU5UQUxMWSBDT01NSVQgQU1FTkRFRCBBIFBVU0hFRCBDT01NSVQgU08gSSBIQVZFIFRPIEZJWCBUSEFUIEZJUlNUIVxuXG5cblxuICAvLyBvYmplY3QgZGVzdHJ1Y3R1cmluZyByZXF1aXJlcyBleGFjdCBuYW1lc1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIGNvbnN0IHsgY29uZGl0aW9uLCBodW1pZGl0eSwgdGVtcF9jLCB0ZW1wX2YsIHdpbmRfbXBoIH0gPSBkYXRhQ3VycmVudDsgXG4gIGNvbnN0IHsgY291bnRyeSwgbmFtZSwgcmVnaW9uIH0gPSBkYXRhTG9jYXRpb247XG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBjb25kaXRpb24udGV4dDtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIHJldHVybiB7IGNvdW50cnksIG5hbWUsIHJlZ2lvbiwgd2VhdGhlckNvbmRpdGlvbiwgaHVtaWRpdHksIHRlbXBfYywgdGVtcF9mLCB3aW5kX21waCB9O1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQsIGNvbnNpc3RlbnQtcmV0dXJuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhcGlLZXkgPSAnOTBiYTgyYWEzNzkwNDhjM2I4NjE4MTc0MjIzMjEwOCc7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2NpdHl9YCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBhd2FpdCBwcm9jZXNzRGF0YShyZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2cocHJvY2Vzc2VkRGF0YSk7XG4gICAgcmV0dXJuIHByb2Nlc3NlZERhdGE7XG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuXG4iLCJpbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgZGlzcGxheVdlYXRoZXJEYXRhIGZyb20gJy4vdWknO1xuaW1wb3J0IHNldExvY2F0aW9uIGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgY29uc3Qgc2VhcmNoQ2l0eUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoQ2l0eUZvcm0nKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICBjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xuICBzZWFyY2hDaXR5Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyhlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoaW5wdXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIFxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRpc3BsYXlXZWF0aGVyRGF0YShkYXRhKTtcbiAgICAgIHNldExvY2F0aW9uKGlucHV0LnZhbHVlKTtcbiAgICB9XG4gICAgc2VhcmNoQ2l0eUZvcm0ucmVzZXQoKTtcbiAgfSk7XG59XG5cbiIsImltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4vYXBpJztcbmltcG9ydCBkaXNwbGF5V2VhdGhlckRhdGEgZnJvbSAnLi91aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldExvY2F0aW9uKGNpdHkpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2F0aW9uJywgYCR7Y2l0eX1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgY29uc3QgY2l0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbicpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKGNpdHkpO1xuICBkaXNwbGF5V2VhdGhlckRhdGEoZGF0YSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJEYXRhKGRhdGEpIHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyk7XG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlckNvbmRpdGlvbicpO1xuICBjb25zdCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZhaHJlbmhlaXQnKTtcbiAgY29uc3QgY2Vsc2l1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjZWxzaXVzJyk7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kU3BlZWQnKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcblxuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEubmFtZX0sICR7ZGF0YS5jb3VudHJ5fWA7XG4gIHdlYXRoZXJDb25kaXRpb24udGV4dENvbnRlbnQgPSBgJHtkYXRhLndlYXRoZXJDb25kaXRpb259YDtcbiAgY2Vsc2l1cy50ZXh0Q29udGVudCA9IGBDRUxTSVVTOiAke2RhdGEudGVtcF9jfWA7XG4gIGZhaHJlbmhlaXQudGV4dENvbnRlbnQgPSBgJHtkYXRhLnRlbXBfZn1gO1xuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgV0lORCBTUEVFRDogJHtkYXRhLndpbmRfbXBofSBNUEhgO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIVU1JRElUWTogJHtkYXRhLmh1bWlkaXR5fSVgO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFNldCB1cCBhIGJsYW5rIEhUTUwgZG9jdW1lbnQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgbGlua3MgdG8geW91ciBKYXZhU2NyaXB0IGFuZCBDU1MgZmlsZXMuXG5cbi8vIFdyaXRlIHRoZSBmdW5jdGlvbnMgdGhhdCBoaXQgdGhlIEFQSS4gWW914oCZcmUgZ29pbmcgdG8gd2FudCBmdW5jdGlvbnMgdGhhdCBjYW4gdGFrZSBhIGxvY2F0aW9uIGFuZCBcbi8vIHJldHVybiB0aGUgd2VhdGhlciBkYXRhIGZvciB0aGF0IGxvY2F0aW9uLiBGb3Igbm93LCBqdXN0IGNvbnNvbGUubG9nKCkgdGhlIGluZm9ybWF0aW9uLlxuXG4vLyBXcml0ZSB0aGUgZnVuY3Rpb25zIHRoYXQgcHJvY2VzcyB0aGUgSlNPTiBkYXRhIHlvdeKAmXJlIGdldHRpbmcgZnJvbSB0aGUgQVBJIGFuZCBcbi8vIHJldHVybiBhbiBvYmplY3Qgd2l0aCBvbmx5IHRoZSBkYXRhIHlvdSByZXF1aXJlIGZvciB5b3VyIGFwcC5cblxuLy8gU2V0IHVwIGEgc2ltcGxlIGZvcm0gdGhhdCB3aWxsIGxldCB1c2VycyBpbnB1dCB0aGVpciBsb2NhdGlvbiBhbmQgd2lsbCBmZXRjaCB0aGUgd2VhdGhlciBpbmZvIChzdGlsbCBqdXN0IGNvbnNvbGUubG9nKCkgaXQpLlxuXG4vLyBEaXNwbGF5IHRoZSBpbmZvcm1hdGlvbiBvbiB5b3VyIHdlYnBhZ2UhIFxuLy8gY3JlYXRlIGEgZnVuY3Rpb24gaW4gYXBpLmpzIHRoYXQgcmV0dXJucyB0aGUgZGF0YSwgXG4vLyB0aGVuIGluIGNvbnRyb2xsZXIuanMgcnVuIHRoZSBkaXNwbGF5IGZ1bmN0aW9uIHRoYXQgdGFrZXMgaW4gdGhlIHJldHVybmVkIGRhdGEgZnJvbSBhcGkuanNcblxuLy8gQWRkIGFueSBzdHlsaW5nIHlvdSBsaWtlIVxuXG4vLyBPcHRpb25hbDogYWRkIGEg4oCYbG9hZGluZ+KAmSBjb21wb25lbnQgdGhhdCBkaXNwbGF5cyBmcm9tIHRoZSB0aW1lIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCB1bnRpbCB0aGUgXG4vLyBpbmZvcm1hdGlvbiBjb21lcyBiYWNrIGZyb20gdGhlIEFQSS4gVXNlIERldlRvb2xzIHRvIHRlc3QgZm9yIGxvdy1lbmQgZGV2aWNlcy4gUHVzaCB0aGF0IGJhYnkgdG8gZ2l0aHViIGFuZCBzaGFyZSB5b3VyIHNvbHV0aW9uIGJlbG93IVxuXG5pbXBvcnQgaGFuZGxlciBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbGxlcic7XG5pbXBvcnQgeyBvbkxvYWQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9jYWxTdG9yYWdlJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG5oYW5kbGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=