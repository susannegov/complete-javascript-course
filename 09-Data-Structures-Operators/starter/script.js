'use strict';

// Enhanced Object literals
// Allows to put object in object

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const openingHours = {
  [days[3]]: {
    //thurs
    open: 12,
    close: 22,
  },
  [days[4]]: {
    //fri
    open: 11,
    close: 23,
  },
  [days[5]]: {
    //sat
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 Enhanced Object literals
  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Destructuring arrays
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
*/
// destructuring an array. Assigns x, y, and z to index of array
/*
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
*/

/* // Switches between main and secondary
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);


[main, secondary] = [secondary, main]; // Same as switching from above

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

*/
// default values
/*
let [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined
[p = 1, q = 1, r = 1] = [8];
console.log(p, q, r); // 8 1 1

// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// For referencing property names. To rename variables from third party data
const {
  name: restuarantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restuarantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] ["Focaccia","Bruschetta","Garlic Bread","Caprese Salad"]



// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); // 23 7

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours; // set o = 11 and c = 23 for friday
console.log(o, c); // 11 23

// Order received Garlic Bread and Risotto will be delivered to Via de Sol, 21 at 22:30
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via de Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Order received Bruschetta and Pizza will be delivered to Via de Sol, 21 at 20:00
// Used default values if not called
restaurant.orderDelivery({
  address: 'Via de Sol, 21',
  starterIndex: 1,
});

*/

// Spread Operator using ...array.
// Doesn't create new variables.
// Useful for creating new values
/// srpread operator works on arrays, strings, maps, sets NOT objects
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [ 1, 2, 7, 8, 9 ]

const newArr = [1, 2, ...arr];
console.log(newArr); // [ 1, 2, 7, 8, 9 ]

console.log(...newArr); // 1, 2, 7, 8, 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // [ "Pizza", "Pasta", "Risotto", "Gnocci" ]

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
const starterMenuCopy = [...restaurant.starterMenu]; // do shallow copy

// join 2 arrays together
const menu = [...mainMenuCopy, ...starterMenuCopy];
console.log(menu);

// example string spread operator
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // [ "J", "o", "n", "a", "s", " ", "S." ]
console.log(...str); // J o n a s

// restaurant example
/*
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

restaurant.orderPasta(...ingredients);

*/
/*
// Objects spread example
const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };

// for creating object copies
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); //Ristorante Roma
console.log(restaurant.name); // Classico Italiano

// the rest pattern and parameters. Collects multiple elements into an array
// rest is to pack elements. spread is to unpack
const arr = [1, 2, ...[3, 4]]; //spread syntax because ... on right side of =
const [a, b, ...others] = [1, 2, 3, 4, 5]; //rest because ... on left side of =
console.log(a, b, others); // 1 2 [3,4,5]

// rest must ALWAYS be in the last element
const [pizza, , riotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, riotto, otherFood); // Pizza Risotto [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

// Objects rest example
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // object only thursday and friday

// rest  functions. Allows it to pass many number parameters or an array
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3); // 5
add(5, 3, 7, 2); // 17

const x = [23, 5, 7];
add(...x); // 35. Uses the spread operator for array

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// mushrooms
// [ "onion", "olives", "spinach" ]

restaurant.orderPizza('mushrooms');
// mushrooms
// []

console.log('-----OR-----');
// Short Circuiting (&& and ||)
// Short circuiting: If the first value is a truthy value, it will return the truthy value
// Use any data type. return any data typed, and short-circuiting
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // 'Jonas'
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; //ternary operator
console.log(guests1); // 23

// short circuit example
const guests2 = restaurant.numGuests || 10; // do numGuests if exists, else 10. does not work if numGuests = 0 because 0 is falsy value
console.log(guests2);

console.log('----- AND -----');
console.log(0 && 'Jonas'); // 0. short circuits returns first value that is false
console.log(7 && 'Jonas'); // Jonas

console.log('Hello' && 23 && null && 'Jonas'); //null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroonms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroonms', 'spinach'); // short circuits function if it exists

// The nullish coalescing operator (??)
restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10; //ternary operator
console.log(guests); // 10

// Only short circuits from null and undefined, NOT 0 or ''
const guestCorrected = restaurant.numGuests ?? 10; //ternary operator
console.log(guestCorrected); // 0

*/
/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)! Suppose we get data from a web service about a certain game ('game'variable on next page). In this challenge we're gonna work with that data.

Your tasks:
1.Create one player array for each team (variables 'players1'and 'players2')
2.The first player in any playerarray is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3.Create an array 'allPlayers' containing all players of both teams (22 players)
4.During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho'and 'Perisic'
5.Based on the game.odds object, create one variable for each odd (called 'team1', 'draw'and 'team2')
6.Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski'and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

const [players1, players2] = game.players;

const { gk, ...fieldPlayers } = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const {
  odds: { team1: team1, x: draw, team2: team2 },
} = game;

// Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
  console.log(...players, players.length + ' goals');
};

//printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//printGoals(...game.scored);
/* Lectures
// For...of looping arrays | for (const x of array)

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  // gives array of index and value through destructuring
  console.log(`${i + 1}: ${el}`);
}

// Optional chaining (?.)
// If a property does not exist, undefined is returned immediately

//if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// Optional chain. If mon exists. Same as above except it returns undefined
console.log(restaurant.openingHours.mon?.open);

//if opening hours and mon exists.
console.log(restaurant.openingHours?.mon?.open);

// example
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed.';
  console.log(`On ${day} we open at ${open}`);
}

// Methods: checks if they exist
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays: checks if they exist
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

// Looping objects
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object - key,value of entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

/*
Coding Challenge #2
Let's continue with our football betting app!Keep using the 'game'variable from before.
Your tasks:
1.Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2.Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3.Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint:Note how the odds and the game objects have the same property names 
😉
4.Bonus:Create an object called 'scorers'which contains the names of the players who scored as properties, and the number of goals as the value. 
In this game, it will look like this:
{Gnarby: 1,Hummels: 1,Lewandowski: 2}
GOOD LUCK 😀
*/

// 1
for (const [key, name] of Object.entries(game.scored)) {
  console.log(`Goal ${+key + 1}: ${name}`);
}

// 2
const averages = function () {
  let avgOdd = 0;

  for (const value of Object.values(game.odds)) {
    avgOdd += value;
  }
  avgOdd /= Object.values(game.odds).length;
  console.log(avgOdd);
};

// 3
for (const [name, value] of Object.entries(game.odds)) {
  let team = game?.[`${name}`] ? 'victory ' + game[`${name}`] : 'draw';
  console.log(`Odd of ${team}: ${value}`);
}

//4
const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};

// Sets: Arrays with only unique values
// Sets do not have indexes. Cannot get values out of a sets
// Order does not matter. Can do for loops though

const orderSet = new Set(['Pasta', 'Pizza', 'Bread']);
orderSet.add('Garlic');
orderSet.delete('Pizza');
console.log(orderSet.has('cat')); // returns true/false on whether value is in set

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
let staffUnique = new Set(staff);
console.log(staffUnique);
// to convert set to array
staffUnique = [...new Set(staff)]; // or replace with staffUnique = [...staffUnique];
console.log(staffUnique);

// Map
const rest = new Map();
rest.set('name', 'Classico Italiano'); // adds to map
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

// to read from a map
console.log(rest.get('name')); //'Classico Italiano'
console.log(rest.get(true)); //'We are open'
console.log(rest.get(1)); //'Firenze, Italy'

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2); // deletes - slow process - discouraged
console.log(rest);
console.log(rest.size); // length of map
//rest.clear(); // clears all elements in map. Size is now 0

// Does not work because cannot retrieve from heap
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); //undefined

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); // Test

rest.set(document.querySelector('h1'), 'Heading');

// Maps: Interation

const question = new Map([
  ['question', "Who's a good boy?"],
  [1, 'no dog'],
  [2, 'your dog'],
  [3, 'cookie'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'try again'],
]);
console.log(question);

// convert objects to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your answer'));
//console.log(question.get(answer === question.get('correct')));

// conver map to array
console.log([...question]);
//console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

/* What data structures to use?
Source of data: From the program itself, from the UI, and from external sources

// Arrays vs Sets
- Arrays for ordered list of values and to manipulate data
- Sets for unique values, for high performance and to remove duplicates

// Objects vs Maps
- Objects easier to write and easy to access values using . and []
- Maps have better performance, keys can have ANY data type, easy to iterate, easy to compute size
*/

/* Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 'gameEvents'(see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1.Create an array 'events'of the different game events that happened (no duplicates)
2.After the game has finished, is was found that the yellow card from minute 64 was unfair. So removethis event from the game events log.
3.Compute and log the following string to the console: "An event happened, on average, every 9 minutes"(keep in mind that a game has 90 minutes)
4.Loop over 'gameEvents'and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:[FIRST HALF] 17:⚽GOAL
GOOD LUCK 😀
 */
const gameEvents = new Map([
  [17, '⚽GOAL'],
  [36, '🔁Substitution'],
  [47, '⚽GOAL'],
  [61, '🔁Substitution'],
  [64, '🔶Yellow card'],
  [69, '🔴Red card'],
  [70, '🔁Substitution'],
  [72, '🔁Substitution'],
  [76, '⚽GOAL'],
  [80, '⚽GOAL'],
  [92, '🔶Yellow card'],
]);

// 1
const events = [...new Set([...gameEvents.values()])];

// 2
gameEvents.delete(64);

// 3

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4
for (const [minutes, events] of gameEvents) {
  const gameHalf = minutes > 45 ? 'SECOND' : 'FIRST';
  console.log(`[${gameHalf} HALF] ${minutes}:${events}`);
}

// Working with Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3 string
console.log(plane[2]); // 2 string
console.log('B737'[0]);
console.log(airline.length); // 16
console.log('B737'.length); //4

console.log(airline.indexOf('r')); // returns position number which is 6.
console.log(airline.lastIndexOf('r')); // returns last position number of parameter which is 10.
console.log(airline.indexOf('Portugal')); //10. Is case sensitive.

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // Tap
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  const answer = s === 'B' || s === 'E' ? 'middle seat' : 'lucky';
  console.log(`You got ${answer}`);
};
checkMiddleSeat('11B');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas')); //object
console.log(typeof new String('Jonas').slice(1)); //string

// Fix capitalization
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

/*
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); //hello@jonas.io
// Same as below */

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); //hello@jonas.io
console.log(email === normalizedEmail); //true

// replacing
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

// replaces only first occurance
console.log(announcement.replace('door', 'gate'));

// replaces all occurances
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // regualr expression. /g means global

// methods that return booleans

console.log(plane.includes('A320')); //true
console.log(plane.includes('Boeing')); //false
console.log(plane.startsWith('Air')); //false
console.log(plane.startsWith('A') && plane.endsWith('20')); //true

// split strings method. Splits to an array
console.log('a+very+nice+interesting'.split('+')); //[ "a", "very", "nice", "interesting" ]

const [firstName, lastName] = 'Susanne Gov'.split(' ');

const newName = ['Ms.', firstName, [lastName.toUpperCase()].join(' ')];
console.log(newName); // [ "Ms.", "Susanne", "GOV" ]

const capitilizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //namesUpper.push(n[0].replace(n[0],n[0].toUpperCase()) //same as above
  }
  console.log(namesUpper.join(' '));
};

const person = 'jessica ann smith davis';
capitilizeName(person); //Jessica Ann Smith Davis

// Padding a string
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+')); //+++++++Go to gate 23++++++++++. length of string is now 30

const maskCreditCard = function (number) {
  const str = number + '';
  const last4 = str.slice(-4);
  console.log(last4.padStart(str.length, '*'));
};

maskCreditCard(2342234242434);
maskCreditCard('84578345033');

// Repeat - repeats string
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'P'.repeat(n)}`);
};

planesInLine(5); //There are 5 planes in line PPPPP

/*Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data(pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

Hints:
§Remember which character defines a new line in the textarea😉
§The solution only needs to work for a variable made out of 2 words, like a_b
§Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
§This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue! Afterwards, test with your own test data!GOOD LUCK 

*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const convertCamelCase = function (textList) {
  let i = 1;
  for (const word of textList) {
    let newWord = word.split('_');
    const [firstWord, secondWord] = [
      newWord[0].toLowerCase(),
      newWord[1].slice(0, 1).toUpperCase() + newWord[1].slice(1).toLowerCase(),
    ];
    newWord = (firstWord + secondWord).padEnd(20, ' ') + '✅'.repeat(i);
    i++;
    console.log(newWord);
  }
};

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value.split('\n');
  convertCamelCase(text);
});
