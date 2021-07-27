'use strict';

/*
#About Javascript

High-level = don't have to ascribe resources like memory/ram
Can clean the memory
Can only interpreted
multi-paradigm:
1) procedural
2) OOP, functional programming
prototype has all the array methods
JS have first class functions where functions are treated as variables
Cocurrency model = how js handles multiple taska at the same time
- it can only run one thing at a time (single thread)
uses "event loop" to run things in the background and then run them in main when done

Call stack = where code is executed and is called execution context
Heap = where objects live

modern JS is mixed of compilation and interpretation called "just in time" compilation
interpretation: interpreter runs through source code and executes it line by line (slow)
compilation is entire code is converted to machine code at one, then written in binary so executed by computer (fast)

#"just in time" compilation
1) Parsing - parses code to AST
2) Compilation - compiles 
3) Execution - executes code
4) Optimization - during execution it recompiles

Functions can only be executed when called (for top level code)
Execution Context: Environment in which a piece of JS is executed
There is only one Executioin Context
There is one execution context per function. Each new function is a new execution context

# What is inside the Execution Context
1) Variable Environment - let/const/var/ functions/ arguments objects
2) Scope chain - consists of refernces to variables outside the EC
3) this keyword - generated during creation phase - right before execution
Arrow functions do not have arguments object or this keyword

# The Call Stack
- Has stacks of Execution Contexts

# Scoping
scoping: how our variables are organized and accessed
lexical scoping: scoping controlled by placement of functions and blocks in the code
scope: space or environment where a certain variable is declared. There is global scope, function scope, and block scope
scope of a variable: region of our code where a certain variable can be accessed

# 3 types of scope
global scope - outside any function or clock. Accessed everywhere
function scope: variables inside function, not outside. Also called local scope
block scope (ES5): variables accessed inside block. This only applies to let and const. Functions are also block scoped if in "strict mode"

*/

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear > 1981 && birthYear < 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh, and you are  a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT';
//     }
//     //console.log(str); // does not work
//     console.log(millenial); // will work because var
//     //console.log(add(2, 3));
//     console.log(output);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
//console.log(age);

/* Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope"

Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object

functions are hoisted. var initial value is undefined.
let and const are not hoisted, and are uninitialized , TDZ (temporal dead zone)
function expressions and arrows 

Why TDZ? 
- Makes it easier to avoid and catche errors: accessing variables before declaration is bad practice and should be avoided.
- Make const variables actually worked

Why Hoisting?
- Use functions before actual declaration
- var hoisting is just a byproduct
 */

// Varialbe Hoisting
//console.log(me); //undefined
//console.log(job); //ReferenceError
//console.log(year); //ReferenceError

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// Function Hoisting
console.log(addDec(2, 3)); //5
//console.log(addExpr(2, 3)); //ReferenceError
//console.log(addArrow(2, 3)); //ReferenceError

function addDec(a, b) {
  return a + b;
}

/*
const addExpr = function (a, b) {
  return a + b;
};*/

//const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart(); // var hoists to undefined. undefined is a falsy value

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1; // shows up in property windows object
let y = 2; // does not show up in property windows object
const z = 3; // does not show up in property windows object

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

/* The this keyword
this keyword/variable: Special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used.

this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

method -> this = <Object that is being called>
Simple function call - > this = undefined (in strict mode)
arrow functions -> this = <this of surrounding function (lexical this)>
arrow functions do not get a this
Event listener -> this = <DOM element that the handler is attached to>

this does NOT point to the function itself, and also not the function environment
*/
/*
console.log(this); //returns window

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1980); // returns undefined

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // uses lexical this keyword from parent scope (which is window)
};
calcAgeArrow(1980); // returns window because arrow functions don't have this

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // Uses method borrowing
matilda.calcAge();

const f = jonas.calcAge;
*/

/* Regular functions vs Arrow functions

*/

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1 pre ES6. Use const self/this and reference instead of this
    /*
    const self = this; // self or that
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
      //console.log(this.year >= 1981 && this.year <= 1996);
    };
    */

    // Solution 2. Use arrow function to inherits the this keyword from parent scope
    const isMillenial = () => {
      console.log(this);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`), //the this keyword is global because arrow functions don't have this so calling from global scope
};

jonas.greet(); // hey undefined
jonas.calcAge();

// Arguments only exists in regular functions. Not arrow functions.
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments); //reference error
  return a + b;
};

// addArrow(2, 5, 8);

/* Primative vs Objects
 */

//Primatives logic - searches call stack
let age = 30;
let oldAge = age;
age = 31;
console.log(age); //31
console.log(oldAge); //30

// Objects logic - searches heap which points to the same single object
const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me; // copies object that points to same heap with values
friend.age = 27;
console.log('Friend:', friend); // age 27
console.log('Me:', me); // age 27

// primatives
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//objects
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica); // Davis
console.log('After marriage:', marriedJessica); // Davis

// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// object.assign is only a shallow copy on the first level
const jessicaCopy = Object.assign({}, jessica2); //Creates new object
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2); // Williams
console.log('After marriage:', jessicaCopy); // Davis

// To fix use a deep clone
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2); // 4 family
console.log('After marriage:', jessicaCopy); // 4 family
