// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// user snippets can setup to make it cl is the same as console.log()
const x = "23";
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1991));
console.log("hello");

// in terminal use node -v
// npm install live-server -g
// cd to the folder you want to run server
// in terminal type live-server
// then right click browser and Inspect
// Do Ctrl + C in terminal to exit live server

/*
 Debugging process
 Find:
 simple code - > developer console
 complex code -> debugger
 fix bug and then write tests using testing software
*/

const measureKelvin = function () {
  const measurement = {
    type: "temperature",
    unit: "celsius",
    value: Number(10),
  };

  console.log(measurement);
  //   console.warn(measurement.value); //warning
  //   console.error(measurement.value); //error
  const kelvin = measurement.value + 273;
  return kelvin;
};

// Identify bug - got 10273 from 10 + 273 instead of 283
console.log(measureKelvin());

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0; //temps[0] as example;
  let min = 0; //temps[0] as example;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 1, 5]);

// Identify
console.log(amplitudeNew);
// Bug is from min set to 0

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let days = "";
  for (let i = 1; i <= arr.length; i++) {
    days += `...${arr[i - 1]}ºC in ${i} days `;
  }
  console.log(days);
}

printForecast(data1);
printForecast(data2);
