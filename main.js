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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnREFBZ0Q7QUFDMUQsVUFBVSx3QkFBd0I7QUFDbEM7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQSxtRkFBbUYsT0FBTyxLQUFLLEtBQUssSUFBSSxhQUFhO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCa0M7QUFDSTtBQUNHOztBQUUxQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0NBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNLCtDQUFrQjtBQUN4QixNQUFNLHlEQUFXO0FBQ2pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmtDO0FBQ0k7O0FBRXZCO0FBQ2Ysc0NBQXNDLEtBQUs7QUFDM0M7O0FBRU87QUFDUDtBQUNBLHFCQUFxQiwrQ0FBUztBQUM5QixFQUFFLCtDQUFrQjtBQUNwQjs7Ozs7Ozs7Ozs7Ozs7QUNYZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixVQUFVLElBQUksYUFBYTtBQUN2RCxvQ0FBb0Msc0JBQXNCO0FBQzFELG9DQUFvQyxZQUFZO0FBQ2hELDhCQUE4QixZQUFZO0FBQzFDLHlDQUF5QyxlQUFlO0FBQ3hELHNDQUFzQyxjQUFjO0FBQ3BEOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFOEM7QUFDSzs7QUFFbkQsZ0NBQWdDLDREQUFNO0FBQ3RDLGtFQUFPLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy91aS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb2Nlc3NEYXRhID0gYXN5bmMocmVzcG9uc2UpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgZGF0YUN1cnJlbnQgPSBkYXRhLmN1cnJlbnQ7XG4gIGNvbnN0IGRhdGFMb2NhdGlvbiA9IGRhdGEubG9jYXRpb247XG4gICAgXG4gIC8vIG9iamVjdCBkZXN0cnVjdHVyaW5nIHJlcXVpcmVzIGV4YWN0IG5hbWVzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgY29uc3QgeyBjb25kaXRpb24sIGh1bWlkaXR5LCB0ZW1wX2MsIHRlbXBfZiwgd2luZF9tcGggfSA9IGRhdGFDdXJyZW50OyBcbiAgY29uc3QgeyBjb3VudHJ5LCBuYW1lLCByZWdpb24gfSA9IGRhdGFMb2NhdGlvbjtcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGNvbmRpdGlvbi50ZXh0O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgcmV0dXJuIHsgY291bnRyeSwgbmFtZSwgcmVnaW9uLCB3ZWF0aGVyQ29uZGl0aW9uLCBodW1pZGl0eSwgdGVtcF9jLCB0ZW1wX2YsIHdpbmRfbXBoIH07XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCwgY29uc2lzdGVudC1yZXR1cm5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IGFwaUtleSA9ICc5MGJhODJhYTM3OTA0OGMzYjg2MTgxNzQyMjMyMTA4JztcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7Y2l0eX1gLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGF3YWl0IHByb2Nlc3NEYXRhKHJlc3BvbnNlKTtcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzZWREYXRhKTtcbiAgICByZXR1cm4gcHJvY2Vzc2VkRGF0YTtcbiAgfSBjYXRjaChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbiIsImltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4vYXBpJztcbmltcG9ydCBkaXNwbGF5V2VhdGhlckRhdGEgZnJvbSAnLi91aSc7XG5pbXBvcnQgc2V0TG9jYXRpb24gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICBjb25zdCBzZWFyY2hDaXR5Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hDaXR5Rm9ybScpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJyk7XG4gIHNlYXJjaENpdHlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YShpbnB1dC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgZXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZGlzcGxheVdlYXRoZXJEYXRhKGRhdGEpO1xuICAgICAgc2V0TG9jYXRpb24oaW5wdXQudmFsdWUpO1xuICAgIH1cbiAgICBzZWFyY2hDaXR5Rm9ybS5yZXNldCgpO1xuICB9KTtcbn1cblxuIiwiaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IGRpc3BsYXlXZWF0aGVyRGF0YSBmcm9tICcuL3VpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TG9jYXRpb24oY2l0eSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYXRpb24nLCBgJHtjaXR5fWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb25Mb2FkKCkge1xuICBjb25zdCBjaXR5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2F0aW9uJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoY2l0eSk7XG4gIGRpc3BsYXlXZWF0aGVyRGF0YShkYXRhKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlckRhdGEoZGF0YSkge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKTtcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyQ29uZGl0aW9uJyk7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmFocmVuaGVpdCcpO1xuICBjb25zdCBjZWxzaXVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NlbHNpdXMnKTtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRTcGVlZCcpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuXG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLmNvdW50cnl9YDtcbiAgd2VhdGhlckNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEud2VhdGhlckNvbmRpdGlvbn1gO1xuICBjZWxzaXVzLnRleHRDb250ZW50ID0gYENFTFNJVVM6ICR7ZGF0YS50ZW1wX2N9YDtcbiAgZmFocmVuaGVpdC50ZXh0Q29udGVudCA9IGAke2RhdGEudGVtcF9mfWA7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGBXSU5EIFNQRUVEOiAke2RhdGEud2luZF9tcGh9IE1QSGA7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEhVTUlESVRZOiAke2RhdGEuaHVtaWRpdHl9JWA7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gU2V0IHVwIGEgYmxhbmsgSFRNTCBkb2N1bWVudCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBsaW5rcyB0byB5b3VyIEphdmFTY3JpcHQgYW5kIENTUyBmaWxlcy5cblxuLy8gV3JpdGUgdGhlIGZ1bmN0aW9ucyB0aGF0IGhpdCB0aGUgQVBJLiBZb3XigJlyZSBnb2luZyB0byB3YW50IGZ1bmN0aW9ucyB0aGF0IGNhbiB0YWtlIGEgbG9jYXRpb24gYW5kIFxuLy8gcmV0dXJuIHRoZSB3ZWF0aGVyIGRhdGEgZm9yIHRoYXQgbG9jYXRpb24uIEZvciBub3csIGp1c3QgY29uc29sZS5sb2coKSB0aGUgaW5mb3JtYXRpb24uXG5cbi8vIFdyaXRlIHRoZSBmdW5jdGlvbnMgdGhhdCBwcm9jZXNzIHRoZSBKU09OIGRhdGEgeW914oCZcmUgZ2V0dGluZyBmcm9tIHRoZSBBUEkgYW5kIFxuLy8gcmV0dXJuIGFuIG9iamVjdCB3aXRoIG9ubHkgdGhlIGRhdGEgeW91IHJlcXVpcmUgZm9yIHlvdXIgYXBwLlxuXG4vLyBTZXQgdXAgYSBzaW1wbGUgZm9ybSB0aGF0IHdpbGwgbGV0IHVzZXJzIGlucHV0IHRoZWlyIGxvY2F0aW9uIGFuZCB3aWxsIGZldGNoIHRoZSB3ZWF0aGVyIGluZm8gKHN0aWxsIGp1c3QgY29uc29sZS5sb2coKSBpdCkuXG5cbi8vIERpc3BsYXkgdGhlIGluZm9ybWF0aW9uIG9uIHlvdXIgd2VicGFnZSEgXG4vLyBjcmVhdGUgYSBmdW5jdGlvbiBpbiBhcGkuanMgdGhhdCByZXR1cm5zIHRoZSBkYXRhLCBcbi8vIHRoZW4gaW4gY29udHJvbGxlci5qcyBydW4gdGhlIGRpc3BsYXkgZnVuY3Rpb24gdGhhdCB0YWtlcyBpbiB0aGUgcmV0dXJuZWQgZGF0YSBmcm9tIGFwaS5qc1xuXG4vLyBBZGQgYW55IHN0eWxpbmcgeW91IGxpa2UhXG5cbi8vIE9wdGlvbmFsOiBhZGQgYSDigJhsb2FkaW5n4oCZIGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGZyb20gdGhlIHRpbWUgdGhlIGZvcm0gaXMgc3VibWl0dGVkIHVudGlsIHRoZSBcbi8vIGluZm9ybWF0aW9uIGNvbWVzIGJhY2sgZnJvbSB0aGUgQVBJLiBVc2UgRGV2VG9vbHMgdG8gdGVzdCBmb3IgbG93LWVuZCBkZXZpY2VzLiBQdXNoIHRoYXQgYmFieSB0byBnaXRodWIgYW5kIHNoYXJlIHlvdXIgc29sdXRpb24gYmVsb3chXG5cbmltcG9ydCBoYW5kbGVyIGZyb20gJy4vY29tcG9uZW50cy9jb250cm9sbGVyJztcbmltcG9ydCB7IG9uTG9hZCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2NhbFN0b3JhZ2UnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG5oYW5kbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9