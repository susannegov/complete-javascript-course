'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

//getPosition().then(pos => console.log(pos));

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong. ${err.message}`);

    throw err;
  }
};

/*
console.log('1: Will get a location');
whereAmI()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.error(`2: ${err.message}`))
  .finally(() => console.log('3: Finished getting location'));

  */

// this is iife function
(async function () {
  try {
    console.log('1: Will get a location');
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: Finished getting location');
})();

const getJSON = function (url, errorMsg = 'Something went wrong.') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg.message} ${response.status}`);
    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');

// promise.race a collection of promises and only return the first promise that is "settled" (who wins)
// it does not base on whether promise was resolved/rejected
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.log(res[0].name);
})();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, s * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled only returns array of all settled promises
// it does not base on whether promise was resolved/rejected
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('yay'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any only returns resolved promises.
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('yay'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

/* // old code
const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} error`));
};
*/
btn.addEventListener('click', whereAmI);
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

//const request = fetch('https://restcountries.eu/rest/v2/name/portugal');

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

// const getJSON = function (url, errorMsg = 'Something went wrong.') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg.message} ${response.status}`);
//     return response.json();
//   });
// };

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

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

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

// const whereAmI = function (lat, lng) {
//   const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;

//   return fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(`You are in ${data.city}, ${data.country}`))
//     .catch(err => {
//       console.error(`${err.message} error`);
//     });
// };

//whereAmI(52.508, 13.381);
//whereAmI(19.037, 72.873);
//whereAmI(-33.933, 18.474);

// microtasks queue goes first before callback queue
/*
console.log('test start'); // 1
setTimeout(() => console.log('0 second timer'), 0); // 4
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3
console.log('test end'); // 2

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100; i++) {
    console.log(res);
  }
});
*/
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win!');
    } else {
      reject('You lost!');
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('I waited for 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 seconds');
    return wait(1);
  });

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/

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

/*
Coding Challenge #2
For this challenge you will actually have to watch the video! Then, build the image loading functionality that I just showed you on the screen.

Your tasks:Tasks are not super-descriptive this time, so that you can figure out some stuff by yourself. Pretend you're working on your own 😉
PART 1
1.Create a function 'createImage'which receives 'imgPath'as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .srcattribute to the provided image path
2.When the image is done loading, append it to the DOM element with the 'images'class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image (listen for the'error'event), reject the promise
3.If this part is too tricky for you, just watch the first part of the solution*/
/*
PART 2
4.Consumethe promise using .thenand also add an error handler
5.After the image has loaded, pause execution for 2 seconds using the 'wait'function we created earlier
6. After the 2 seconds have passed, hide the current image (set displayCSS propertyto 'none'), and load a second image (Hint:Use the image element returned by the 'createImage'promise to hide the current image. You will need a global variable for that 😉)
7.After the second image has loaded, pause execution for 2 seconds again8.After the 2 seconds have passed, hide the current imageTest data:Images in the imgfolder. Test the error handler by passing a wrong image path. Set the network speed to “Fast 3G”in the dev tools Network tab, otherwise images load too fast
GOOD LUCK 😀
*/

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found.'));
    });
  });
};

/*
let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => {
    console.error(`Something went wrong. ${err}`);
  });
*/
/*
Coding Challenge #3
Your tasks:
PART 1
1.Write an async function 'loadNPause'that recreates Challenge #2, this time using async/await(only the part where the promise is consumed, reuse the 'createImage'function from before)
2.Compare the two versions, think about the big differences, and see which one you like more
3.Don't forget to test the error handler, and to set the network speed to “Fast 3G”in the dev tools Network tab
PART 2
1.Create an async function 'loadAll'that receives an array of image paths 'imgArr'
2.Use .map to loop over the array, to load all the images with the 'createImage'function (call the resulting array 'imgs')
3.Check out the 'imgs'array in the console! Is it like you expected?
4.Use a promise combinator function to actually get the images from the array 😉
5.Add the 'parallel'class to all the images (it has some CSS styles)

Test data
Part 2:['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. 
To test, turn off the 'loadNPause'function
GOOD LUCK 😀
*/

const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const loadNPause = async function (imgArr) {
  let currentImg;
  for (const i of imgArr) {
    currentImg = await createImage(i).catch(err => {
      console.error(`Something went wrong. ${err}`);
    });
    await wait(2);
    currentImg.style.display = 'none';
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgs = await Promise.allSettled(
      imgArr.map(async i => {
        const img = await createImage(i);
        img.classList.add = 'parallel';
        return img;
      })
    );
    console.log(imgs);
  } catch (err) {
    console.error(err);
  }
};

loadAll(imgArr);
//loadNPause(imgArr);
