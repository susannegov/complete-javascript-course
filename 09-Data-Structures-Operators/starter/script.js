'use strict';

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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
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

// For...of looping arrays
