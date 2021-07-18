'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Asynchronus code is executed after a task that runs in the background is finished
// AJAX communicates in am asynchronus way
// API = Applicaation Programming Interface
// Usually JSON format
// A promise is a container for an asynchronous value
// promises have 2 states. "pending" (getting value but empty rn)
// => "settled"
// (this settled status only happens once and async task has
//finished)
// to either a "fufilled" (got value) or "rejected" (error)
// a promise needs to be created first

const request = fetch('https://restcountries.eu/rest/v2/name/portugal');

const renderCountry = function (data, className = '') {
  const html = `<article class=${className}>
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errorMsg = 'Something went wrong.') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg.message} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found.'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      if (!neighbor) throw new Error('No neighbor found');

      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbor'))
    .catch(err => {
      console.error(`${err} error`);
      renderError(`Somethign went wrong. ${err.message}. Try again.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});

/*In this challenge you will build a function 'whereAmI'which renders a country onlybased on GPS coordinates. 

For that, you will use a second API to geocode coordinates.So in this challenge, you’lluse an API on your own for the first time 😁Your tasks:
PART 1
1.Create a function 'whereAmI' which takes as inputs a latitude value ('lat') and a longitude value ('lng') (these are GPS coordinates, examples arein test databelow).
2.Do “reverse geocoding”of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetchAPI and promises to get the data. Do not use the 'getJSON' function we created, that is cheating 😉
3.Once you have the data, take a look at it in the console to see all the attributes that you receivedabout the provided location. Then, using this data, log a message like this to the console: “You are in Berlin, Germany”
4.Chain a .catchmethod to the end of the promise chain and log errors to the console
5.This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message
PART 2
6.Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7.Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
The Complete JavaScript Course31
Test data:
§Coordinates1: 52.508, 13.381 (Latitude, Longitude)
§Coordinates2: 19.037, 72.873
§Coordinates3: -33.933, 18.474
GOOD LUCK 😀*/

const whereAmI = function (lat, lng) {
  const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;

  return fetch(url)
    .then(response => response.json())
    .then(data => console.log(`You are in ${data.city}, ${data.country}`))
    .catch(err => {
      console.error(`${err.message} error`);
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

// then when promise fufilled, catch if promise rejected, finally happens no matter what
// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found. ${response.status}`);
//       return response.json();
//     }) // json available on all responses
//     .then(data => {
//       renderCountry(data[0]);
//       //const neighbor = data[0].borders[0];
//       const neighbor = 'sdfjhsdf';
//       if (!neighbor) return;

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbor'))
//     .catch(err => {
//       console.error(`${err} error`);
//       renderError(`Somethign went wrong. ${err.message}. Try again.`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

//getCountryData('djfsh');

// const getCountryAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`); // (paramet 1: get, )
//   request.send(); // being done in the background.

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     // get neighbor country 1
//     const [neighbor] = data.borders;

//     if (!neighbor) return;

//     // request 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`); // (paramet 1: get, )
//     request2.send(); // being done in the background.

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbor');
//     });
//   });
// };

// getCountryAndNeighbor('usa');

// setTimeout(() => {
//   console.log('1 second passed');
// });
